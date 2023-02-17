<template>
  <div id="search" style="height: 450px;width:600px"></div>
</template>

<script>
import * as echarts from "echarts";
const colors = ['#5470C6', '#edfa04', '#d5c366'];
export default {
  name: "search",
  data() {
    return {}
  },
  mounted() {
    this.echartsInit()
  },
  //echarts图表配置
  methods: {
    echartsInit() {
      //2. 基于准备好的dom，初始化echarts实例
      echarts.init(document.getElementById('search')).setOption({
//3. 指定图表的配置项和数据
        title: {
          text: '该区域的一年内气温变化',
          textStyle: {
            //文字颜色
            color: '#fff',
            fontsize:'20px',
          },
          top:'0px',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          x:40,
          y:80,
          x2:150,
          y2:40,
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          top: 30,
          data: ['温度', '月AQI平均值', '空气质量优良天数'],
          textStyle: {
            //文字颜色
            color: '#fff',
          },
        },
        xAxis: [
          {
            splitNumber:12,
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            axisLabel: {
              //
              textStyle: {
                color: "#fff",

              },
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '月平均AQI指数',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '空气质量为优比例',
            position: 'right',
            alignTicks: true,
            offset: 100,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} '
            }
          },
          {
            type: 'value',
            name: '温度',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value} °C'
            }
          }
        ],
        series: [
          {
            name: '月平均AQI指数',
            type: 'bar',
            barWidth: 15,
            data: [
              20, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
            ]
          },
          {
            name: '空气质量为天数',
            type: 'bar',
            barWidth: 15,
            yAxisIndex: 1,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
            ]
          },
          {
            name: '温度',
            type: 'line',
            yAxisIndex: 2,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
          }
        ]
      });
    }
  }
}
</script>