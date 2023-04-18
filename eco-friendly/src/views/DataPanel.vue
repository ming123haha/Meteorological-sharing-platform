<template>
<div>
  <el-main>

  <div style="margin: 10px 0">
    <el-input style="width: 200px" placeholder="请输入搜索的区站号" suffix-icon="el-icon-search" class="ml-5" v-model="Station_Number"></el-input>
    <el-date-picker
        class="ml-5"
        v-model="time"
        type="date"
        placeholder="选择日期"
    >
    </el-date-picker>

<!--    <el-input style="width: 200px" placeholder="请输入监测站区域" suffix-icon="el-icon-message" class="ml-5" v-model=""></el-input>-->
    <el-button icon="el-icon-search" style="position: relative" type="primary" @click="load">搜索</el-button>
    <el-button  icon="el-icon-refresh" type="warning" style="position: relative" @click="reset">重置</el-button>
    <el-dropdown size="medium">
      <el-button type="primary" style="position: relative;right: -10%">
        {{ tablename }}<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="ground">0cm地温表</el-dropdown-item>
        <el-dropdown-item @click.native="pressure">本站气压表</el-dropdown-item>
        <el-dropdown-item @click.native="wind">风向风速表</el-dropdown-item>
        <el-dropdown-item @click.native="precipitation">降水表</el-dropdown-item>
        <el-dropdown-item @click.native="temperature">气温表</el-dropdown-item>
        <el-dropdown-item @click.native="sunshine">日照表</el-dropdown-item>
        <el-dropdown-item @click.native="humidity">相对湿度表</el-dropdown-item>
        <el-dropdown-item @click.native="evaporation">蒸发表</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

  <div style="margin:0">
    <el-button class="ml-5" type="primary" @click="handleAdd">新增<i class="el-icon-circle-plus-outline"></i> </el-button>
    <el-popconfirm
        class="ml-5"
        title="确定批量删除这些数据吗？"
        confirm-button-text='确定'
        cancel-button-text='我再想想'
        icon="el-icon-info"
        icon-color="red"
        @confirm="delBatch"
    >
      <el-button type="danger" slot="reference" >批量删除 <i class="el-icon-remove-outline"></i> </el-button>
    </el-popconfirm>
    <el-upload action="http://localhost:9090/evaporation-merge/import"
               :show-file-list="false"
               accept=".xlsx"
               :on-success="importSuccess"
               style="display: inline-block">
      <el-button type="primary" class="ml-5">导入 <i class="el-icon-bottom"></i> </el-button>
    </el-upload>

    <el-button type="primary"  @click="exp">导出<i class="el-icon-top"></i> </el-button>
  </div>

  <el-table :data="tableData" border stripe :header-cell-class-name="headerBg" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"> <!--多选框-->
    </el-table-column>
    <el-table-column prop="stationNumber" label="区站号" width="80">
    </el-table-column>
    <el-table-column prop="latitude" label="纬度" width="80">
    </el-table-column>
    <el-table-column prop="longitude" label="经度" width="80">
    </el-table-column>
    <el-table-column prop="elevationOfObservationStation" label="观测场拔海高度" width="120">
    </el-table-column>
    <el-table-column prop="year" label="年" width="80">
    </el-table-column>
    <el-table-column prop="month" label="月" width="50">
    </el-table-column>
    <el-table-column prop="day" label="日" width="50">
    </el-table-column>
    <el-table-column :prop="dynamicprop1" :label="dynamiclabel1" width="100" v-if="show1">
    </el-table-column>
    <el-table-column :prop="dynamicprop2" :label="dynamiclabel2" width="110" v-if="show2">
    </el-table-column>
    <el-table-column :prop="dynamicprop3" :label="dynamiclabel3" width="110" v-if="show3">
    </el-table-column>
    <el-table-column :prop="dynamicprop4" :label="dynamiclabel4" width="110" v-if="show4">
    </el-table-column>
    <el-table-column :prop="dynamicprop5" :label="dynamiclabel5" width="110" v-if="show5">
    </el-table-column>
    <el-table-column label="操作" >
      <template slot-scope="scope">
        <el-button class="ml-5" type="success" @click="handleEdit(scope.row)">编辑 <i class="el-icon-edit"></i> </el-button>
        <el-popconfirm
            class="ml-5"
            title="确定删除吗？"
            confirm-button-text='确定'
            cancel-button-text='我再想想'
            icon="el-icon-info"
            icon-color="red"
            @confirm="del(scope.row.stationNumber)"
        >
          <el-button type="danger" slot="reference">删除<i class="el-icon-remove-outline"></i> </el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
  <div style="padding: 10px 0">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[ 5, 10]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>

  <el-dialog title="添加蒸发数据" :visible.sync="dialogFormVisible" width="50%" >
    <el-form label-width="110px" size="small">
      <el-form-item label="区站号">
        <el-input v-model="form.stationNumber" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="纬度">
        <el-input v-model="form.latitude" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="经度">
        <el-input v-model="form.longitude" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="观测场拔海高度">
        <el-input v-model="form.elevationOfObservationStation" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="年">
        <el-input v-model="form.year" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="月">
        <el-input v-model="form.month" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="日">
        <el-input v-model="form.day" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="小型蒸发量">
        <el-input v-model="form.smallEvaporationCapacity" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="大型蒸发量">
        <el-input v-model="form.largeEvaporationCapacity" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
    </el-main>
</div>
</template>

<script>
// import show from "vue/src/platforms/web/runtime/directives/show";
import { Message } from 'element-ui';
export default {
  name: "DataPanel",
  computed: {
    show() {
      return show
    }
  },
  data(){
    return{
      time:"",
      year:"",
      month:"",
      day:"",
      dynamicprop1:"smallEvaporationCapacity",
      dynamicprop2:"largeEvaporationCapacity",
      dynamicprop3:"averageSurfaceTemperature",
      dynamicprop4:"dailyMaximumSurfaceTemperature",
      dynamicprop5:"dailyMinimumSurfaceTemperature",

      dynamiclabel1:"小型蒸发量",
      dynamiclabel2:"大型蒸发量",
      dynamiclabel3:"平均地表气温",
      dynamiclabel4:"日最高地表气温",
      dynamiclabel5:"日最低地表气温",


      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      tablename:"",
      tableData:[],
      total:0,
      multipleSelection:[],
      pageNum:1,
      pageSize:10,
      Station_Number:"",
      id:"",
      dialogFormVisible:false,
      form:{},
      headerBg:'headerBg',

    }
  },
  created() {
    this.load()
  },
  methods:{
    handleAdd(){
      this.dialogFormVisible=true
      this.form={}
    },
    handleEdit(row){
      console.log(row)
      this.form=row
      this.dialogFormVisible=true
    },
    handleSelectionChange(val){
      console.log(val)
      this.multipleSelection=val
    },
    delBatch(){
      //批量删除
      let ids=this.multipleSelection.map(v =>v.id)   //[{} ,{} ,{}] =>[1,2,3]
      console.log(ids)
      this.request.post("/evaporation-merge/del/batch",ids).then(res=>{
        if(res){
          this.$message.success("批量删除成功!")
          this.load()
        }else{
          this.$message.error("批量删除失败!")
        }
      })
    },
    load() {  //加载
      if(this.time!==""){
        var date = new Date(this.time);
        const thisYear = date.getFullYear();
        const thisMonth = (date.getMonth() + 1).toString()
        const thisDay = date.getDate().toString()

        this.year = `${thisYear}.0`;
        this.month  = `${thisMonth}.0`;
        this.day = `${thisDay}.0`;


        console.log(this.year);// 输出格式化后的年带小数位
        console.log(this.month) // 输出格式化后的月带小数位
        console.log(this.day)        // 输出格式化后的日带小数位
      }else{
        this.year =""
        this.month=""
        this.day=""
      }
      this.request.get("/evaporation-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
          StationNumber:this.Station_Number,
          year:this.year,
          month:this.month,
          day:this.day
        }
      }).then(res =>{
        this.show1=true
        this.show2=true
        this.tablename='蒸发表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    save(){  //保存
      this.request.post("/evaporation-merge",this.form).then(res=>{
        if(res){
          this.$message.success("保存成功!")
          this.dialogFormVisible=false
          this.load()
        }else{
          this.$message.error("保存失败!")
        }
      })
    },
    del(Station_Number){  //删除

      console.log(Station_Number)
      this.request.delete("/evaporation-merge/"+Station_Number).then(res=>{
        if(res){
          this.$message.success("删除成功!")
          this.dialogFormVisible=false
          this.load()
        }else{
          this.$message.error("删除失败!")
        }
      })
    },
    exp(){  //导出
      console.log(this.tableData)
      var year = this.tableData[0]['year']
      var num = this.pageSize
      this.request.get("/evaporation-merge/export",{params:{year:year,Num:num}}).then(res=>{
        // 导出成功后显示消息提示框
        Message.success({
          message: '导出 Excel 数据成功！，请到D盘根目录查看',
          showClose: true,  // 是否显示关闭按钮
          duration: 3000     // 持续时间（毫秒）
        });
      }).catch(error => {
        // 导出失败后显示错误提示框
        Message.error({
          message: '导出 Excel 数据失败，请重试！',
          showClose: true,  // 是否显示关闭按钮
          duration: 3000     // 持续时间（毫秒）
        });
      });
    },
    importSuccess(){
      this.$message.success("导入成功")
      this.load()
    },

    reset(){
      // const axios = require('axios');  //调用axios获取api数据
      // //var url = "https://api.epmap.org/api/v1/air/station?pubtime=2022-8-4&station_code=1409A";//接口后台允许跨域了,否则获取不到数据
      // var url="https://api.epmap.org/api/v1/air/station_list"
      // axios.get(url
      //     ,{
      //   headers:{
      //      'Authorization':'APPCODE 6918864e8f774be196a00e406e987db7',
      //   }
      // }
      // ).then((response) => {
      //       console.log(response,response.data.result);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      this.time=""
      this.Station_Number=""
      this.load()
    },
    handleSizeChange(pageSize) {    //页面最大条数
      console.log(pageSize)
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {   //第几页
      console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },
    ground(){
      this.show1=true
      this.show2=true
      this.show3=true
      this.show4=false
      this.show5=false
      this.dynamicprop1 = "averageSurfaceTemperature"
      this.dynamicprop2 = "dailyMaximumSurfaceTemperature"
      this.dynamicprop3 = "dailyMinimumSurfaceTemperature"

      this.dynamiclabel1="平均地表气温"
      this.dynamiclabel2="日最高地表气温"
      this.dynamiclabel3="日最低地表气温"

      this.tablename='0cm地温表'
      this.tableData=""
      this.total=""
      this.request.get("/groundtemperature-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        console.log(res)
        this.tablename='0cm地温表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    pressure(){
      this.show1=true
      this.show2=true
      this.show3=true
      this.show4=false
      this.show5=false
      this.dynamicprop1 = "averageLocalAirPressure"
      this.dynamicprop2 = "dailyMaximumLocalAirPressure"
      this.dynamicprop3 = "dailyMinimumLocalAirPressure"

      this.dynamiclabel1="平均本站气压"
      this.dynamiclabel2="日最高本站气压"
      this.dynamiclabel3="日最低本站气压"

      this.tablename='本站气压表'
      this.tableData=""
      this.total=""
      this.request.get("/pressure-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        console.log(res)
        this.tablename='本站气压表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    wind(){
      this.show1=true
      this.show2=true
      this.show3=true
      this.show4=true
      this.show5=true
      this.dynamicprop1 = "averageWindSpeed"
      this.dynamicprop2 = "maximumWindSpeed"
      this.dynamicprop3 = "windDirectionOfMaximumWindSpeed"
      this.dynamicprop4 = "extremeWindSpeed"
      this.dynamicprop5 = "windDirectionOfExtremeWindSpeed"

      this.dynamiclabel1="平均风速"
      this.dynamiclabel2="最大风速"
      this.dynamiclabel3="最大风速的风向"
      this.dynamiclabel4="极大风速"
      this.dynamiclabel5="极大风速的风向"

      this.tablename='风向风速表'
      this.tableData=""
      this.total=""
      this.request.get("/wind-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        console.log(res)
        this.tablename='风向风速表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    precipitation(){
      this.dynamicprop1 = "PrecipitationAt208Hours"
      this.dynamicprop2 = "precipitationAt820Hours"
      this.dynamicprop3 = "cumulativePrecipitationAt2020Hours"

      this.dynamiclabel1="20-8时降水量"
      this.dynamiclabel2="8-20时降水量"
      this.dynamiclabel3="20-20时累计降水量"
      this.tablename='降水表'
      this.tableData=""
      this.total=""
      this.request.get("/precipitation-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        console.log(res)
        this.tablename='降水表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    temperature(){
      this.show1=true
      this.show2=true
      this.show3=true
      this.show4=false
      this.show5=false
      this.dynamicprop1 = "averageTemperature"
      this.dynamicprop2 = "dailyMaximumTemperature"
      this.dynamicprop3 = "dailyMinimumTemperature"

      this.dynamiclabel1="平均气温"
      this.dynamiclabel2="日最高气温"
      this.dynamiclabel3="日最低气温"

      this.tablename='气温表'
      this.tableData=""
      this.total=""
      this.request.get("/temperature-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        console.log(res)
        this.tablename='气温表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    sunshine(){
      this.show1=true
      this.show2=false
      this.show3=false
      this.show4=false
      this.show5=false
      this.dynamicprop1 = "sunlightHours"
      this.dynamiclabel1="日照时数"
      this.tablename='日照表'
      this.tableData=""
      this.total=""
      this.request.get("/sunshine-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        console.log(res)
        this.tablename='日照表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    humidity(){
      this.show1=true
      this.show2=true
      this.show3=false
      this.show4=false
      this.show5=false
      this.dynamicprop1 = "averageRelativeHumidity"
      this.dynamicprop2 = "minimumRelativeHumidity"

      this.dynamiclabel1="平均相对湿度"
      this.dynamiclabel2="最小相对湿度"
      this.tablename='相对湿度表'
      this.tableData=""
      this.total=""
      this.request.get("/humidity-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        console.log(res)
        this.tablename='相对湿度表'
        this.tableData=res.records
        this.total=res.total
      })
    },
    evaporation(){
      this.show1=true
      this.show2=true
      this.show3=false
      this.show4=false
      this.show5=false
      this.dynamicprop1 = "smallEvaporationCapacity",
      this.dynamicprop2 = "largeEvaporationCapacity",

      this.dynamiclabel1 = "小型蒸发量"
      this.dynamiclabel2 =" 大型蒸发量"
      this.tablename ='蒸发表'
      this.tableData =""
      this.total=""
      this.request.get("/evaporation-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
        }
      }).then(res =>{
        this.tablename='蒸发表'
        this.tableData=res.records
        this.total=res.total
      })
    }

  }

}
</script>

<style scoped>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.headerBg{
  background: #eee!important;
}
</style>