<template>
<div>


  <div style="margin: 10px 0">
    <el-input style="width: 200px" placeholder="请输入你想搜索的内容" suffix-icon="el-icon-search" v-model="username"></el-input>
    <el-input style="width: 200px" placeholder="请输入密码" suffix-icon="el-icon-message" class="ml-5" v-model="password"></el-input>
    <el-button class="ml-5" type="primary" @click="load">搜索</el-button>
    <el-button type="warning" @click="reset">重置</el-button>
  </div>

  <div style="margin: 10px 0">
    <el-button type="primary" @click="handleAdd">新增 <i class="el-icon-circle-plus-outline"></i> </el-button>
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

<!--    <el-button type="primary" class="ml-5">导入 <i class="el-icon-bottom"></i> </el-button>-->
    <el-button type="primary" class="ml-5" @click="exp">导出<i class="el-icon-top"></i> </el-button>
  </div>

  <el-table :data="tableData" border stripe :header-cell-class-name="headerBg" @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55"> <!--多选框-->
    </el-table-column>
    <el-table-column prop="id" label="ID" width="80">
    </el-table-column>
    <el-table-column prop="username" label="用户名" width="140">
    </el-table-column>
    <el-table-column prop="password" label="密码" width="120">
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
        :page-sizes="[2, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>

  <el-dialog title="信息" :visible.sync="dialogFormVisible" width="30%" >
    <el-form label-width="80px" size="small">
      <el-form-item label="用户名">
        <el-input v-model="form.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: "User",
  data(){
    return{
      tableData:[],
      total:0,
      multipleSelection:[],
      pageNum:1,
      pageSize:5,
      username:"",
      password:"",
      dialogFormVisible:false,
      form:{},
      headerBg:'headerBg'
    }
  },
  created() {
    this.load()
  },
  methods:{
    collapse() {
      //点击收缩触发函数
      this.isCollapsed = !this.isCollapsed
      if (this.isCollapsed) {
        this.sideWidth = 64
        this.collapseBtnClass = 'el-icon-s-unfold'
        this.logoTextShow = false
      } else {
        this.logoTextShow = true
        this.sideWidth = 200
        this.collapseBtnClass = 'el-icon-s-fold'
      }
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
      request.post("/equipment/del/batch",ids).then(res=>{
        if(res){
          this.$message.success("批量删除成功!")
          this.load()
        }else{
          this.$message.error("批量删除失败!")
        }
      })
    },
    load() {  //加载
      this.request.get("/equipment/page",{
        params:{
          pageNum:this.pageNum,
          pageSize:this.pageSize,
          username:this.username,
          password:this.password
        }
      }).then(res =>{
        console.log(res)
        this.tableData=res.records
        this.total=res.total
      })
    },
    save(){  //保存
      this.request.post("/equipment",this.form).then(res=>{
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
      this.request.delete("/equipment/"+id).then(res=>{
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
      window.open("http://localhost:9090/equipment/export")  //后台导出链接
    },
    reset(){
      this.username=""
      this.password=""
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
.headerBg{
  background: #eee!important;
}
</style>