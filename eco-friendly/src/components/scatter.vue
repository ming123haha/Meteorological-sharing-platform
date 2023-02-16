<template>
  <div id="scatter" style="height: 340px;">
  </div>
</template>

<script>
import  * as echarts from 'echarts'

const schema = [
  { name: 'date', index: 0, text: '日' },
  { name: 'AQIindex', index: 1, text: 'AQI指数' },
  { name: 'PM25', index: 2, text: 'PM2.5 ug/m³' },
  { name: 'PM10', index: 3, text: 'PM10 ug/m³' },
  { name: 'CO', index: 4, text: '一氧化碳（CO）mg/m³' },
  { name: 'NO2', index: 5, text: '二氧化氮（NO2）ug/m³' },
  { name: 'SO2', index: 6, text: '二氧化硫（SO2）ug/m³' },
  { name: '03', index: 7, text: '臭氧（O³）ug/m³' }
];
const itemStyle = {
  opacity: 1,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.4)'
};
export default {
  props: ['tselectstation'],
  name: "radar",
  data() {
    return {
      chartDom:"",
      myChart:"",
    }
  },
  watch: {
    tselectstation(newval) {
      this.request.get("/historyatmospheredata/GetHistoryData?stationame=" + newval + "").then(res => {
        const dataSH = [
          [1, res[0].aqi, res[0].pm25, res[0].pm10, res[0].co, res[0].no2, res[0].so2, res[0].o3, res[0].quality],
          [2, res[1].aqi, res[1].pm25, res[1].pm10, res[1].co, res[1].no2, res[1].so2, res[1].o3, res[1].quality],
          [3, res[2].aqi, res[2].pm25, res[2].pm10, res[2].co, res[2].no2, res[2].so2, res[2].o3, res[2].quality],
          [4, res[3].aqi, res[3].pm25, res[3].pm10, res[3].co, res[3].no2, res[3].so2, res[3].o3, res[3].quality],
          [5, res[4].aqi, res[4].pm25, res[4].pm10, res[4].co, res[4].no2, res[4].so2, res[4].o3, res[4].quality],
          [6, res[5].aqi, res[5].pm25, res[5].pm10, res[5].co, res[5].no2, res[5].so2, res[5].o3, res[5].quality],
          [7, res[6].aqi, res[6].pm25, res[6].pm10, res[6].co, res[6].no2, res[6].so2, res[6].o3, res[6].quality],
          [8, res[7].aqi, res[7].pm25, res[7].pm10, res[7].co, res[7].no2, res[7].so2, res[7].o3, res[7].quality],
          [9, res[8].aqi, res[8].pm25, res[8].pm10, res[8].co, res[8].no2, res[8].so2, res[8].o3, res[8].quality],
          [10, res[9].aqi, res[9].pm25, res[9].pm10, res[9].co, res[9].no2, res[9].so2, res[9].o3, res[9].quality],
          [11, res[10].aqi, res[10].pm25, res[10].pm10, res[10].co, res[10].no2, res[10].so2, res[10].o3, res[10].quality],
          [12, res[11].aqi, res[11].pm25, res[11].pm10, res[11].co, res[11].no2, res[11].so2, res[11].o3, res[11].quality],
          [13, res[12].aqi, res[12].pm25, res[12].pm10, res[12].co, res[12].no2, res[12].so2, res[12].o3, res[12].quality],
          [14, res[13].aqi, res[13].pm25, res[13].pm10, res[13].co, res[13].no2, res[13].so2, res[13].o3, res[13].quality],
          [15, res[14].aqi, res[14].pm25, res[14].pm10, res[14].co, res[14].no2, res[14].so2, res[14].o3, res[14].quality],
          [16, res[15].aqi, res[15].pm25, res[15].pm10, res[15].co, res[15].no2, res[15].so2, res[15].o3, res[15].quality],
          [17, res[16].aqi, res[16].pm25, res[16].pm10, res[16].co, res[16].no2, res[16].so2, res[16].o3, res[16].quality],
          [18, res[17].aqi, res[17].pm25, res[17].pm10, res[17].co, res[17].no2, res[17].so2, res[17].o3, res[17].quality],
          [19, res[18].aqi, res[18].pm25, res[18].pm10, res[18].co, res[18].no2, res[18].so2, res[18].o3, res[18].quality],
          [20, res[19].aqi, res[19].pm25, res[19].pm10, res[19].co, res[19].no2, res[19].so2, res[19].o3, res[19].quality],
          [21, res[20].aqi, res[20].pm25, res[20].pm10, res[20].co, res[20].no2, res[20].so2, res[20].o3, res[20].quality],
          [22, res[21].aqi, res[21].pm25, res[21].pm10, res[21].co, res[21].no2, res[21].so2, res[21].o3, res[21].quality],
          [23, res[22].aqi, res[22].pm25, res[22].pm10, res[22].co, res[22].no2, res[22].so2, res[22].o3, res[22].quality],
          [24, res[23].aqi, res[23].pm25, res[23].pm10, res[23].co, res[23].no2, res[23].so2, res[23].o3, res[23].quality],
          [25, res[24].aqi, res[24].pm25, res[24].pm10, res[24].co, res[24].no2, res[24].so2, res[24].o3, res[24].quality],
          [26, res[25].aqi, res[25].pm25, res[25].pm10, res[25].co, res[25].no2, res[25].so2, res[25].o3, res[25].quality],
          [27, res[26].aqi, res[26].pm25, res[26].pm10, res[26].co, res[26].no2, res[26].so2, res[26].o3, res[26].quality],
          [28, res[27].aqi, res[27].pm25, res[27].pm10, res[27].co, res[27].no2, res[27].so2, res[27].o3, res[27].quality],
          [29, res[28].aqi, res[28].pm25, res[28].pm10, res[28].co, res[28].no2, res[28].so2, res[28].o3, res[28].quality],
          [30, res[29].aqi, res[29].pm25, res[29].pm10, res[29].co, res[29].no2, res[29].so2, res[29].o3, res[29].quality],
          [31, res[30].aqi, res[30].pm25, res[30].pm10, res[30].co, res[30].no2, res[30].so2, res[30].o3, res[30].quality],
        ];
        var option={
//3. 指定图表的配置项和数据
          color: ['#aba856', '#0237ff', '#bca9dc'],
          legend: {
            top: 30,
            data: ['' + res[0].city + res[0].station + '站'],
            textStyle: {
              fontSize: 16,
              //文字颜色
              color: '#fff',
            }
          },
          title: {
            text: '该测站近一个月内的数据',
            textStyle: {
              //文字颜色
              color: '#fff',
            },
            top: '0px',
          },
          grid: {
            left: '10%',
            right: 150,
            top: '18%',
            bottom: '10%'
          },
          tooltip: {
            backgroundColor: 'rgba(255,255,255,1)',
            formatter: function (param) {
              var value = param.value;
              // prettier-ignore
              return '<div style="border-bottom: 1px solid rgba(255,255,255,0.7); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                  + param.seriesName + ' ' + value[0] + '日：'
                  + value[8]
                  + '</div>'
                  + schema[1].text + '：' + value[1] +'<br>'
                  + schema[2].text + '：' + value[2] + '<br>'
                  + schema[3].text + '：' + value[3] + '<br>'
                  + schema[4].text + '：' + value[4] + '<br>'
                  + schema[5].text + '：' + value[5] + '<br>'
                  + schema[6].text + '：' + value[6] + '<br>'
                  + schema[7].text + '：' + value[7] + '<br>';
            }
          },
          xAxis: {
            type: 'value',
            name: '日期',
            nameGap: 16,
            axisLabel: {
              textStyle: {
                color: "#fff",
              }
            },
            nameTextStyle: {
              fontSize: 16
            },
            max: 31,
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            axisLabel: {
              textStyle: {
                color: "#fff",
              }
            },
            nameTextStyle: {
              fontSize: 16
            },
            splitLine: {
              show: false
            }
          },
          toolbox: {
            show: true,
            top: '5px',
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
              // magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              dimension: 1,
              min: 0,
              max: 80,
              itemWidth: 20,
              itemHeight: 80,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：AQI指数'],
              textGap: 10,
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,0.4)']
              },
              textStyle: {
                //文字颜色
                color: '#fff',
              },
              controller: {
                inRange: {
                  color: ['#aba856']
                },
                outOfRange: {
                  color: ['#999']
                }
              }
            },
            {
              left: 'right',
              bottom: '10%',
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 80,
              textStyle: {
                //文字颜色
                color: '#fff',
              },
              text: ['明暗：AQI指数'],
              textGap: 10,
              inRange: {
                colorLightness: [1.0, 0.1]
              },
              outOfRange: {
                color: ['rgba(255,255,255,0.4)']
              },
              controller: {
                inRange: {
                  color: ['#aba856']
                },
                outOfRange: {
                  color: ['#999']
                }
              }
            }
          ],
          series: [
            {
              name: '' + res[0].city + res[0].station + '站',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataSH
            },
          ]
        }
        this.myChart.setOption(option);


      })
    }
  },
  mounted() {
    this.echartsInit()
  },
  //echarts图表配置
  methods: {
    echartsInit() {
      //2. 基于准备好的dom，初始化echarts实例
      this.request.get("/historyatmospheredata/GetHistoryData?stationame=老年大学").then(res => {
        //console.log(res)
        const dataSH = [
          [1, res[0].aqi, res[0].pm25, res[0].pm10, res[0].co, res[0].no2, res[0].so2, res[0].o3, res[0].quality],
          [2, res[1].aqi, res[1].pm25, res[1].pm10, res[1].co, res[1].no2, res[1].so2, res[1].o3, res[1].quality],
          [3, res[2].aqi, res[2].pm25, res[2].pm10, res[2].co, res[2].no2, res[2].so2, res[2].o3, res[2].quality],
          [4, res[3].aqi, res[3].pm25, res[3].pm10, res[3].co, res[3].no2, res[3].so2, res[3].o3, res[3].quality],
          [5, res[4].aqi, res[4].pm25, res[4].pm10, res[4].co, res[4].no2, res[4].so2, res[4].o3, res[4].quality],
          [6, res[5].aqi, res[5].pm25, res[5].pm10, res[5].co, res[5].no2, res[5].so2, res[5].o3, res[5].quality],
          [7, res[6].aqi, res[6].pm25, res[6].pm10, res[6].co, res[6].no2, res[6].so2, res[6].o3, res[6].quality],
          [8, res[7].aqi, res[7].pm25, res[7].pm10, res[7].co, res[7].no2, res[7].so2, res[7].o3, res[7].quality],
          [9, res[8].aqi, res[8].pm25, res[8].pm10, res[8].co, res[8].no2, res[8].so2, res[8].o3, res[8].quality],
          [10, res[9].aqi, res[9].pm25, res[9].pm10, res[9].co, res[9].no2, res[9].so2, res[9].o3, res[9].quality],
          [11, res[10].aqi, res[10].pm25, res[10].pm10, res[10].co, res[10].no2, res[10].so2, res[10].o3, res[10].quality],
          [12, res[11].aqi, res[11].pm25, res[11].pm10, res[11].co, res[11].no2, res[11].so2, res[11].o3, res[11].quality],
          [13, res[12].aqi, res[12].pm25, res[12].pm10, res[12].co, res[12].no2, res[12].so2, res[12].o3, res[12].quality],
          [14, res[13].aqi, res[13].pm25, res[13].pm10, res[13].co, res[13].no2, res[13].so2, res[13].o3, res[13].quality],
          [15, res[14].aqi, res[14].pm25, res[14].pm10, res[14].co, res[14].no2, res[14].so2, res[14].o3, res[14].quality],
          [16, res[15].aqi, res[15].pm25, res[15].pm10, res[15].co, res[15].no2, res[15].so2, res[15].o3, res[15].quality],
          [17, res[16].aqi, res[16].pm25, res[16].pm10, res[16].co, res[16].no2, res[16].so2, res[16].o3, res[16].quality],
          [18, res[17].aqi, res[17].pm25, res[17].pm10, res[17].co, res[17].no2, res[17].so2, res[17].o3, res[17].quality],
          [19, res[18].aqi, res[18].pm25, res[18].pm10, res[18].co, res[18].no2, res[18].so2, res[18].o3, res[18].quality],
          [20, res[19].aqi, res[19].pm25, res[19].pm10, res[19].co, res[19].no2, res[19].so2, res[19].o3, res[19].quality],
          [21, res[20].aqi, res[20].pm25, res[20].pm10, res[20].co, res[20].no2, res[20].so2, res[20].o3, res[20].quality],
          [22, res[21].aqi, res[21].pm25, res[21].pm10, res[21].co, res[21].no2, res[21].so2, res[21].o3, res[21].quality],
          [23, res[22].aqi, res[22].pm25, res[22].pm10, res[22].co, res[22].no2, res[22].so2, res[22].o3, res[22].quality],
          [24, res[23].aqi, res[23].pm25, res[23].pm10, res[23].co, res[23].no2, res[23].so2, res[23].o3, res[23].quality],
          [25, res[24].aqi, res[24].pm25, res[24].pm10, res[24].co, res[24].no2, res[24].so2, res[24].o3, res[24].quality],
          [26, res[25].aqi, res[25].pm25, res[25].pm10, res[25].co, res[25].no2, res[25].so2, res[25].o3, res[25].quality],
          [27, res[26].aqi, res[26].pm25, res[26].pm10, res[26].co, res[26].no2, res[26].so2, res[26].o3, res[26].quality],
          [28, res[27].aqi, res[27].pm25, res[27].pm10, res[27].co, res[27].no2, res[27].so2, res[27].o3, res[27].quality],
          [29, res[28].aqi, res[28].pm25, res[28].pm10, res[28].co, res[28].no2, res[28].so2, res[28].o3, res[28].quality],
          [30, res[29].aqi, res[29].pm25, res[29].pm10, res[29].co, res[29].no2, res[29].so2, res[29].o3, res[29].quality],
          [31, res[30].aqi, res[30].pm25, res[30].pm10, res[30].co, res[30].no2, res[30].so2, res[30].o3, res[30].quality],
        ];
        this.chartDom=document.getElementById('scatter')
        this.myChart=echarts.init(this.chartDom)
        var option={
//3. 指定图表的配置项和数据
          color: ['#aba856', '#0237ff', '#bca9dc'],
          legend: {
            top: 30,
            data: ['' + res[0].city + res[0].station + '站'],
            textStyle: {
              fontSize: 16,
              //文字颜色
              color: '#fff',
            }
          },
          title: {
            text: '该测站近一个月内的数据',
            textStyle: {
              //文字颜色
              color: '#fff',
            },
            top: '0px',
          },
          grid: {
            left: '10%',
            right: 150,
            top: '18%',
            bottom: '10%'
          },
          tooltip: {
            backgroundColor: 'rgba(255,255,255,0.7)',
            formatter: function (param) {
              var value = param.value;
              // prettier-ignore
              return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                  + param.seriesName + ' ' + value[0] + '日：'
                  + value[8]
                  + '</div>'
                  + schema[1].text + '：' + value[1] + '<br>'
                  + schema[2].text + '：' + value[2] + '<br>'
                  + schema[3].text + '：' + value[3] + '<br>'
                  + schema[4].text + '：' + value[4] + '<br>'
                  + schema[5].text + '：' + value[5] + '<br>'
                  + schema[6].text + '：' + value[6] + '<br>'
                  + schema[7].text + '：' + value[7] + '<br>';
            }
          },
          xAxis: {
            type: 'value',
            name: '日期',
            nameGap: 16,
            axisLabel: {
              textStyle: {
                color: "#fff",
              }
            },
            nameTextStyle: {
              fontSize: 16
            },
            max: 31,
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            axisLabel: {
              textStyle: {
                color: "#fff",
              }
            },
            nameTextStyle: {
              fontSize: 16
            },
            splitLine: {
              show: false
            }
          },
          toolbox: {
            show: true,
            top: '5px',
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
              // magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: [
            {
              left: 'right',
              top: '10%',
              dimension: 1,
              min: 0,
              max: 80,
              itemWidth: 20,
              itemHeight: 80,
              calculable: true,
              precision: 0.1,
              text: ['圆形大小：AQI指数'],
              textGap: 10,
              inRange: {
                symbolSize: [10, 70]
              },
              outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,0.4)']
              },
              textStyle: {
                //文字颜色
                color: '#fff',
              },
              controller: {
                inRange: {
                  color: ['#aba856']
                },
                outOfRange: {
                  color: ['#999']
                }
              }
            },
            {
              left: 'right',
              bottom: '10%',
              dimension: 6,
              min: 0,
              max: 50,
              itemHeight: 80,
              textStyle: {
                //文字颜色
                color: '#fff',
              },
              text: ['明暗：AQI指数'],
              textGap: 10,
              inRange: {
                colorLightness: [1.0, 0.1]
              },
              outOfRange: {
                color: ['rgba(255,255,255,0.4)']
              },
              controller: {
                inRange: {
                  color: ['#aba856']
                },
                outOfRange: {
                  color: ['#999']
                }
              }
            }
          ],
          series: [
            {
              name: '' + res[0].city + res[0].station + '站',
              type: 'scatter',
              itemStyle: itemStyle,
              data: dataSH
            },
          ]
        }
        this.myChart.setOption(option);



      })
    },

  }
}


</script>

<style scoped>

</style>