<template>
  <div id="bar" style="height:350px">
  </div>
</template>

<script>
import  * as echarts from 'echarts'
export default {
  name: "echartsbar",
  data() {
    return {
      cityallranks:[],
      cityaqirank:[],
      test:["test"]
    }
  },
  created() {
    this.initdata()
  },
  mounted() {

    this.echartsInit()
  },
  methods: {
    initdata(){
    },
    echartsInit() {

      var option;
      this.request.get("/nowatmospheredata/GetNowAQI").then(res=>{
        // if(res[0].aqi>res[2].aqi){
        //   console.log("ok!")
        // }

        var num=res.length
        var i,j;
        var temp;
        for(i=num-1;i>0;i--){
          for(j=0;j<i;j++){
            if(res[j].aqi>res[j+1].aqi){
              temp=res[j]
              res[j]=res[j+1]
              res[j+1]=temp
            }
          }
        }
        console.log(res)
        for(var k=0;k<res.length;k++){
          if(res[k].aqi==null){continue}
          if(res[k].city==="三亚市"){continue}
          if(res[k].city==="儋州市"){continue}
          if(res[k].city==="海口市"){continue}
          this.cityallranks.push(res[k])

          if(this.cityallranks.length===7)break
        }
        //console.log(this.cityallranks)
        option = {
          title: {
            text: '测区空气质量当天排名',
            textStyle: {
              //文字颜色
              color: '#fff',
            },
            top:'0px',
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            },
            formatter:function (params){
              const result=params[0].axisValue+'<br/>'+params[0].marker+params[0].seriesName+
                  '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+ '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
                  +params[0].data+'</span>'+'<hr/>'
                  +params[1].marker+params[1].seriesName+
                  '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
              +params[1].data+'mg/m³'+'</span>'
                  + '<br/>'+params[2].marker+params[2].seriesName+
                  '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
                  +params[2].data+'ug/m³'+'</span>'
                  + '<br/>'+params[3].marker+params[3].seriesName+
                  '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
                  +params[3].data+'ug/m³'+'</span>'
                  + '<br/>'+params[4].marker+params[4].seriesName+
                  '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
                  +params[4].data+'ug/m³'+'</span>'
                  + '<br/>'+params[5].marker+params[5].seriesName+
                  '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
                  +params[5].data+'ug/m³'+'</span>'
                  + '<br/>'+params[6].marker+params[6].seriesName+
                  '&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'&nbsp'+'<span style=\"font-size: 14px;font-weight: 900;">'
                  +params[6].data+'ug/m³'+'</span>'
              return result;
            }
          },
          legend: {
            textStyle:{
              color:'#fff',
            },
            top:'25px',
          },
          grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLabel:{

              textStyle:{
                color:'#fff',
              },
            },
          },
          yAxis: {
            type: 'category',
            axisLabel:{
              textStyle:{
                color:'#fff',
              },
            },
            data: [''+this.cityallranks[6].city+this.cityallranks[6].station+'站', ''+this.cityallranks[5].city+this.cityallranks[5].station+'站',
              ''+this.cityallranks[4].city+this.cityallranks[4].station+'站',''+this.cityallranks[3].city+this.cityallranks[3].station+'站',
              ''+this.cityallranks[2].city+this.cityallranks[2].station+'站', ''+this.cityallranks[1].city+this.cityallranks[1].station+'站',
              ''+this.cityallranks[0].city+this.cityallranks[0].station+'站']
          },
          toolbox: {
            show: true,
            top: '0px',
            iconStyle: {
              borderColor: '#blue',
              backgroundColor: 'fff',
              color: '#fff',
            },
            feature: {
              // dataZoom: {
              //   yAxisIndex: ''
              // },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          series: [
            {
              name: 'AQI',
              type: 'bar',
              stack: 'total',
              color:'#065279',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series'
              },


              data: [this.cityallranks[0].aqi , this.cityallranks[1].aqi, this.cityallranks[2].aqi,
                this.cityallranks[3].aqi, this.cityallranks[4].aqi, this.cityallranks[5].aqi, this.cityallranks[6].aqi]
            },

            {
              name: 'CO',
              type: 'bar',
              stack: 'total',
              color:'#177cb0',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [this.cityallranks[0].co, this.cityallranks[1].co, this.cityallranks[2].co,
                this.cityallranks[3].co, this.cityallranks[4].co, this.cityallranks[5].co, this.cityallranks[6].co]
            },
            {
              name: 'NO2',
              type: 'bar',
              stack: 'total',
              color:'#1685a9',
              label: {
                show: true,
              },
              emphasis: {
                focus: 'series'
              },
              data: [this.cityallranks[0].no2, this.cityallranks[1].no2, this.cityallranks[2].no2,
                this.cityallranks[3].no2, this.cityallranks[4].no2, this.cityallranks[5].no2, this.cityallranks[6].no2]
            },
            {
              name: 'PM2.5',
              type: 'bar',
              stack: 'total',
              color:'#3eede7',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [this.cityallranks[0].pm25, this.cityallranks[1].pm25, this.cityallranks[2].pm25,
                this.cityallranks[3].pm25, this.cityallranks[4].pm25, this.cityallranks[5].pm25, this.cityallranks[6].pm25]
            },
            {
              name: 'PM10',
              type: 'bar',
              stack: 'total',
              color:'#44cef6',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [this.cityallranks[0].pm10, this.cityallranks[1].pm10, this.cityallranks[2].pm10,
                this.cityallranks[3].pm10, this.cityallranks[4].pm10, this.cityallranks[5].pm10, this.cityallranks[6].pm10]
            },{
              name: 'SO2',
              type: 'bar',
              stack: 'total',
              color:'#70f3ff',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [this.cityallranks[0].so2, this.cityallranks[1].so2, this.cityallranks[2].so2,
                this.cityallranks[3].so2, this.cityallranks[4].so2, this.cityallranks[5].so2, this.cityallranks[6].so2]
            },{
              name: 'O3',
              type: 'bar',
              stack: 'total',
              color:'#003472',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: [this.cityallranks[0].o3, this.cityallranks[1].o3, this.cityallranks[2].o3,
                this.cityallranks[3].o3, this.cityallranks[4].o3, this.cityallranks[5].o3, this.cityallranks[6].o3]
            }
          ]
        };

        var chartDom = document.getElementById('bar');
        var myChart = echarts.init(chartDom);

        option && myChart.setOption(option);
      })


    }
  }
}
</script>

<style scoped>

</style>