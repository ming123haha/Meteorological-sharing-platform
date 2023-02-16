<template>
<div class="activecard" v-show="isshow">
  <div id="main" style="height: 200px;width: 200px;opacity: 0.8;position: relative">       </div>
    <button @click="close" style="background-color:transparent;color:#fff;font-size: 14px; position:absolute;top:20px;right:20px;border:transparent">X</button>
    <div class="table">
      <table>
      <tr>
      <th colspan="2">测站:{{city}} {{station}}</th>
      </tr>
      <tr>
      <td>AQI指数:</td>
        <td>{{aqi}}</td>
      </tr>
        <tr>
        <td>C0指数:</td>
          <td>{{CO}}mg/m³</td>
        </tr>
          <tr>
          <td>NO2指数:</td>
            <td>{{NO2}}ug/m³</td>
          </tr>
         <tr>
         <td>PM2.5指数:</td>
           <td>{{PM25}}ug/m³</td>
         </tr>
         <tr>
         <td>PM10指数:</td>
           <td>{{PM10}}ug/m³</td>
         </tr>
        <tr>
        <td>SO2指数:</td>
          <td>{{SO2}}ug/m³</td>
        </tr>
         <tr>
         <td>O₃指数:</td>
           <td>{{O3}}ug/m³</td>
         </tr>              
      </table>
    </div>

    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "echartsWatch",
  props: ['selectstaion'],
  watch: {
    selectstaion(newval) {
      this.request.get("/nowatmospheredata/GetData?station=" + newval + "").then(res => {
        this.aqi=res[0].aqi
        this.city=res[0].city
        this.station=res[0].station
        this.CO=res[0].co
        this.NO2=res[0].no2
        this.PM25=res[0].pm25
        this.PM10=res[0].pm10
        this.SO2=res[0].so2
        this.O3=res[0].o3
        this.echartsinit(this.aqi)
      })
    }
  },
  data(){
    return{
      isshow:true,
      aqi:"无数据",
      CO:"无数据",
      NO2:"无数据",
      PM25:"无数据",
      PM10:"无数据",
      SO2:"无数据",
      O3:"无数据",
      city:"无数据",
      station:"无数据",
    }
  },
  mounted() {

  },
  methods:{
    close(){
      this.isshow=false
      console.log("执行!")
    },
    initialize(e){

    },
    echartsinit(aqi) {
      this.isshow=true
      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        series: [
          {
            type: 'gauge',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              show: true,
              lineStyle: {
                width: 5,
                color: [
                  [0.34, '#bbf5d3'],
                  [0.66, '#ffed7e'],
                  [1, '#d90f1e']
                ]
              }
            },
            pointer: {
              icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
              length: '50%',
              width: 5,
              offsetCenter: [0, '-20%'],
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              length: 5,
              lineStyle: {
                color: 'auto',
                width: 10
              }
            },
            splitLine: {
              length: 0,
              lineStyle: {
                color: 'auto',
                width: 0,
              }
            },
            axisLabel: {
              color: '#464646',
              fontSize: 15,
              distance: -25,
              textStyle: {
                //文字颜色
                color: '#fff',
              },
              formatter: function (value) {
                console.log(value)
                if (value === 0.875) {
                  return '差';
                } else if (value === 0.5) {
                  return '良';
                } else if (value === 0.125) {
                  return '优';
                }
                return '';
              }
            },
            title: {
              offsetCenter: [0, '30%'],
              fontSize: 15 ,
              textStyle: {
                //文字颜色
                color: '#fff',
              },
            },
            detail: {
              fontSize: 15,
              offsetCenter: [0, '0%'],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 200) ;
              },
              color: 'auto'
            },
            data: [
              {
                value: aqi/200,
                name: 'AQI指数'
              }
            ]
          }
        ]
      };

      option && myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.activecard {
  border: 15px solid transparent;
  border-width: 30px 20px 30px 20px;
  border-image-source: url(../assets/images/blue.png);
  border-image-slice: 78 45 78 45;
  border-image-width: 20px;
}

.table {
  height: 100px;
  color:#fff;
  position:relative;
  top:-60px;

}
table,th,td{
  font-size: 13px;
  color:white;
    background-color: rgba(24, 139, 220, 0.1);   
}
table {
  width: 100%;
}
table th {
  height: 20px;
  font-size: 18px;
}
table td {
  text-align:center;
}
</style>