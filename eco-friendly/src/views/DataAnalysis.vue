<template>
  <div>
    <el-row type="flex" justify="space-around">
      <el-col :span="6">
        <el-card shadow="hover">
          <div id="echarts-line"></div>
        </el-card>

      </el-col>
      <el-col :span="10">
        <div style="position: relative;" id="viewDiv">
          <el-select @change="selectinfo" style="position: absolute;right:10%;top:5%" v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div id="echarts-category"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row type="flex"  justify="space-around">
      <el-col :span="6">
        <el-card shadow="hover">
          <div id="echarts-access"></div>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover">
          <div id="echarts-scatter"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div id="echarts-pressure"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import  * as echarts from 'echarts'
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView"
export default {
  name: "Home",
  data() {
    return {
      scater_data:[[]],
      year_data:["2020","2019","2018","2017","2016","2015","2014","2013","2012","2011"],
      options: [{
        value: '选项1',
        label: '图层1'
      }, {
        value: '选项2',
        label: '图层2'
      }, {
        value: '选项3',
        label: '图层3'
      }, {
        value: '选项4',
        label: '图层4'
      }, {
        value: '选项5',
        label: '图层5'
      }],
      value: '',
    }
  },
  created() {
  },
  mounted() {
    this.createEchartsline()
    this.createEchartscategory()
    this.createEchartsAccess()
    this.createEchartsscater()
    this.createEchartsPressure()
    this.initMap()
  },
  //引入我的AQI仪表盘组件
  components:{
  },
  methods: {
    createEchartsPressure(){
      var chartDom = document.getElementById('echarts-pressure');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            name: 'Pressure',
            type: 'gauge',
            progress: {
              show: true
            },
            detail: {
              valueAnimation: true,
              formatter: '{value}'
            },
            data: [
              {
                value: 50,
                name: 'SCORE'
              }
            ]
          }
        ]
      };
      option && myChart.setOption(option);
    },
    createEchartsscater(){
      this.request.get("/groundtemperature-merge/GetNearYearData",{
      }).then(res =>{
        for(var i=0;i<12;i++){
          this.scater_data.push([i+1,res[i]])
        }
        var chartDom = document.getElementById('echarts-scatter');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
          tooltip: {
            show:true,
          },
          title: {
            text: '滁州市近1年平均地表气温时间变化图',
            left:240
          },
          xAxis: {
            type: "value",
            axisLabel: {
              formatter: function (value, index) {
                return value + "月";
              },
            },
          },
          yAxis: {
            type: "value",
            axisLabel: {
              formatter: function (value, index) {
                return value + "°";
              },
            },
          },
          series: [
            {
              symbolSize: 20,
              data:this.scater_data,
              type: 'scatter'
            }
          ]
        };
        option && myChart.setOption(option);
      })
    },
    createEchartsAccess(){
      var chartDom = document.getElementById('echarts-access');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: '安徽省各地区站点数量',
          left:120,
          top:-4
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 8, name: '江淮地区' },
              { value: 8, name: '皖北地区' },
              { value: 5, name: '皖南地区' },
            ]
          }
        ]
      };
      option && myChart.setOption(option);
    },
    createEchartscategory(){
      var chartDom = document.getElementById('echarts-category');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: '安徽省各站点近1年平均地表气温排序图',
          left:80
        },
        dataset: [
          {
            dimensions: ['name', 'age', 'profession', 'score', 'date'],
            source: [
              ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
              ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
              ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
              ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
              ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
              ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
              ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
              ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
              ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
            ]
          },
          {
            transform: {
              type: 'sort',
              config: { dimension: 'score', order: 'desc' }
            }
          }
        ],
        xAxis: {
          type: 'category',
          axisLabel: { interval: 0, rotate: 30 }
        },
        yAxis: {},
        series: {
          type: 'bar',
          encode: { x: 'name', y: 'score' },
          datasetIndex: 1
        }
      };
      option && myChart.setOption(option);
    },
    createEchartsline(){
      var _request=this.request
      var chartDom = document.getElementById('echarts-line');
      var myChart = echarts.init(chartDom);
      var option;
      function randomData() {
        now = new Date(+now + oneDay);
        // _request.get("/groundtemperature-merge/GetHistoryData",{params:{now:now}}).then(res=> {
        //   console.log(res[0])
        //   temp=res[0].averageSurfaceTemperature
        // })
        value = temp
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
          ]
        };
      }
      let temp = []
      let data = [];
      let now = new Date(1965, 1, 1);
      let oneDay = 24 * 3600 * 1000;
      let value = 0;
      for (var i = 0; i < 1000; i++) {
        // data.push(randomData());
      }
      option = {
        title: {
          text: '平均地表气温时间变化图',
          left:50
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return (
                date.getDate() +
                '/' +
                (date.getMonth() + 1) +
                '/' +
                date.getFullYear() +
                ' : ' +
                params.value[1]
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          },
          axisLabel:{
            fontSize:10
          }
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            data: data,
          }
        ]
      };
      setInterval(function () {
        for (var i = 0; i < 100; i++) {
          //移除数组中第一项
          data.shift();
          data.push(randomData());
        }
        myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 5000);
      option && myChart.setOption(option);
    },
    selectinfo(res) {
      console.log(res)
      if(res === '选项5'){
        alert("被点击了!")
      }
    },
    initMap(){
      const m_Map = new Map({
        basemap:"topo-vector"
      })
      const view = new MapView({
        container:"viewDiv",
        map:m_Map,
        zoom:6,
        center:[115,32]
      })
      //鹰眼地图定义
      var overviewMap = new Map({
        basemap:"hybrid"
      })
      view.ui.remove('attribution')//这一句用于去除地图下方自带的esri官方的标志
    }
  }
}
</script>

<style scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
#echarts-line{
  height: 400px;
  width: 100%;
}
#echarts-category{
  height: 400px;
  width: 100%;
}
#echarts-access{
  height: 350px;
  width: 100%;
}
#echarts-scatter{
  height: 350px;
  width: 100%;
}
#echarts-pressure{
  height: 350px;
  width: 100%;
}
</style>