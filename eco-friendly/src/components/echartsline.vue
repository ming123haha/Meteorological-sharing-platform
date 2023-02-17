<template>
  <div id="line" style="height: 400px;">
  </div>
</template>

<script>
import  * as echarts from 'echarts'
export default {
  props: ['selectstation'],
  name: "echarts-line",
  data() {
    return {
      latitude:this.selectstation,
    }
  },
  watch: {
    selectstation(newVal) {
      this.request.get("/chzuatmosphere/GetCHZUdata?stationname="+newVal+"").then(res => {
        echarts.init(document.getElementById('line')).setOption({
          //3. 指定图表的配置项和数据
          title: {
            text: ""+res[0].city+res[0].station+"站"+'一天内空气质量变化',
            textStyle: {
              //文字颜色
              color: '#fff',
            },
            top: '10px',
          },
          //设置图表大小
          grid: {
            x: 30,
            y: 70,
            x2: 50,
            y2: 60,
            borderWidth: 1
          },
          tooltip: {
            trigger: 'axis',
            formatter:function (params){
              let circle="<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;\"></span>"
              const result=params[0].axisValue+'<br/>'+circle+''+params[0].seriesName+'&nbsp'+'&nbsp'+'AQI指数:'+'<span style="font-size: 14px;font-weight: 900">'+params[0].data+'</span>';
                  return result
            }
          },
          legend: {
            bottom: '10px',
            textStyle: {
              //文字颜色
              color: '#fff',
            },
          },
          toolbox: {
            show: true,
            top: '30px',
            iconStyle: {
              borderColor: '#blue',
              backgroundColor: 'fff',
              color: '#fff',
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
                color: '#fff',
              },
            },
            data: ['0：00', '4：00', '8：00', '12：00', '16：00', '20：00']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} ',
              textStyle: {
                color: '#fff',
              },
            },
          },
          series: [
            {
              name: ""+res[0].city+res[0].station+"站",
              type: 'line',
              radius: '30%',
              center: ['30%', '30%'],
              areaStyle: {
                normal: {
                  color: 'fff' //改变区域颜色
                }
              },

              data: [ res[5].aqi,res[4].aqi, res[3].aqi, res[2].aqi, res[1].aqi, res[0].aqi],
              markPoint: {
                data: [{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}]
              },
              markLine: {
                data: [
                  {type: 'average', name: 'Avg'},
                  [
                    {
                      symbol: 'none',
                      x: '90%',
                      yAxis: 'max'
                    },
                    {
                      symbol: 'circle',
                      label: {
                        position: 'start',
                        formatter: 'Max'
                      },
                      type: 'max',
                      name: '最高点'
                    }
                  ]
                ]
              }
            }
          ]
        })
      })


    }
  },
  mounted() {
    this.echartsInit()
  },
  methods: {
    echartsInit() {
      this.request.get("/chzuatmosphere/GetCHZUdata?stationname=老年大学").then(res => {
        //2. 基于准备好的dom，初始化echarts实例
        echarts.init(document.getElementById('line')).setOption({
          //3. 指定图表的配置项和数据
          title: {
            text: ""+res[0].city+res[0].station+"站"+'一天内空气质量变化',
            textStyle: {
              //文字颜色
              color: '#fff',
            },
            top: '10px',
          },
          //设置图表大小
          grid: {
            x: 30,
            y: 70,
            x2: 50,
            y2: 60,
            borderWidth: 1
          },
          tooltip: {
            trigger: 'axis',
            formatter:function (params){
              let circle="<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5470c6;\"></span>"
              const result=params[0].axisValue+'<br/>'+circle+''+params[0].seriesName+'&nbsp'+'&nbsp'+'AQI指数:'+'<span style="font-size: 14px;font-weight: 900">'+params[0].data+'</span>';
              return result
            }
          },
          legend: {
            bottom: '10px',
            textStyle: {
              //文字颜色
              color: '#fff',
            },
          },
          toolbox: {
            show: true,
            top: '30px',
            iconStyle: {
              borderColor: '#blue',
              backgroundColor: 'fff',
              color: '#fff',
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
            axisLabel:{
              textStyle:{
                color:'#fff',
              },
            },
            data: ['0：00', '4：00', '8：00', '12：00', '16：00', '20：00']
          },
          yAxis: {
            type: 'value',
            axisLabel:{
              formatter: '{value} ',
              textStyle:{
                color:'#fff',
              },
            },
          },
          series: [
            {
              name: ""+res[0].city+res[0].station+"站",
              type: 'line',
              radius: '30%',
              center: ['30%', '30%'],
              areaStyle: {
                normal: {
                  color: 'fff' //改变区域颜色
                }
              },

              data: [ res[5].aqi,res[4].aqi, res[3].aqi, res[2].aqi, res[1].aqi, res[0].aqi],
              markPoint: {
                data: [{name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}]
              },
              markLine: {
                data: [
                  {type: 'average', name: 'Avg'},
                  [
                    {
                      symbol: 'none',
                      x: '90%',
                      yAxis: 'max'
                    },
                    {
                      symbol: 'circle',
                      label: {
                        position: 'start',
                        formatter: 'Max'
                      },
                      type: 'max',
                      name: '最高点'
                    }
                  ]
                ]
              }
            }
          ]
        })
      })
    }
  }
}
</script>

<style scoped>

</style>