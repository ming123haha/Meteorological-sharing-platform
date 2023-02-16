<template>
  <div>
    <div id="pie" style="height: 250px; ">
    </div>
    <div>

    </div>
  </div>
</template>

<script>
import  * as echarts from 'echarts'
export default {
  name: "echarts-pie",
  data(){
    return{}
  },
  mounted(){
    this.echartsInit()
  },
  methods:{
    echartsInit() {
      //2. 基于准备好的dom，初始化echarts实例
      echarts.init(document.getElementById('pie')).setOption({
      //3. 指定图表的配置项和数据
        title: {
          text: '监测点点位分布',

          left: 'center',
          top:'0px',
          textStyle: {
            fontSize:20,
            //文字颜色
            color: '#000',
        },
        },
        tooltip: {
          trigger: 'item',
          // formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            //文字颜色
            color: '#000',
          },
        },
        series: [
          {
            name: '监测点',
            type: 'pie',
            radius: '60%',
            center: ['50%', '50%'],
            // roseType: 'area',
            itemStyle: {
              borderRadius: 8,
              normal: {
                color: function (colors) {
                  var colorList = [
                    '#63b2ee',
                    '#5470c6',
                    '#9192ab',
                    '#75bedc'
                  ];
                  return colorList[colors.dataIndex];
                }
              },
            },
            data: [
              {value: 20, name: '皖北地区'},
              {value: 40, name: '皖南地区'},
              {value: 10, name: '皖东地区'},
              {value: 14, name: '皖西地区'},
            ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
          }
        ]
      })
    }
  }
}
// myChart.setOption(option);
</script>

<style scoped>

</style>