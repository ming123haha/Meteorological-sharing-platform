<template>
  <body>
  <div style="position: relative" id="viewDiv">
    <div id="BasemapGallery" style="position: absolute;top:10px;right: 200px"></div>
    <!-- 导出的div -->
    <div id="printMap"  style="position:absolute;top:10px;left: 1350px;box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px; "></div>
    <!-- 工具条区域 -->
    <div id="overviewDiv"><div id="extentDiv"></div></div>
    <div id="fullExtent" style="position:absolute;top:10px;right: 240px">
      <button title="全图显示" id="fullextent-btn" class="esri-widget--button esri-interactive esri-icon-zoom-out-fixed" style="border: none;box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 2px; "></button>
    </div>
  </div>

  <div style="position: absolute;width: 60px;height: 120px;top: 200px;right: 400px">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix" style="text-align: center">
        <span>克里金插值</span>
      </div>
      <div class="text item">
        {{'普通克里金（Ordinary Kriging, OK）是最早被提出和系统研究的克里金法，
          并随着地统计学的发展衍生出一系列变体和改进算法。
          普通克里金是一个线性估计系统，
          适用于任何满足各向同性假设的固有平稳随机场中，
          数学期望与其位置无关，且协方差仅是点间距离的函数。通常随机场的协方差函数是未知的，需要使用变异函数作为近似，此时变异函数也仅与点间距离有关。'}}
      </div>

    </el-card>
  </div>

  </body>



</template>

<script>
import Map from "@arcgis/core/Map";
import View from "@arcgis/core/views/MapView"
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Expand from "@arcgis/core/widgets/Expand";
import Basemap from "@arcgis/core/Basemap";
import Portal from "@arcgis/core/portal/Portal";
import Compass from "@arcgis/core/widgets/Compass";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import * as promiseUtils from "@arcgis/core/core/promiseUtils";
import Print from "@arcgis/core/widgets/Print";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";


export default {
  data() {
    return {

    }
  },
  beforeMount() {
    console.log(reactiveUtils)
  },
  created() {

  },
  mounted() {
    this.initMap()
  },
  beforeDestroy() {
  },
  methods: {
    initMap() {
      // esriConfig.portalUrl = "https://linux111.esrichina.com/arcgis"
      const m_Map = new Map({
        basemap: "topo-vector"
      })
      const view = new View({
        container: "viewDiv",
        map: m_Map,
        center: [115, 32],
        zoom: 5
      })
      const compass=new Compass({ //指南针
        view:view
      });
      view.ui.add(compass,"bottom-left");
      //导出地图小组件
      view.when(() => {
        const print = new Print({
          view: view,
          printServiceUrl:
              "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
        });
        var printExpand=new Expand({
          view:view,
          content:print,
          expandTooltip:"导出"
        },"printMap")
      });

      let layer = new MapImageLayer({
        url: "http://localhost:6080/arcgis/rest/services/graduate/MapServer"
      });
      // layer.portalItem="test"
      var expand =  new Expand({ //图层集
        content:new BasemapGallery({
          view:view,
          // 设定图层集有哪些图层
          source: [Basemap.fromId("topo-vector"), Basemap.fromId("hybrid"),Basemap.fromId("osm")], // autocasts to LocalBasemapsSource
        }),
      },"BasemapGallery")
      expand.expanded=false

      m_Map.add(layer);
      //鹰眼地图定义
      var overviewMap = new Map({
        basemap:"hybrid"
      })
      //鹰眼地图视图
      var mapView = new MapView({
        container:"overviewDiv",
        map:overviewMap,
        constraints:{
          rotationEnabled:false  //不允许旋转
        }
      })
      //去掉缩略图的ui
      mapView.ui.components = []

      //全图显示
      var extentButton = document.getElementById("fullextent-btn")
      extentButton.addEventListener("click",()=>{
        FullExtentShow()})
      //定义全图显示函数
      function FullExtentShow(){
        view.center=[110,30] //地图中心点
        view.zoom=4
      }


      view.ui.remove('attribution')
      // 鹰眼地图监听主地图的extent发生变化
      mapView.when(() => {
        view.when(() => {
          setup();
        });
      });
      //mapView.stationary是判断当前视图是否静止
      var extentDebouncer = promiseUtils.debounce(() => {
        if (mapView.stationary) {
          mapView.goTo({
            center: view.center,
            scale:view.scale*2*Math.max(view.width / mapView.width,view.height / mapView.height)
          });
        }
      });

      function setup() {

        //设置框体符号
        const extent2Dgraphic = new Graphic({
          geometry: null,
          symbol: {
            type: "simple-fill",
            color: [0, 0, 0, 0.2],
            outline: null
          }
        });
        mapView.graphics.add(extent2Dgraphic); //添加设置的填充符号

        reactiveUtils.watch(
            () => view.extent, //监听底图的全图范围
            (extent) => {
              //当视图静止时，同步鹰眼地图位置
              extentDebouncer().then(() => {
                extent2Dgraphic.geometry = extent;  //框框的大小是底图的大小
              });
            });
      }
    }

  }
}
</script>

<style>
html,body,#viewDiv{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#overviewDiv {
  position: absolute;
  bottom: 20px;
  right: 12px;
  width: 300px;
  height: 200px;
  border: 1px solid black;
  z-index: 1;
  overflow: hidden;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 450px;
}
</style>