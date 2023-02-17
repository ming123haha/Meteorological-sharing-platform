
<template>
<div class="com-container">
  <div id="com-chart" ref="chart_ref">
  </div>
</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "AQI",
  data(){
    return{
      chartInstance:null
    }
  },
  mounted(){
      // this.initChart()
      // this.getData()
    //基于准备好的DOM，初始化ECharts图表
    var myChart = echarts.init(document.getElementById("com-chart"));
    //指定图表的配置项和数据
    var color1 = [[0.2, "rgba(255,0,0,1)"], [0.8, "rgba(0,255,255,1)"], [1, "rgba(0,255,0,1)"]];
    var data1 = [{
      name: "完成率(%)",
      value: 50,
    }];
    var option = {  //指定图表的配置项和数据
      backgroundColor: 'rgba(128, 128, 128, 0.1)',  //rgba设置透明度0.1
      tooltip: {  //配置提示框组件
        show: true,
        formatter: "{b}：{c}%",
        backgroundColor: "rgba(255,0,0,0.8)",  //设置提示框浮层的背景颜色
        borderColor: "#333",  //设置提示框浮层的边框颜色
        borderWidth: 0,  //设置提示框浮层的边框宽
        padding: 5,  //设置提示框浮层内边距，单位px，默认各方向内边距为5
        textStyle: {  //设置提示框浮层的文本样式
          //color,fontStyle,fontWeight,fontFamily,fontSize,lineHeight
        },
      },
      title: {  //配置标题组件
        text: '项目实际完成率(%)',
        x: 'center', y: 25,
        show: true,  //设置是否显示标题，默认true
        //设置相对于仪表盘中心的偏移位置
        //数组第一项是水平方向的偏移，第二项是垂直方向的偏移
        offsetCenter: [50, "20%"],
        textStyle: {
          fontFamily: "黑体",  //设置字体名称，默认宋体
          color: "blue",  //设置字体颜色，默认#333
          fontSize: 15,  //设置字体大小，默认15
        }
      },
      series: [
        {
          name: "单仪表盘示例",  //设置系列名称，用于tooltip的显示，legend的图例筛选
          type: "gauge",  //设置系列类型
          radius: "80%",  //设置参数：number，string，仪表盘半径，默认75%
          center: ["50%", "55%"],  //设置仪表盘位置(圆心坐标)
          startAngle: 225,  //设置仪表盘起始角度，默认225
          endAngle: -45,  //设置仪表盘结束角度，默认-45
          clockwise: true,  //设置仪表盘刻度是否是顺时针增长，默认true
          min: 0,  //设置最小的数据值，默认0，映射到minAngle
          max: 100,  //设置最大的数据值，默认100，映射到maxAngle
          splitNumber: 10,  //设置仪表盘刻度的分割段数，默认10
          axisLine: {  //设置仪表盘轴线(轮廓线)相关配置
            show: true,  //设置是否显示仪表盘轴线(轮廓线)，默认true
            lineStyle: {  //设置仪表盘轴线样式
              color: color1,  //设置仪表盘的轴线可以被分成不同颜色的多段
              opacity: 1,  //设置图形透明度，支持从0到1的数字，为0时不绘制该图形
              width: 30,  //设置轴线宽度，默认30
              shadowBlur: 20,  //设置(发光效果)图形阴影的模糊大小
              shadowColor: "#fff",  //设置阴影颜色，支持的格式同color
            }
          },
          splitLine: {  //设置分隔线样式
            show: true,  //设置是否显示分隔线，默认true
            length: 30,  //设置分隔线线长，支持相对半径的百分比，默认30
            lineStyle: {  //设置分隔线样式
              color: "#eee",  //设置线的颜色，默认#eee
              //设置图形透明度，支持从0到1的数字，为0时不绘制该图形
              opacity: 1,
              width: 2,  //设置线度，默认2
              type: "solid",  //设置线的类型，默认solid，此外还有dashed，dotted
              shadowBlur: 10,  //设置(发光效果)图形阴影的模糊大小
              shadowColor: "#fff",  //设置阴影颜色，支持的格式同color
            }
          },
          axisTick: {  //设置刻度(线)样式
            show: true,  //设置是否显示刻度(线)，默认true
            splitNumber: 5,  //设置分隔线之间分割的刻度数，默认5
            length: 8,  //设置刻度线长.支持相对半径的百分比，默认8
            lineStyle: {  //设置刻度线样式
              color: "#eee",  //设置线的颜色，默认#eee
              //设置图形透明度.支持从0到1的数字，为0时不绘制该图形
              opacity: 1,
              width: 1,  //设置线度，默认 1
              type: "solid",  //设置线的类型，默认solid，此外还有dashed，dotted
              shadowBlur: 10,  //设置(发光效果)图形阴影的模糊大小
              shadowColor: "#fff",  //设置阴影颜色，支持的格式同color
            },
          },
          axisLabel: {  //设置刻度标签
            show: true,  //设置是否显示标签，默认true
            distance: 5,  //设置标签与刻度线的距离，默认5
            color: "blue",  //设置文字的颜色
            fontSize: 5,  //设置文字的字体大小，默认5
            //设置刻度标签的内容格式器，支持字符串模板和回调函数两种形式
            formatter: "{value}",
          },
          pointer: {  //设置仪表盘指针
            show: true,  //设置是否显示指针，默认true
            //设置指针长度,可以是绝对值，也可是相对于半径的百分比，默认80%
            length: "60%",
            width: 6,  //设置指针宽度，默认8
          },
          itemStyle: {  //设置仪表盘指针样式
            color: "auto",  //设置指针颜色，默认(auto)取数值所在的区间的颜色
            opacity: 1,  //设置图形透明度，支持从0到1的数字，为0时不绘制该图形
            borderWidth: 0,  //设置描边线宽,默认0，为0时无描边
            //设置柱条的描边类型,默认为实线，支持'solid'，'dashed'，'dotted'
            borderType: "solid",
            borderColor: "#000",  //设置图形的描边颜色，默认"#000"，不支持回调函数
            shadowBlur: 10,  //设置(发光效果)图形阴影的模糊大小
            shadowColor: "#fff",  //设置阴影颜色，支持的格式同color
          },
          emphasis: {  //设置高亮的仪表盘指针样式
            itemStyle: {
              //高亮和正常,两者具有同样的配置项，只是在不同状态下配置项的值不同
            }
          },
          detail: {  //设置仪表盘详情，用于显示数据
            show: true,  //设置是否显示详情，默认true
            offsetCenter: [0, "50%"],  //设置相对于仪表盘中心的偏移位置
            color: "auto",  //设置文字的颜色，默认auto
            fontSize: 20,  //设置文字的字体大小，默认15
            formatter: "{value}%",  //格式化函数或者字符串
          },
          data: data1
        }
      ]
    };
    setInterval(function () {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2);
      myChart.setOption(option, true);  //使用指定的配置项和数据显示图表
    }, 2000);  //每2秒重新渲染一次，以实现动态效果
          },
  methods:{
   //  //初始化echarstInstance对象
   //  initChart(){
   //    this.$echarts.init(this.$refs.seller_ref)
   //  },
   //  //获取服务器的数据
   // async getData(){
   //  // http://localhost:8080/DataAnalysis
   //    const ret=await this.$http.get('http://localhost:8080/DataAnalysis')
   //   console.log(ret)
   //  },
   //  //更新图表
   //  updateChart(){},
  }
}

</script>

<style scoped>

</style>