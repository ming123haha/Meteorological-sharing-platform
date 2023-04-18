<template>
  <body>
  <meta charSet="utf-8"/>
  <div id="viewDiv"></div>
  <div id="timeSlider"></div>
  <div id="titleDiv" className="esri-widget">
    <div id="titleText">未来几天平均气温</div>
  </div>
  <div>
    <input id="loadexcel" type="file" ref="fileInput" accept=".xlsx, .xls" @change="handleFileUpload">
  </div>

  </body>
</template>

<script>
import * as XLSX from 'xlsx'
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import Graphic from "@arcgis/core/Graphic"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js"


export default {
  data() {
    return {
      arcgis_map:null,
      arcgis_view:null,
      arcgis_featurelayer:null,
      arcgis_timeslider:null,
      arcgis_features:null,
      arcgis_bufferlayer:null,
      data: null,
      workbook: null,
      exceldata:null,
      sheetName:null
    }
  },
  beforeMount() {
  },
  created() {

  },
  watch: {
    exceldata: {
      handler(newValue, oldValue) {
        this.arcgis_bufferlayer.removeAll()
        //图元图层
        const bufferLayer = new GraphicsLayer({
          title: "图元图层"
        })
        const featurelayer = this.arcgis_featurelayer

        //分级色彩设置
        const Sym0 = {
          type: "simple-fill",
          color: [0, 0, 255, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym2_5 = {
          type: "simple-fill",
          color: [51, 0, 255, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym5 = {
          type: "simple-fill",
          color: [0, 102, 255, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym7_5 = {
          type: "simple-fill",
          color: [0, 150, 255, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym10 = {
          type: "simple-fill",
          color: [0, 200, 255, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym12_5 = {
          type: "simple-fill",
          color: [0, 255, 255, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym15 = {
          type: "simple-fill",
          color: [255, 255, 0, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym17_5 = {
          type: "simple-fill",
          color: [255, 204, 0, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym20 = {
          type: "simple-fill",
          color: [255, 153, 0, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym22_5 = {
          type: "simple-fill",
          color: [255, 102, 0, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym25 = {
          type: "simple-fill",
          color: [255, 21, 0, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        const Sym27_5 = {
          type: "simple-fill",
          color: [255, 0, 0, 0.8],
          outline: {
            color: [0, 0, 0, 0.1],
            width: 1
          }
        }
        var map = this.arcgis_map
        map.add(bufferLayer)
        // Start a time slider animation that advances
        // ten times a second and stops when it reaches the end.
        this.arcgis_timeslider.set({
          loop: false,
          playRate: 1000
        });

        this.arcgis_timeslider.play();
        this.arcgis_timeslider.watch("timeExtent", function (timeExtent) {
          // 清除所有图元
          bufferLayer.removeAll();

          var date = new Date(timeExtent.start);
          var dateString = date.toLocaleString();

          var queryparams = featurelayer.createQuery()
          queryparams.where = "1=1"
          queryparams.returnGeometry = true

          featurelayer.queryFeatures(queryparams).then(function (results) {
            var features = results.features
            var graphicsToAdd = []; // 存储待添加的图元数组

            for(var i=0; i<newValue.length; i++) {
              var city_name = newValue[i]['站点'];
              var aver_temp = newValue[i]['平均气温'];
              var geometry = null; // 存储城市对应的几何图形
              for (var j = 0; j < features.length; j++) {
                var NAME = features[j].attributes['NAME']
                if (NAME === city_name) {
                  geometry = features[j].geometry
                  break; // 找到城市对应的几何图形后立即跳出循环
                }
              }

              // 根据平均气温选择对应的符号
              var symbol;
              if (aver_temp >= 0 && aver_temp <= 2.5) {
                symbol = Sym0;
              } else if (aver_temp <= 5) {
                symbol = Sym2_5;
              } else if (aver_temp <= 7.5) {
                symbol = Sym5;
              } else if (aver_temp <= 10) {
                symbol = Sym7_5;
              } else if (aver_temp <= 12.5) {
                symbol = Sym10;
              } else if (aver_temp <= 15) {
                symbol = Sym12_5;
              } else if (aver_temp <= 17.5) {
                symbol = Sym15;
              } else if (aver_temp <= 20) {
                symbol = Sym17_5;
              } else if (aver_temp <= 22.5) {
                symbol = Sym20;
              } else if (aver_temp <= 25) {
                symbol = Sym22_5;
              } else if (aver_temp <= 27.5) {
                symbol = Sym25;
              } else {
                symbol = Sym27_5;
              }

              // 如果找到了城市对应的几何图形，并且当前日期字符串包含月份信息
              if (geometry && dateString.indexOf(newValue[i]['月']) > -1) {
                var graphic = new Graphic({
                  geometry: geometry,
                  symbol: symbol
                });
                graphicsToAdd.push(graphic); // 将图元添加到待添加数组中
              }
            }

            bufferLayer.addMany(graphicsToAdd); // 批量添加图元
            map.add(bufferLayer);
          });
        });

      },
      deep: true // 表示要深度监听exceldata属性中的变化
    }
  },

  mounted() {
    this.initMap()
  },
  beforeDestroy() {
  },
  methods: {
    handleFileUpload() {
      const file = this.$refs.fileInput.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(sheet);

          this.exceldata = jsonData;
          this.sheetName = workbook.SheetNames[0];
        } catch (err) {
          console.error(err);
        }
      }
      // 启动读取操作
      reader.readAsArrayBuffer(file);
      // 在数据处理完毕后进行其他操作
      console.log(this.exceldata);

    },
    initMap() {
      const map = new Map({
        basemap: "topo-vector"
      })

      const view = new MapView({
        map: map,
        container: "viewDiv",
        zoom: 4,
        center: [115, 32]
      })
      const featureLayer = new FeatureLayer({
        url: "http://localhost:6080/arcgis/rest/services/安徽省气象预测/FeatureServer/0",
        timeInfo: {
          startField: "time", // name of the date field
          interval: {
            // set time interval to one day
            unit: "months",
            value: 1
          }
        }
      })

      const timeslider = new TimeSlider({
        container: "timeSlider",
        view: view,
        mode: "instant",
        fullTimeExtent: {
          start: new Date(2023, 4, 1),
          end: new Date(2023, 11, 1)
        },
        timeVisible: true, // show the time stamps on the timeslider
      })

      view.ui.add(timeslider, "manual");

      // add the UI for a title
      view.ui.add("titleDiv", "top-right");

      map.add(featureLayer)


      const Sym0 = {
        type: "simple-fill",
        color: [0, 0, 255, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym2_5 = {
        type: "simple-fill",
        color: [51, 0, 255, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym5 = {
        type: "simple-fill",
        color: [0, 102, 255, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym7_5 = {
        type: "simple-fill",
        color: [0, 150, 255, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym10 = {
        type: "simple-fill",
        color: [0, 200, 255, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym12_5 = {
        type: "simple-fill",
        color: [0, 255, 255, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym15 = {
        type: "simple-fill",
        color: [255, 255, 0, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym17_5 = {
        type: "simple-fill",
        color: [255, 204, 0, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym20 = {
        type: "simple-fill",
        color: [255, 153, 0, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym22_5 = {
        type: "simple-fill",
        color: [255, 102, 0, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym25 = {
        type: "simple-fill",
        color: [255, 21, 0, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }
      const Sym27_5 = {
        type: "simple-fill",
        color: [255, 0, 0, 0.8],
        outline: {
          color: [0, 0, 0, 0.1],
          width: 1
        }
      }


      const bufferLayer = new GraphicsLayer({
        title: "图元图层"
      })
      //第一个时间段添加图元
      var queryparams = featureLayer.createQuery()
      queryparams.where = "1=1";
      queryparams.returnGeometry = true
      featureLayer.queryFeatures(queryparams).then(function (featureSet) {
        // 获取 FeatureSet 中的所有要素
        var features = featureSet.features;
        //设置一个默认的graphic
        var graphic = new Graphic({
          geometry: res_geo,
          symbol: Sym0
        })
        for(let i=0; i<features.length; i++){
          //获取到温度
          var temperature = features[i].attributes['temperatur']
          var res_geo = features[i].geometry
          if (temperature >= 0 && temperature <= 2.5){
            console.log("test")
             graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym0
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 2.5 && temperature <= 5){
            graphic = new Graphic({
              geometry:res_geo,
              symbol: Sym2_5
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 5 && temperature <= 7.5){
            graphic = new Graphic({
              geometry:res_geo,
              symbol: Sym5
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 7.5 && temperature <= 10){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym7_5
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 10 && temperature <= 12.5){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym10
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 12.5 && temperature <= 15){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym12_5
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 15 && temperature <= 17.5){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym15
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 17.5 && temperature <= 20){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym17_5
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 20 && temperature <= 22.5){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym20
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 22.5 && temperature <= 25){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym22_5
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 25 && temperature <= 27.5){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym25
            })
            bufferLayer.add(graphic)
          }
          else if(temperature >= 27.5 && temperature <= 30){
            graphic = new Graphic({
              geometry: res_geo,
              symbol: Sym27_5
            })
            bufferLayer.add(graphic)
          }
          map.add(bufferLayer)
        }
      })

      this.arcgis_bufferlayer = bufferLayer



      view.whenLayerView(featureLayer).then((lv) => {
        timeslider.stops = {
          interval: {
            value: 1,
            unit: "months"
          }
        };
      });



      const legend = new Legend({
        view: view,
        layerInfos: [{
          layer: featureLayer,
          title: "安徽省2023年气象预测", // 图例标题
        }]
      });
      const legendExpand = new Expand({
        expandIconClass: "esri-icon-legend",
        expandTooltip: "Legend",
        view: view,
        content: legend,
        expanded: false
      });
      view.ui.add(legendExpand, "top-left");
      view.ui.remove('attribution')




      this.arcgis_timeslider = timeslider
      this.arcgis_featurelayer = featureLayer
      this.arcgis_map = map
    }
  }
}
</script>

<style>
html,
body,
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

#timeSlider {
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: 20px;
}

#titleDiv {
  padding: 10px;
  font-weight: 36;
  text-align: center;
}

#loadexcel {
  position: absolute;
  top:100px;
  left: 100px;
}



</style>
