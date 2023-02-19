<template>
<div>
  <el-main>

  <div style="margin: 10px 0">
    <el-input style="width: 200px" placeholder="请输入搜索的城市" suffix-icon="el-icon-search" class="ml-5" v-model="city"></el-input>
    <el-input style="width: 200px" placeholder="请输入监测站区域" suffix-icon="el-icon-message" class="ml-5" v-model="station"></el-input>
    <el-button icon="el-icon-search" style="position: relative" type="primary" @click="load">搜索</el-button>
    <el-button  icon="el-icon-refresh" type="warning" style="position: relative" @click="reset">重置</el-button>
    <el-dropdown size="medium">
      <el-button type="primary" style="position: relative;right: -10%">
        xx表<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>0cm地温表</el-dropdown-item>
        <el-dropdown-item @click.native="Test">本站气压表</el-dropdown-item>
        <el-dropdown-item>风向风速表</el-dropdown-item>
        <el-dropdown-item>降水表</el-dropdown-item>
        <el-dropdown-item>气温表</el-dropdown-item>
        <el-dropdown-item>日照表</el-dropdown-item>
        <el-dropdown-item>相对湿度表</el-dropdown-item>
        <el-dropdown-item>蒸发表</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>

  <div style="margin: 10px 0">
    <el-button type="primary" @click="handleAdd">新增<i class="el-icon-circle-plus-outline"></i> </el-button>
    <el-popconfirm
        class="ml-5"
        title="确定批量删除这些数据吗？"
        confirm-button-text='确定'
        cancel-button-text='我再想想'
        icon="el-icon-info"
        icon-color="red"
        @confirm="delBatch"
    >
      <el-button type="danger" class="ml-5" slot="reference" >批量删除 <i class="el-icon-remove-outline"></i> </el-button>
    </el-popconfirm>

<!--    <el-button type="primary" class="ml-5">导入 <i class="el-icon-bottom"></i> </el-button>-->
    <el-button type="primary" class="ml-5" @click="exp">导出<i class="el-icon-top"></i> </el-button>
  </div>

  <el-table :data="tableData" border stripe :header-cell-class-name="headerBg" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"> <!--多选框-->
    </el-table-column>
    <el-table-column prop="stationNumber" label="区站号" width="80">
    </el-table-column>
    <el-table-column prop="latitude" label="纬度" width="140">
    </el-table-column>
    <el-table-column prop="longitude" label="经度" width="200">
    </el-table-column>
    <el-table-column prop="elevationOfObservationStation" label="观测站海拔" width="120">
    </el-table-column>
    <el-table-column prop="year" label="年" width="200">
    </el-table-column>
    <el-table-column prop="month" label="月" width="120">
    </el-table-column>
    <el-table-column prop="day" label="日" width="120">
    </el-table-column>
    <el-table-column prop=" " label="小型蒸发量" width="120">
    </el-table-column>
    <el-table-column prop="largeEvaporationCapacity" label="大型蒸发量" width="120">
    </el-table-column>
    <el-table-column label="操作" >
      <template slot-scope="scope">
        <el-button type="success" @click="handleEdit(scope.row)">编辑 <i class="el-icon-edit"></i> </el-button>
        <el-popconfirm
            class="ml-5"
            title="确定删除吗？"
            confirm-button-text='确定'
            cancel-button-text='我再想想'
            icon="el-icon-info"
            icon-color="red"
            @confirm="del(scope.row.id)"
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

  <el-dialog title="添加监测点" :visible.sync="dialogFormVisible" width="50%" >
    <el-form label-width="100px" size="small">
      <el-form-item label="城市">
        <el-input v-model="form.city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="监测站区域">
        <el-input v-model="form.station" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="监测站编号">
        <el-input v-model="form.stationcode" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="监测站经度">
        <el-input v-model="form.latitude" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="监测站纬度">
        <el-input v-model="form.longtitude" autocomplete="off"></el-input>
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
export default {
  name: "DataPanel",
  data(){
    return{
      tableData:[],
      total:0,
      multipleSelection:[],
      pageNum:1,
      pageSize:15,
      Station_Number:"",
      id:"",
      city:"",
      station:"",
      stationcode:"",
      latitude:"",
      longtitude:"",
      dialogFormVisible:false,
      form:{},
      headerBg:'headerBg'
    }
  },
  created() {
    this.load()
  },
  methods:{
    Test(){
      alert("这是一个测试!")
      console.log("这是一个测试!")
    },
    handleAdd(){
      this.dialogFormVisible=true
      this.form={}
    },
    handleEdit(row){
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
      request.post("/realequipments/del/batch",ids).then(res=>{
        if(res){
          this.$message.success("批量删除成功!")
          this.load()
        }else{
          this.$message.error("批量删除失败!")
        }
      })
    },
    load() {  //加载
      this.request.get("/evaporation-merge/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
          // Station_Number:this.Station_Number,
          // city:this.city,
          // station:this.station,
          // latitude:this.latitude,
          // longtitude:this.longtitude,
        }
      }).then(res =>{
        console.log(res)

        this.tableData=res.records
        this.total=res.total
      })
    },
    save(){  //保存
      this.request.post("/realequipments",this.form).then(res=>{
        if(res){
          this.$message.success("保存成功!")
          this.dialogFormVisible=false
          this.load()
        }else{
          this.$message.error("保存失败!")
        }
      })
    },
    del(id){  //删除
      this.request.delete("/realequipments/"+id).then(res=>{
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
      window.open("http://localhost:9090/realequipments/export")  //后台导出链接
    },


    reset(){
      const axios = require('axios');  //调用axios获取api数据
      //var url = "https://api.epmap.org/api/v1/air/station?pubtime=2022-8-4&station_code=1409A";//接口后台允许跨域了,否则获取不到数据
      var url="https://api.epmap.org/api/v1/air/station_list"
      axios.get(url
          ,{
        headers:{
           'Authorization':'APPCODE 6918864e8f774be196a00e406e987db7',
        }
      }
      ).then((response) => {
            console.log(response,response.data.result);
          })
          .catch(function (error) {
            console.log(error);
          });

      this.city="";
      this.station="";
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