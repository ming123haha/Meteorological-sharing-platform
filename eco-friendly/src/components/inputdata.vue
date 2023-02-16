<template>
<div>
  <el-select  style="left: 10px;margin-right: 10px" v-model="value1"  placeholder="请选择">
    <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>

  <el-select
      v-model="value2"
      collapse-tags
      style="margin:5px"
      placeholder="请选择">
    <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
    </el-option>
  </el-select>
<!--  <el-input suffix-icon="el-icon-search" v-model="city" placeholder="请输入你想查看的站点"  ></el-input>-->
  <el-button icon="el-icon-search"  style="position: relative" type="primary" @click="load">搜索</el-button>
  <el-button  icon="el-icon-refresh" type="warning" style="position: relative" @click="reset">重置</el-button>
  <div style="margin: 5px 0;">
<!--    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">-->
<!--      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>-->
<!--    </el-checkbox-group>-->

    <el-table style="width: auto" :data="tableData" border stripe :header-cell-class-name="headerBg" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"> <!--多选框-->
      </el-table-column>
      <el-table-column prop="aqi" label="AQI" width="180">
      </el-table-column>
      <el-table-column prop="co" label="CO" width="180">
      </el-table-column>
      <el-table-column prop="no2" label="NO2" width="180">
      </el-table-column>
      <el-table-column prop="pm25" label="PM25" width="180">
      </el-table-column>
      <el-table-column prop="pm10" label="PM10" width="180">
      </el-table-column>
      <el-table-column prop="so2" label="SO2" width="180">
      </el-table-column>
      <el-table-column prop="o3" label="O3" width="180">
      </el-table-column>
      <el-table-column prop="city" label="city" width="180">
      </el-table-column>
      <el-table-column prop="station" label="station" width="200">
      </el-table-column>
      <el-table-column prop="pubtime" label="pubtime" width="200">
      </el-table-column>
    </el-table>
    <div style="padding: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNum"
          :page-sizes="[5, 10]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
  </div>

</div>
</template>

<script>
import axios from "axios";

const cityOptions = ['AQI', 'CO', 'NO2', 'PM2.5','PM10','SO2','O3'];
export default {
  name: "data",
  data() {
    return {
      options1: [{
        value: '合肥市',
        label: '合肥市'
      }, {
        value: '芜湖市',
        label: '芜湖市'
      }, {
        value: '蚌埠市',
        label: '蚌埠市'
      }, {
        value: '淮南市',
        label: '淮南市'
      }, {
        value: '马鞍山市',
        label: '马鞍山市'
      },{
        value: '铜陵市',
        label: '铜陵市'
      },{
        value: '安庆市',
        label: '安庆市'
      },{
        value: '黄山市',
        label: '黄山市'
      },{
        value: '滁州市',
        label: '滁州市'
  },{
        value: '阜阳市',
        label: '阜阳市'
      },{
        value: '宿州市',
        label: '宿州市'
      },{
        value: '亳州市',
        label: '亳州市'
      },{
        value: '池州市',
        label: '池州市'
      },{
        value: '宣城市',
        label: '宣城市'
      }],
      options2:[{}],
      value1: [],  //该value就是v-model绑定值所组成的数组
      value2: [],
      total:0,
      pageNum:1,
      pageSize:5,
      tableData:[],
      headerBg:'headerBg',
      multipleSelection:[],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      city:"",
      isIndeterminate: true
    };
  },
  created() {
    this.load()
  },
  watch: {
    value1(newval) {

      var param = [{}]

      this.request.get("nowatmospheredata/GetNowstation?sCity=" + newval + "").then(res => {
        // console.log(res)

        for (var i = 0; i < res.length; i++) {

          param.push({
            value: '' + res[i].station + '',
            label: '' + res[i].station + ''
          })

        }
      })
      param.shift()
      this.options2 = param
      //console.log(param)


    }
  },
  methods: {
    load(){
      this.bus.$emit('todosAll',this.value1)
      this.bus.$emit('todosAll1',this.value2)
      this.request.get("/historyatmospheredata/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
          city:this.value1,
          station:this.value2
        }
      }).then(res =>{
        //console.log(res)
        //console.log(res.records)
        this.tableData=res.records
        this.total=res.total
      })
    },
    reset(){

      this.value1="";
      this.value2="";
      this.load()
    },
    handleSelectionChange(val){
      //console.log(val)
      this.multipleSelection=val
    },
    handleSizeChange(pageSize){
      //console.log(pageSize)
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum){
      //console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },

  }
};
</script>

<style scoped>
.el-input {
width: 300px;
  margin: 10px 10px;
}
.el-table{
  margin-left: 10px;
  margin-top: 10px;
  width:1900px;
}
</style>