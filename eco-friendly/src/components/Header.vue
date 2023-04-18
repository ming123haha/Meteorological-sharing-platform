<template>
  <div>
    <div class="menu-container">
      <el-menu
          background-color="#204F71"
          text-color="#fff"
          active-text-color="#3eede7"
          mode="horizontal"
          router
          class="menu"
      >
        <div class="left-items">
          <el-menu-item index="/DataAnalysis" style="margin-right: 20px;">
            <i class="el-icon-map-location"></i>
            地图主页
          </el-menu-item>
          <el-menu-item index="/DataPanel" style="margin-right: -200px;">
            <i class="el-icon-data-analysis"></i>
            数据面版
          </el-menu-item>
        </div>
        <div class="center-item">
        <span class="neon" style="font-size: 18px;">
          基于气象预测模型的气象数据与共享平台
        </span>
        </div>
        <div class="right-items">
          <el-menu-item index="/datasearch" style="margin-left: -200px;">
            <i class="el-icon-edit-outline"></i>
            气象预测
          </el-menu-item>
          <el-menu-item index="/HomeMap" style="margin-left: 20px;">
            <i class="el-icon-set-up"></i>
            空间插值
          </el-menu-item>
        </div>
      </el-menu>
          <el-dropdown style="cursor: pointer; position: absolute; right: 0;" >
            <span style="color: white;margin-right: 10px">{{ user.username }}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/login"style="text-decoration: none">退出</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
    </div>

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
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-items {
  display: flex;
  align-items: center;
}

.right-items {
  display: flex;
  align-items: center;
}

.center-item {
  display: flex;
  justify-content: center;
  align-items: center;
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