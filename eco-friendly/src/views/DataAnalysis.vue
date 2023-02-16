<template>
  <!--    主体盒子-->
  <section class="mainbox" >
    <div id="container"  style="position:absolute;height: 877px;width: 100%"></div>
    <div class="column">
      <div class="panel overview">
        <div class="inner">
          <h1 style="font-size:28px;color:#000;text-align:center;">观察站分布点位</h1>
          <ul>
            <li>
              <h4>{{ this.airall }}</h4>
              <span>天气站总数</span>
            </li>
            <li>
              <h4>{{ this.airgood }}</h4>
              <span>空气优</span>
            </li>
            <li>
              <h4>{{this.airnormal}}</h4>
              <span>空气良</span>
            </li>
            <li>
              <h4>{{this.airbad}}</h4>
              <span>空气差</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="panel">
        <div>
          <div class="chart" >
            <echartspie></echartspie>
          </div>
        </div>
        </div>
      <div class="panel">
        <div >
          <echartsbar></echartsbar>
        </div>
    </div>
      </div>
    <div class="column">
    </div>
    <div class="column">
折线图
      <div class="panel bar">
        <echartsline :selectstation="stationlat"/>
      </div>
雷达图
      <div class="panel radar">
        <scatter :tselectstation="stationname" />
      </div>
      </div>
  </section>

</template>

<script>
// import tabsection from "@/components/tabsection";
import echartspie from "@/components/echartspie";
import echartsline from "@/components/echartsline";
import scatter from "@/components/scatter"
import echartsbar from "@/components/echartsbar"
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "Home",
  data() {
    console.log(this)
    return {
      stationname:"",
      stationlat:"test",
      lngLats:[{}],
      allqualitys:[],
      airgood:null,
      airnormal:null,
      airbad:0,
      airall:0,
      allcitys:["明珠广场","三里街","琥珀山庄","董铺水库(对照点)","长江中路","庐阳区","瑶海区","包河区","滨湖新区","高新区","高教基地","监测站","科创中心","四水厂","济民医院(对照点)",
        "市气象局","清苑社区","扬子职业技术学院","工人疗养院","百货大楼","蚌埠学院", "淮上区政府","高新区","蚌埠田家炳中学","潘新区政府","师范学院","谢家集区政府","八公山区政府",
        "焦岗湖风景区管理处(对照点)","经济技术开发区消防队山南新区","湖东路四小","开发区","慈湖","马钢动力厂","濮塘(对照点)","雨山","监测站","烈山区政府","职业技术学院","社集区检察院"
        ,"市第四中学","市公路局","市新民污水厂","市第九中学","车站新区","市职教基地","环科院","马山宾馆","安庆大学","市人大","延安路89号","黄山东路89号","黄山区政府5号楼",
        "老年大学","人大宾馆","市政府原办公楼","图书馆","市监测站","开发区","阜阳职业技术学院","市规划馆","枣园社区","火车站","远航博物馆","社会福利中心","宿州学院","皖北煤电集团",
        "监测大楼","皖西学院","朝阳厂","开发区","污水处理厂","三国揽胜宫","亳州学院","池州学院","平天湖(对照点)","展览馆","第八中学站","第十二中学" ,"鳌峰子站","敬亭山子站","开发区子站","夏渡子站"],


      allcity:["合肥市 明珠广场站","合肥市 三里街站","合肥市 琥珀山庄站","合肥市 董铺水库（对照点）站","合肥市 长江中路站","合肥市 庐阳区站","合肥市 瑶海区站","合肥市 包河区站","合肥市 滨湖新区站",
      "合肥市 高新区站","合肥市 高教基地站","芜湖市 监测站","芜湖市 科创中心站","芜湖市 四水厂站","芜湖市 济民医院站","芜湖市 市气象局站","芜湖市 清苑社区站","芜湖市 扬子职业技术学院站",
      "蚌埠市 工人疗养院站","蚌埠市 百货大楼站","蚌埠市 淮上区政府站","蚌埠市 高新区站","蚌埠市 蚌埠田家炳中学站","淮南市 潘新区政府站","淮南市 师范学院站","淮南市 谢家集区政府站","淮南市 八公山区政府站"
      ,"淮南市 焦岗湖风景区管理处(对照点)站","淮南市 经济技术开发区消防队站","淮南市 山南新区站","马鞍山市 湖东路四小站","马鞍山 开发区站","马鞍山市 慈湖站","马鞍山市 马钢动力厂站","马鞍山市 濮塘(对照点)站"
      ,"马鞍山市 雨山站","淮北市 监测站","淮北市 烈山区政府站","淮北市 职业技术学院站","淮北市 社集区检察院站","铜陵市 市第四中学站","铜陵市 市公路局站","铜陵市 市新民污水厂站","铜陵市 市第九中学站","铜陵市 车站新区站","铜陵市 市职教基地"
      ,"安庆市 环科院站","安庆市 马山宾馆站","安庆市 安庆大学站","安庆市 市人大站","黄山市 延安路89号站","黄山市 黄山东路89号站","黄山市 黄山区政府5号楼站","滁州市 老年大学站","滁州市 人大宾馆站","滁州市 市政府原办公楼站",
      "滁州市 图书馆站","阜阳市 市监测站","阜阳市 开发区站","阜阳市 阜阳职业技术学院站","阜阳市 市规划馆站","阜阳市 枣园社区站","宿州市 火车站","宿州市 远航博物馆站","宿州市 社会福利中心站","宿州市 宿州学院站"
      ,"宿州市 皖北煤电集团站","六安市 监测大楼站","六安市 皖西学院站","六安市 朝阳区站","六安市 开发区站","亳州市 污水处理厂站","亳州市 三国揽胜宫站","亳州市 亳州学院站","池州市 池州学院站","池州市 平天湖(对照点)站","池州市 展览馆站","池州市 第八中学站","池州市 第十二中学站"
      ,"宣城市 鳌峰子站","宣城市 敬亭山子站","宣城市 开发区子站","宣城市 夏渡子站"],
      lngLat:[[117.1959,31.7848],[117.3072,31.8764],[117.2588,31.8707],[117.1604,31.9052],[117.25,31.8571],[117.266,31.9436],
        [117.336,31.8586],[117.3027,31.7964],[117.2776,31.7385],[117.1318,31.8403],[117.3803,31.9147],[118.3714,31.4134],[118.3673,31.3131],
        [118.4022,31.3839],[118.4209,31.3707],[118.4781,31.3225],[118.2746,31.2326],[117.396,32.939],[117.3605,32.9427],[117.4185,32.8911],
        [117.3533,32.9673],[117.3145,32.8977],[117.3092,32.9314],[116.8305,32.7727],[117.0067,32.6524],[116.8569,32.5951],[116.8281,32.633],
        [116.6325,32.6201],[117.0566,32.6531],[117.0108,32.5893],[118.5092,31.6837],[118.5024,31.6449],[118.5228,31.7231],[118.48,31.6928],
        [118.6245,31.7241],[118.4918,31.6809],[116.8004,33.975],[116.8091,33.9007],[116.7856,33.9477],[116.8873,33.9836],[117.8177,30.9412],
        [117.8059,30.9273],[117.7807,30.9413],[117.7439,30.8792],[117.846,30.9413],[117.8483,30.97],[117.0809,30.5177],[117.0331,30.5119],
        [116.9896,30.6145],[117.0598,30.5351],[118.2903,29.6963],[118.327,29.7178],[118.1371,30.2756],[118.3093,32.3153],[118.3244,32.2786],
        [118.3118,32.3038],[115.8277,32.8929],[115.8554,32.8605],[115.784,32.8892],[115.7901,32.8631],[115.836,32.9183],[116.989,33.6306],
        [116.9509,33.666],[116.9708,33.591],[116.9884,33.6305],[116.9648,33.6252],[116.5079,31.737],[118.4738,31.7643],[116.4996,31.7905],
        [116.5567,31.7886],[115.8072,33.8399],[115.7789,33.8518],[115.7633,33.8034],[117.47,30.6618],[117.4974,30.6539],[117.4918,30.6617],
        [117.5627,30.695],[117.5038,30.6243],[118.7581,30.9454],[118.7385,30.9743],[118.7173,30.9427],[118.7724,30.9141]
      ],
    }
  },
created() {
  this.initCount();
},
  mounted() {

    this.initMap()
    this.initdata()
  },
  //引入我的AQI仪表盘组件
  components:{
    echartspie :echartspie,
    // tabsection:tabsection,
    echartsline:echartsline,
    scatter:scatter,
    echartsbar:echartsbar,
  },
  methods: {
    initCount(){
      this.request.get("/nowatmospheredata").then(res=>{
        this.lngLats=res
      })
    },
    initMap(){

      AMapLoader.load({
        key: "0e5904b2829e2e25ffcdecc5685b2209",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.MoveAnimation', 'AMap.ToolBar', 'AMap.Scale', 'AMap.MapType', 'AMap.Geolocation', 'AMap.HawkEye', 'AMap.HeatMap'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        var _this = this;
        this.map = new AMap.Map("container", {  //设置地图容器id
          resizeEnable: true,
          mapStyle: 'amap://styles/macaron',
          viewMode: "3D",    //是否为3D地图模式
          zoom: 7,           //初始化地图级别
          center: [118.3093, 32.3153], //初始化地图中心点位置
          doubleClickZoom: true,
          // 是否允许鼠标拖拽
          dragEnable: true,
          keyboardEnable: false,
        });
        let marker;
        for (var i = 0; i < _this.lngLat.length; i++) {
          marker = new AMap.Marker({
            title: _this.allcitys[i],
            position: _this.lngLat[i],
            map: _this.map,
          });


          marker.content=["<h2>"+_this.allcity[i]+"</h2>"]
          // marker.content =["<h2>"+_this.lngLats[i].city+"  "+_this.lngLats[i].station+"</h2>  AQI指数:"+_this.lngLats[i].aqi+"   CO指数:"+_this.lngLats[i].co+"<br/>" +
          // "NO2指数:"+_this.lngLats[i].no2+"   PM2.5指数:"+_this.lngLats[i].pm25+"<br/> PM10指数:"+_this.lngLats[i].pm10+"   SO2指数:"+_this.lngLats[i].so2+"<br/> O3指数:"+_this.lngLats[i].o3+"<br/>" +
          // "<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>"]


          marker.on("click", this.markerClick);
          //marker.emit("click", { target: marker });
        }
      })
    },
    markerClick(e) {
      this.stationlat=e.target._originOpts.title
      this.stationname=e.target._originOpts.title
      //console.log(e.target._originOpts.title)
      //offset用来偏移，第一个参数是左右，第一个参数是上下。左和上是负的，右和下是正的
      var infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -30),
      });
      infoWindow.setContent(e.target.content);
      infoWindow.open(this.map, e.target.getPosition());
    },
    initdata(){
      this.request.get("/nowatmospheredata/GetAllquality").then(res=>{
        console.log(res)
        for(var i=0;i<res.length;i++)
        {
          if(res[i].city==="海口市"){continue}
          if(res[i].city==="儋州市"){continue}
          if(res[i].city==="三亚市"){continue}
          if(res[i].quality==="良")
          {
             this.airnormal+=1
          }
          else if(res[i].quality==="优")
          {
              this.airgood+=1
          }
          else if(res[i].quality==="差")
          {
              this.airbad+=1
          }
        }
        this.airall=this.airgood+this.airbad+this.airnormal
      })
    }
  }
}



</script>

<style scoped>
.mainbox {
  display: flex;
  /*min-width:100%;*/
  height: 0px;
}
.mainbox .column {
  flex:3rem;
}
.mainbox .column:nth-child(2) {
  flex: 2;
  margin: 0 0.125rem 0.1875rem;
  /*overflow: hidden;*/
}
/* 利用边框图片切割 */
.mainbox .panel{
  position: relative;
  border: 15px solid transparent;
  border-width: 30px 20px 30px 20px;
  border-image-source: url(../assets/images/blue.png);
  border-image-slice: 78 45 78 45;
  border-image-width: 20px;
}
/* 让子容器撑开覆盖父容器*/
/*.panel .inner{*/
/*  position:absolute;*/
/*  padding:10px 10px;*/
/*  background-color: #fff;*/
/*}*/
.mainbox.column.overview {
  height:2.5rem;
}
.mainbox ul{
  display:flex;
  justify-content:space-between;
  white-space:nowrap;
}
.mainbox ul li span {
  font-size: 15px;
  color:#000;
  text-align:center;
}
.mainbox ul li h4 {
  font-size:20px;
  color:aliceblue;
  text-align:center;
}
table {
  border-collapse: collapse;
  color: white;
  width: 100%;
}

table, td, th {
  border: transparent;
  height: 40px;
  text-align:center;
}

</style>