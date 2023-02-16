<template>
<div id="linedata" style="height:400px;width:100%;background-color:rgb(0,0,0,0.5);"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "linedata",
  data() {
    return {
      station:"",
      city:"",
      myChart:null,
    }
  },
  watch:{
    station(newval){
      console.log(newval)
      var date = new Date();
      var year = date.getFullYear();    //  返回的是年份
      var month = date.getMonth() + 1;  //  返回的月份上个月的月份，记得+1才是当月
      var dates = date.getDate();
      this.request.get("/weekatmospheredata/getweekdata?city="+this.city+"&station="+this.station+"").then(res => {
        var option={
          backgroundColor: '#fff',//背景色
          title: {
            text: ''+res[0].city+res[0].station+'站近一周空气指标',
            textStyle: {
              //文字颜色
              color: '#000000',
              fontsize: '20px'
            },
            top: '0px',
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            textStyle: {
              fontSize: 16,
              //文字颜色
              color: '#000000',
            },
            data: ['AQI', 'CO', 'NO2', 'PM2.5', 'PM10', 'SO2', 'O3']
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            show: true,
            top: '5px',
            iconStyle: {
              borderColor: '#blue',
              backgroundColor: 'fff',
              color: '#000000',
            },
            feature: {
              dataZoom: {
                yAxisIndex: ''
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "#000000",
              }
            },
            data: [''+year+'年'+month+'月'+(dates-6)+'日', ''+year+'年'+month+'月'+(dates-5)+'日',
              ''+year+'年'+month+'月'+(dates-4)+'日', ''+year+'年'+month+'月'+(dates-3)+'日',
              ''+year+'年'+month+'月'+(dates-2)+'日', ''+year+'年'+month+'月'+(dates-1)+'日', ''+year+'年'+month+'月'+dates+'日']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: "#000000",
              }
            },
          },
          series: [
            {
              name: 'AQI',
              type: 'line',
              stack: 'Total',
              color:'#6495ED',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#6495ED",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].aqi, res[5].aqi, res[4].aqi, res[3].aqi, res[2].aqi, res[1].aqi, res[0].aqi]
            },
            {
              name: 'CO',
              type: 'line',
              stack: 'Total',
              color:'#4169E1',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#4169E1",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].co, res[5].co, res[4].co, res[3].co, res[2].co, res[1].co, res[0].co]
            },
            {
              name: 'NO2',
              type: 'line',
              stack: 'Total',
              color:'#8470FF',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#8470FF",  //背景颜色
                opacity: 0.2,   //透明度
              },
              data: [res[6].no2, res[5].no2, res[4].no2, res[3].no2, res[2].no2, res[1].no2, res[0].no2]
            },
            {
              name: 'PM2.5',
              type: 'line',
              stack: 'Total',
              color:'#0000FF',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#0000FF",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].pm25, res[5].pm25, res[4].pm25, res[3].pm25, res[2].pm25, res[1].pm25, res[0].pm25]
            },
            {
              name: 'PM10',
              type: 'line',
              stack: 'Total',
              color:'#00008B',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#00008B",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].pm10, res[5].pm10, res[4].pm10, res[3].pm10, res[2].pm10, res[1].pm10, res[0].pm10]
            },
            {
              name: 'SO2',
              type: 'line',
              stack: 'Total',
              color:'#00FFFF',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#00FFFF",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].so2, res[5].so2, res[4].so2, res[3].so2, res[2].so2, res[1].so2, res[0].so2]
            },
            {
              name: 'O3',
              type: 'line',
              stack: 'Total',
              color:'#00CED1',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#00CED1",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].o3, res[5].o3, res[4].o3, res[3].o3, res[2].o3, res[1].o3, res[0].o3]
            },
          ]
        }
        this.myChart.setOption(option)
      })
    },
    city(newval){
      //console.log(newval)

    }

  },
  mounted() {
    this.bus.$on('todosAll',res => {
      this.city=res
      //console.log(res) // 输出的是A组件传过来的{id: '001', name: '吃饭', isOk: false}
    })
    this.bus.$on('todosAll1',res => {
      this.station=res
      //console.log(res) // 输出的是A组件传过来的{id: '001', name: '吃饭', isOk: false}
    })
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      var date = new Date();
      var year = date.getFullYear();    //  返回的是年份
      var month = date.getMonth() + 1;  //  返回的月份上个月的月份，记得+1才是当月
      var dates = date.getDate();
      this.request.get("/weekatmospheredata/getweekdata?city=合肥市&station=明珠广场").then(res => {
        //2. 基于准备好的dom，初始化echarts实例
        //console.log(res)
        var chartdom=document.getElementById('linedata')
        this.myChart=echarts.init(chartdom)
        var option= {
          backgroundColor: '#fff',//背景色
          title: {
            text: ''+res[0].city+res[0].station+'站近一周空气指标',
            textStyle: {
              //文字颜色
              color: '#000000',
              fontsize: '20px'
            },
            top: '0px',
          },
          tooltip: {
            trigger: 'axis',
            formatter:function(params)
        {
          const result=params[0].marker+params[0].seriesName+
              '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[0].data+'</span>'+'<hr/>'
              +params[1].marker+params[1].seriesName+
              '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[1].data+'mg/m³'+'</span>'
              + '<br/>'+params[2].marker+params[2].seriesName+
              '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[2].data+'ug/m³'+'</span>'
              + '<br/>'+params[3].marker+params[3].seriesName+
              '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[3].data+'ug/m³'+'</span>'
              + '<br/>'+params[4].marker+params[4].seriesName+
              '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[4].data+'ug/m³'+'</span>'
              + '<br/>'+params[5].marker+params[5].seriesName+
              '&nbsp'+'&nbsp'+ '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[5].data+'ug/m³'+'</span>'
              + '<br/>'+params[6].marker+params[6].seriesName+
              '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[6].data+'ug/m³'+'</span>'
          return result;
        }
          },
          legend: {
            textStyle: {
              fontSize: 16,
              //文字颜色
              color: '#000000',
            },
            data: ['AQI', 'CO', 'NO2', 'PM2.5', 'PM10', 'SO2', 'O3']
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            show: true,
            top: '5px',
            right:'100px',
            iconStyle: {
              borderColor: '#blue',
              backgroundColor: 'fff',
              color: '#000000',
            },
            feature: {
              dataZoom: {
                yAxisIndex: ''
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "#000000",
              }
            },
            data: [''+year+'年'+month+'月'+(dates-6)+'日', ''+year+'年'+month+'月'+(dates-5)+'日',
              ''+year+'年'+month+'月'+(dates-4)+'日', ''+year+'年'+month+'月'+(dates-3)+'日',
              ''+year+'年'+month+'月'+(dates-2)+'日', ''+year+'年'+month+'月'+(dates-1)+'日', ''+year+'年'+month+'月'+dates+'日']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: "#000000",
              }
            },
          },
          series: [
            {
              name: 'AQI',
              type: 'line',
              stack: 'Total',
              color: '#6495ED',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#6495ED",  //背景颜色
                opacity: 0.1,   //透明度
              },
                data: [res[6].aqi, res[5].aqi, res[4].aqi, res[3].aqi, res[2].aqi, res[1].aqi, res[0].aqi]
            },
            {
              name: 'CO',
              type: 'line',
              stack: 'Total',
              color:'#4169E1',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#4169E1",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].co, res[5].co, res[4].co, res[3].co, res[2].co, res[1].co, res[0].co]
            },
            {
              name: 'NO2',
              type: 'line',
              stack: 'Total',
              color:'#8470FF',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#8470FF",  //背景颜色
                opacity: 0.2,   //透明度
              },
              data: [res[6].no2, res[5].no2, res[4].no2, res[3].no2, res[2].no2, res[1].no2, res[0].no2]
            },
            {
              name: 'PM2.5',
              type: 'line',
              stack: 'Total',
              color:'#0000FF',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#0000FF",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].pm25, res[5].pm25, res[4].pm25, res[3].pm25, res[2].pm25, res[1].pm25, res[0].pm25]
            },
            {
              name: 'PM10',
              type: 'line',
              stack: 'Total',
              color:'#00008B',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#00008B",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].pm10, res[5].pm10, res[4].pm10, res[3].pm10, res[2].pm10, res[1].pm10, res[0].pm10]
            },
            {
              name: 'SO2',
              type: 'line',
              stack: 'Total',
              color:'#00FFFF',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#00FFFF",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].so2, res[5].so2, res[4].so2, res[3].so2, res[2].so2, res[1].so2, res[0].so2]
            },
            {
              name: 'O3',
              type: 'line',
              stack: 'Total',
              color:'#00CED1',
              areaStyle: {   //添加背景颜色
                type: "default",
                color: "#00CED1",  //背景颜色
                opacity: 0.1,   //透明度
              },
              data: [res[6].o3, res[5].o3, res[4].o3, res[3].o3, res[2].o3, res[1].o3, res[0].o3]
            },
          ]
        }
        this.myChart.setOption(option);
      })
    }
  }
}
</script>

<style scoped>
</style>