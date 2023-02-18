<template>
  <div style="">
    <div style="position: absolute;top:50%;left: 50%;transform: translate(-50%,-50%)">
<!--      <img src="../assets/logo.png" style="height: 40px;margin-right: 8px" alt="">-->
      <span class="neon" style="font-size: 18px">
        基于WebGIS的安徽省气象数据信息共享平台
      </span>
    </div>
      <!--菜单部分-->
      <el-menu
          background-color="#204F71"
          text-color="#fff"
          active-text-color="#3eede7"
          router
          mode="horizontal"
          style="position: absolute;left: 26%"
      >
        <el-menu-item index="/DataAnalysis"><i class="el-icon-map-location" style=""></i>
        地图主页</el-menu-item>
        <el-menu-item index="/DataPanel"><i class="el-icon-data-analysis" style=""></i>
        数据面版</el-menu-item>
        <el-menu-item style="position:absolute;right: -195%" index="/datasearch"><i class="el-icon-edit-outline" ></i>
          气象预测</el-menu-item>
        <el-menu-item style="position:absolute;left: 295%" index="/HomeMap"><i class="el-icon-set-up" style=""></i>
          空间插值</el-menu-item>
        <!--        <el-menu-item index="/SpatialAnalysis"><i class="el-icon-set-up" style=""></i>-->
        <!--          交易分析</el-menu-item>-->
      </el-menu>

<!--     显示用户名   -->
    <el-dropdown style="position: absolute;right: 20px;cursor: pointer" >
      <span>{{ user.username }}</span> <i class="el-icon-arrow-down" style="color:#fff;margin-left: 5px;margin-top: 25px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <span style="text-decoration: none" @click="logoout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    isCollapsed:Boolean,
    logoTextShow:Boolean
  },
  data(){
    return{
      date:new Date(),
      paths:[],
      user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{}
    }
  },
  mounted() {
    //显示当前日期时间
    let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date(); // 修改数据date
    }, 1000)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },

  created() {
    //console.log(this.$router)
  },
  methods:{
    dateFormat(time) {
      var date=new Date(time);
      var year=date.getFullYear();
      /* 在日期格式中，月份是从0开始的，因此要加0
      * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
      * */
      var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
      var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
      var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
      var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
      var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
      // 拼接
      return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
    },
    logoout(){
      this.$router.push("/login")
      localStorage.removeItem("user")
      this.$message.success("退出成功")
    }
  }
}
</script>

<style scoped>
span {
  color:white;
  font-size:15px;
}
.el-menu-item {
  font-size: 15px;
  background-color: #002339;
  font-family: 微软雅黑;
  font-weight:800;
  color: #fff;
}
.neon {
  font-family: 微软雅黑;
  font-style:oblique;
  font-weight:800;
  color: #fff;
  -webkit-animation: shining 0.5s alternate infinite;
  animation: shining 1s alternate infinite;
}
@-webkit-keyframes shining {
  from {
    text-shadow: 0 0 10px rgb(10, 25, 66), 0 0 20px
    /*lightblue, 0 0 30px lightblue, 0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;*/
  }
  to {
    text-shadow: 0 0 5px #0237ff, 0 0 10px
    /*lightblue, 0 0 15px #0939ef, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;*/
  }
}
.time{
  font-family: 微软雅黑;
  font-style:oblique;
  font-weight:800;
  color: #fff;
  -webkit-animation: shining 0.5s alternate infinite;
  animation: shining 1s alternate infinite;
}
@-webkit-keyframes shining {
  from {
    text-shadow: 0 0 10px rgb(10, 25, 66), 0 0 20px
    /*lightblue, 0 0 30px lightblue, 0 0 40px skyblue, 0 0 50px skyblue, 0 0 60px skyblue;*/
  }
  to {
    text-shadow: 0 0 5px #0237ff, 0 0 10px
    /*lightblue, 0 0 15px #0939ef, 0 0 20px skyblue, 0 0 25px skyblue, 0 0 30px skyblue;*/
  }
}
</style>