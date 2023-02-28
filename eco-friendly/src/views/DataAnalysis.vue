<template>
  <div>

    <el-row type="flex" justify="space-around">
      <el-col :span="6">
        <el-card shadow="hover">
          <div id="echarts-line"></div>
        </el-card>

      </el-col>
      <el-col :span="10">
<!--        <el-alert-->
<!--            title="错误提示的文案"-->
<!--            type="error"-->
<!--            center-->
<!--            show-icon>-->
<!--        </el-alert>-->
        <div style="position: relative;" id="viewDiv">
          <el-cascader :options="options" @change="onChange" style="position: absolute;right:10%;top:5%" clearable></el-cascader>
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
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"
import Geometry from "@arcgis/core/geometry/Geometry";

export default {
  name: "Home",
  data() {
    return {
      map_name:"砀山",
      echarts_scater_name:"",
      history_data:[],
      city_name:"蚌埠",
      flag_num:0,
      scater_data:[[]],
      year_data:["2020","2019","2018","2017","2016","2015","2014","2013","2012","2011"],
      options: [{
        value: '选项1',
        label: '0cm地温表',
        children:[{value:'2020', label:'2020年'},{value:'2019', label:'2019年'},{value:'2018', label:'2018年'},{value:'2017', label:'2017年'},{value:'2016', label:'2016年'},{value:'2015', label:'2015年'}]
      },
        {
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
  watch:{
    map_name(new_val,old_val){
      this.scater_data=[[]]
      this.request.get("/groundtemperature-merge/GetNearYearData",{params:{name:new_val}}
      ).then(res =>{
        for(var i=0;i<12;i++){
          this.scater_data.push([i+1,res[i]])
        }
        var chartDom = document.getElementById('echarts-scatter');
        var mychart = echarts.init(chartDom);
        var option;
        option = {
          tooltip: {
            show:true,
            formatter:function (params){
              return '<div>'+ params.marker + params.value[0] +'月地温:'+ + params.value[1].toFixed(2) + '℃'+'</div>';
            }
          },
          title: {
            text: ''+new_val+'近1年平均地表气温时间变化图',
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
                return value + "℃";
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

        option && mychart.setOption(option);
      })

      this.request.get("/groundtemperature-merge/MaxAndMinTempture",{params:{city_name:new_val}}
      ).then(res =>{
        var max_float = parseFloat(res[0])
        var min_float = parseFloat(res[1])

        // console.log(max_float)
        var chartDom = document.getElementById('echarts-pressure');
        var myChart = echarts.init(chartDom);
        var option;

        const gaugeData = [
          {
            value: max_float,
            name: '年平均最高地表温度',
            title: {
              offsetCenter: ['-40%', '80%']
            },
            detail: {
              offsetCenter: ['-40%', '95%']
            }
          },
          {
            value: min_float,
            name: '年平均最低地表温度',
            title: {
              offsetCenter: ['40%', '80%']
            },
            detail: {
              offsetCenter: ['40%', '95%']
            }
          },
        ];
        option = {
          tooltip: {
            show:true,
            formatter:function (params){
              console.log(params)
              return '<div>'+ '<span style="font-size: 6px">'+params.marker + params.name +'地温:'+ + params.value.toFixed(2)+ '℃'+'</span>'+ '</div>';
            }
          },
          title: {
            text:''+new_val+'市地表最大和最小温度',
            fontSize: 14,
            left:80
          },
          series: [
            {
              type: 'gauge',
              anchor: {
                show: true,
                showAbove: true,
                size: 18,
                itemStyle: {
                  color: '#FAC858'
                }
              },
              axisLabel: {
                formatter: function (value, index) {
                  return value + "℃";
                },
              },
              pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '80%',
                offsetCenter: [0, '8%']
              },
              progress: {
                show: true,
                overlap: true,
                roundCap: true
              },
              axisLine: {
                roundCap: true
              },
              data: gaugeData,
              min:0,
              max:50,
              detail: {
                width: 40,
                height: 14,
                fontSize: 14,
                color: '#fff',
                backgroundColor: 'inherit',
                borderRadius: 3,
                formatter: function (results){
                  var num = results/(max_float+min_float)
                  num = num.toFixed(2)*100
                  return num + '%'
                }
              }
            }
          ]
        };

        option && myChart.setOption(option);
      })
      this.history_data=[]
      this.request("/groundtemperature-merge/GetHistoryData",{params:{name:new_val}}).then(res=>{
        var chartDom = document.getElementById('echarts-line');
        var myChart = echarts.init(chartDom);
        var option;
        function randomData(flag) {
          now = new Date(+now + oneDay);
          value = res[flag].averageSurfaceTemperature
          return {
            name: now.toString(),
            value: [
              [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
              Math.round(value)
            ]
          };
        }

        let temp = []
        let now = new Date(1969, 1, 1);
        let oneDay = 24 * 3600 * 1000;
        let value = 0;
        var flag = 0
        for (var i = 0; i < 1000; i++) {
          flag+=1
          this.history_data.push(randomData(flag));

        }

        option = {
          title: {
            text: ''+new_val+'平均地表气温时间变化图',
            left:50
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return (
                  date.getFullYear()+'年'+(date.getMonth() + 1)+'月'+date.getDate()+'日平均地表气温'+':'+
                  params.value[1]
                  +'℃'
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
              data: this.history_data,

            }
          ]
        };

        setInterval(function () {
          for (var i = 0; i < 5; i++) {
            flag+=1
            //移除数组中第一项
            // this.history_data.shift();
            this.history_data.push(randomData(flag))
          }
          myChart.setOption({
            series: [
              {
                data:  this.history_data
              }
            ]
          });
        }, 1000);

        option && myChart.setOption(option);
      })


    }

  },
  methods: {
    createEchartsPressure(){
      //默认是砀山
      this.request.get("/groundtemperature-merge/MaxAndMinTempture",{params:{city_name:"砀山"}}
      ).then(res =>{
        var max_float = parseFloat(res[0])
        var min_float = parseFloat(res[1])

        // console.log(max_float)
        var chartDom = document.getElementById('echarts-pressure');
        var myChart = echarts.init(chartDom);
        var option;

        const gaugeData = [
          {
            value: max_float,
            name: '年平均最高地表温度',
            title: {
              offsetCenter: ['-40%', '80%']
            },
            detail: {
              offsetCenter: ['-40%', '95%']
            }
          },
          {
            value: min_float,
            name: '年平均最低地表温度',
            title: {
              offsetCenter: ['40%', '80%']
            },
            detail: {
              offsetCenter: ['40%', '95%']
            },
          },
        ];
        option = {
          tooltip: {
            show:true,
            formatter:function (params){
              console.log(params)
              return '<div>'+ '<span style="font-size: 6px">'+params.marker + params.name +'地温:'+ + params.value.toFixed(2)+ '℃'+'</span>'+ '</div>';
            }
          },
          title: {
            text:'砀山市2017年地表最大和最小温度',
            fontSize: 14,
            left:80
          },
          series: [
            {
              type: 'gauge',
              anchor: {
                show: true,
                showAbove: true,
                size: 18,
                itemStyle: {
                  color: '#FAC858'
                }
              },
              axisLabel: {
                formatter: function (value, index) {
                  return value + "℃";
                },
              },
              pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '80%',
                offsetCenter: [0, '8%']
              },
              progress: {
                show: true,
                overlap: true,
                roundCap: true
              },
              axisLine: {
                roundCap: true
              },
              data: gaugeData,
              title: {
                fontSize: 10
              },
              min:0,
              max:50,
              detail: {
                width: 40,
                height: 14,
                fontSize: 14,
                color: '#fff',
                backgroundColor: 'inherit',
                borderRadius: 3,
                formatter: function (results){
                  var num = results/(max_float+min_float)
                  num = num.toFixed(2)*100
                  return num + '%'
                }
              }
            }
          ]
        };

        option && myChart.setOption(option);
      })


    },
    createEchartsscater(){
      this.request.get("/groundtemperature-merge/GetNearYearData",{params:{name:this.map_name}}
      ).then(res =>{
        for(var i=0;i<12;i++){
          this.scater_data.push([i+1,res[i]])
        }
        var chartDom = document.getElementById('echarts-scatter');
        var myChart = echarts.init(chartDom);
        var option;
        option = {
          tooltip: {
            show:true,
            formatter:function (params){
              return '<div>'+ params.marker + params.value[0] +'月地温:'+ + params.value[1].toFixed(2) + '℃'+'</div>';
            }
          },
          title: {
            text: '砀山2017年平均地表气温时间变化图',
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
                return value + "℃";
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
      this.request.get("/groundtemperature-merge/SortCityData",{
      }).then(res =>{
        var json=null
        var str=null
        var number = 0
        var name =null
        var v_name=[]
        var v_data=[]
        for(var i=res.length-1;i>10;i--){
          json = JSON.stringify(res[i])
          str = json.split(":")
          number = parseFloat(str[1].substring(0,str[1].length-1))
          name = str[0].substring(1,str[0].length)
          name = name.substring(1,name.length-1)
          v_data.push(number)
          v_name.push(name)
        }


        var chartDom = document.getElementById('echarts-category');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item',
            formatter:function (params){
              console.log(params)
              return '<div>'+ params.marker + params.name +'地温:'+ + params.value.toFixed(2) + '℃'+'</div>';
            }
          },

          title: {
            text: '安徽省各站点2017年平均地表气温排序图',
            left: 80
          },
          xAxis: {
            type: 'category',
            data: [v_name[0], v_name[1], v_name[2], v_name[3], v_name[4], v_name[5], v_name[6], v_name[7], v_name[8], v_name[9]],
            axisLabel: {interval: 0, rotate: 30}
          },
          yAxis: {
            type: 'value',
            max: 20.5,
            min: 19,
            interval: 0.5,
            axisLabel: {
              formatter: function (value, index) {
                return value + "℃";
              },
            },
          },
          series: {
            type: 'bar',
            data: [v_data[0], v_data[1], v_data[2], v_data[3], v_data[4], v_data[5], v_data[6], v_data[7], v_data[8], v_data[9]],
            encode: {x: 'name', y: 'average_surface_temperature'},
            datasetIndex: 1,
            itemStyle: {
              normal: {
                //这里是重点
                color: function (params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = ['#1781b5', '#158bb8','#2f90b9','#10aec2','#0eb0c9','#5cb3cc', '#66a9c9', '#5cb3cc','#63bbd0' , '#c3d7df', '#d8e3e7'];
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        }

        option && myChart.setOption(option);
      })

    },
    createEchartsline(){

      this.request("/groundtemperature-merge/GetHistoryData",{params:{name:"砀山"}}).then(res=>{
        var chartDom = document.getElementById('echarts-line');
        var myChart = echarts.init(chartDom);
        var option;

        function randomData(flag) {
          now = new Date(+now + oneDay);
          value = res[flag].averageSurfaceTemperature
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
        let now = new Date(1969, 1, 1);
        let oneDay = 24 * 3600 * 1000;
        let value = 0;
        var flag = 0
        for (var i = 0; i < 1000; i++) {
          flag+=1
          data.push(randomData(flag));

        }

        option = {
          title: {
            text: '砀山平均地表气温2017年时间变化图',
            left:50
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return (
                  date.getFullYear()+'年'+(date.getMonth() + 1)+'月'+date.getDate()+'日平均地表气温'+':'+
                  params.value[1]
                  +'℃'
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
          for (var i = 0; i < 5; i++) {
            flag+=1
            //移除数组中第一项
            data.shift();
            data.push(randomData(flag))
          }
          myChart.setOption({
            series: [
              {
                data: data
              }
            ]
          });
        }, 1000);

        option && myChart.setOption(option);
      })

    },
    onChange(change) {
      var V_Name = this.map_name
      this.scater_data=[[]]
      this.request.get("/groundtemperature-merge/GetNearYearData",{params:{name:this.map_name}}
      ).then(res =>{
        console.log(V_Name)
        for(var i=0;i<12;i++){
          this.scater_data.push([i+1,res[i]])
        }
        var chartDom = document.getElementById('echarts-scatter');
        var mychart = echarts.init(chartDom);
        var option;
        option = {
          tooltip: {
            show:true,
            formatter:function (params){
              return '<div>'+ params.marker + params.value[0] +'月地温:'+ + params.value[1].toFixed(2) + '℃'+'</div>';
            }
          },
          title: {
            text: ''+this.map_name+''+change[1]+'年平均地表气温时间变化图',
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
                return value + "℃";
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

        option && mychart.setOption(option);
      })

      this.request.get("/groundtemperature-merge/MaxAndMinTempture",{params:{city_name:this.map_name}}
      ).then(res =>{
        var max_float = parseFloat(res[0])
        var min_float = parseFloat(res[1])

        // console.log(max_float)
        var chartDom = document.getElementById('echarts-pressure');
        var myChart = echarts.init(chartDom);
        var option;

        const gaugeData = [
          {
            value: max_float,
            name: ''+this.map_name+''+change[1]+'年平均最高地表温度',
            title: {
              offsetCenter: ['-40%', '80%']
            },
            detail: {
              offsetCenter: ['-40%', '95%']
            }
          },
          {
            value: min_float,
            name: ''+change[1]+'年平均最低地表温度',
            title: {
              offsetCenter: ['40%', '80%']
            },
            detail: {
              offsetCenter: ['40%', '95%']
            }
          },
        ];
        option = {
          tooltip: {
            show:true,
            formatter:function (params){
              console.log(params)
              return '<div>'+ '<span style="font-size: 6px">'+params.marker + params.name +'地温:'+ + params.value.toFixed(2)+ '℃'+'</span>'+ '</div>';
            }
          },
          title: {
            text:''+this.map_name+''+change[1]+'年市地表最大和最小温度',
            fontSize: 14,
            left:80
          },
          series: [
            {
              type: 'gauge',
              anchor: {
                show: true,
                showAbove: true,
                size: 18,
                itemStyle: {
                  color: '#FAC858'
                }
              },
              axisLabel: {
                formatter: function (value, index) {
                  return value + "℃";
                },
              },
              pointer: {
                icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                width: 8,
                length: '80%',
                offsetCenter: [0, '8%']
              },
              progress: {
                show: true,
                overlap: true,
                roundCap: true
              },
              axisLine: {
                roundCap: true
              },
              data: gaugeData,
              min:0,
              max:50,
              detail: {
                width: 40,
                height: 14,
                fontSize: 14,
                color: '#fff',
                backgroundColor: 'inherit',
                borderRadius: 3,
                formatter: function (results){
                  var num = results/(max_float+min_float)
                  num = num.toFixed(2)*100
                  return num + '%'
                }
              }
            }
          ]
        };

        option && myChart.setOption(option);
      })
      this.history_data=[]
      this.request("/groundtemperature-merge/GetHistoryData",{params:{name:this.map_name}}).then(res=>{
        var chartDom = document.getElementById('echarts-line');
        var myChart = echarts.init(chartDom);
        var option;
        function randomData(flag) {
          now = new Date(+now + oneDay);
          value = res[flag].averageSurfaceTemperature
          return {
            name: now.toString(),
            value: [
              [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
              Math.round(value)
            ]
          };
        }

        let temp = []
        let now = new Date(1969, 1, 1);
        let oneDay = 24 * 3600 * 1000;
        let value = 0;
        var flag = 0
        for (var i = 0; i < 1000; i++) {
          flag+=1
          this.history_data.push(randomData(flag));

        }

        option = {
          title: {
            text: ''+this.map_name+''+change[1]+'年平均地表气温时间变化图',
            left:50
          },
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              params = params[0];
              var date = new Date(params.name);
              return (
                  date.getFullYear()+'年'+(date.getMonth() + 1)+'月'+date.getDate()+'日平均地表气温'+':'+
                  params.value[1]
                  +'℃'
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
              data: this.history_data,

            }
          ]
        };

        setInterval(function () {
          for (var i = 0; i < 5; i++) {
            flag+=1
            //移除数组中第一项
            this.history_data.shift();
            this.history_data.push(randomData(flag))
          }
          myChart.setOption({
            series: [
              {
                data:  this.history_data
              }
            ]
          });
        }, 1000);

        option && myChart.setOption(option);
      })

      this.request.get("/groundtemperature-merge/SortCityData",{
      }).then(res => {
        var json = null
        var str = null
        var number = 0
        var name = null
        var v_name = []
        var v_data = []
        for (var i = res.length - 1; i > 10; i--) {
          json = JSON.stringify(res[i])
          str = json.split(":")
          number = parseFloat(str[1].substring(0, str[1].length - 1))
          name = str[0].substring(1, str[0].length)
          name = name.substring(1, name.length - 1)
          v_data.push(number)
          v_name.push(name)
        }


        var chartDom = document.getElementById('echarts-category');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              console.log(params)
              return '<div>' + params.marker + params.name + '地温:' + +params.value.toFixed(2) + '℃' + '</div>';
            }
          },

          title: {
            text: '安徽省各站点'+change[1]+'年平均地表气温排序图',
            left: 80
          },
          xAxis: {
            type: 'category',
            data: [v_name[0], v_name[1], v_name[2], v_name[3], v_name[4], v_name[5], v_name[6], v_name[7], v_name[8], v_name[9]],
            axisLabel: {interval: 0, rotate: 30}
          },
          yAxis: {
            type: 'value',
            max: 20.5,
            min: 19,
            interval: 0.5,
            axisLabel: {
              formatter: function (value, index) {
                return value + "℃";
              },
            },
          },
          series: {
            type: 'bar',
            data: [v_data[0], v_data[1], v_data[2], v_data[3], v_data[4], v_data[5], v_data[6], v_data[7], v_data[8], v_data[9]],
            encode: {x: 'name', y: 'average_surface_temperature'},
            datasetIndex: 1,
            itemStyle: {
              normal: {
                //这里是重点
                color: function (params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = ['#1781b5', '#158bb8', '#2f90b9', '#10aec2', '#0eb0c9', '#5cb3cc', '#66a9c9', '#5cb3cc', '#63bbd0', '#c3d7df', '#d8e3e7'];
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        }
        option && myChart.setOption(option);
      })
    },
    initMap(){
      let _this = this
      const m_Map = new Map({
        basemap:"topo-vector"
      })
      const view = new MapView({
        container:"viewDiv",
        map:m_Map,
        zoom:6,
        center:[115,32]
      })

      //定义文本注记
      var labelClass = {
        symbol:{
          type:"text",
          color:"rgba(0,0,0,0.7)",
          font:{
            size:10,
            weight:"bold"
          }
        },
        labelPlacement:"above-center",
        labelExpressionInfo:{
          expression:"$feature.station"
        }
      }
      //加载shp图层
      let m_FeatureLayer=new FeatureLayer({
        //使用支持的字段进行展示
        popupTemplate:{
          title:"安徽省站点",
          content:[
            {
              type:"fields",
              fieldInfos:[
                {
                  fieldName:"station",
                  visible:true,
                  label:"站点名称",
                  format:{
                    places:0,
                    digitSeparator:true
                  }
                },
                {
                  fieldName:"longtitude",
                  visible:true,
                  label:"经度",
                  format:{
                    places:0,
                    digitSeparator:true
                  }
                },
                {
                  fieldName:"latitude",
                  visible:true,
                  label:"纬度",
                  format:{
                    places:0,
                    digitSeparator:true
                  }
                }
              ]
            }
          ]
        },
        labelingInfo:[labelClass],
        renderer:{ //设置渲染样式
          type:"simple",
          label:"点数据",
          symbol:{
            style:"square",
            type:"simple-marker",
            color:"rgba(15,128,178,0.4)",
            size:"12px",
            outline: {
              color: [255, 255, 255, 0.9],
              width: 0.5
            }
          }
        },
        url:"http://localhost:6080/arcgis/rest/services/Meteorological/FeatureServer",
        title:"安徽省站点"
      })
      m_Map.add(m_FeatureLayer)
      // view.on("click",function (event){
      //   var point = view.toMap(event)
      //
      //   var ptType = point.type;
      //
      //   let queryparams = m_FeatureLayer.createQuery()
      //
      //   queryparams.where = "station = '亳州'"
      //
      //   // queryparams.geometry = point
      //   // queryparams.returnGeometry = true;
      //   // queryparams.distance = 2;
      //   // console.log(ptType)
      //   m_FeatureLayer.queryFeatures(queryparams).then((results)=>{
      //     console.log(results)
      //   })
      // })
      var station_name = ""
      // 获取点击要素信息
      view.on("click",function (event){
        view.hitTest(event).then((res)=>{
           station_name = res.results[0].graphic.attributes["station"]
           _this.map_name = station_name

        })
      })

      // function test(response){
      //   if(response.results.length){
      //     const graphic = response.results.filter(function (result) {
      //       return result.graphic.layer === m_FeatureLayer;
      //     })[0].graphic;
      //     console.log(graphic)
      //   }
      // }


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