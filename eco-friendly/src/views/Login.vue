<template>
  <div id="div">
    <video id="video" muted src="../assets/background.mp4" autoplay loop></video>
    <div style="position:absolute;top:80px" class="title">
      <h1 class="h1style">基于气象预测模型的气象数据与共享平台</h1>
    </div>
    <div class="box">
      <div class="form">
        <h1 class="login_title">Please Login</h1>
        <el-form :model="loginForm" :rules="rules" ref="userForm">
          <el-form-item prop="username">
            <el-input type="text" size="medium" style="width:300px;" prefix-icon="el-icon-user"
                            v-model="loginForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" size="medium" style="width:300px;" prefix-icon="el-icon-lock" show-password
                      v-model="loginForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" style="width: 78px;height: 40px ;position: absolute;left: -120%;" size="medium" @click="register">
              注册
            </el-button>
            <el-button type="primary" style="width: 78px;height: 40px;position: relative;right: -120%" size="medium" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
<!--    <div class="container">-->
<!--    </div>-->
  </div>

</template>

<script>
export default {
  name: "login",
  data(){
    return{
      username:'',
      loginForm:{},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
        ],
      }
    }
  },

  methods:{
    login() {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          console.log(this.loginForm)
          this.request.post("/user/login", this.loginForm).then(res => {
            if (res.code === '200') {
              localStorage.setItem("loginForm",JSON.stringify(res.data))  //存储用户信息到浏览器
              this.$router.push("/HomeMap")
              this.$message.success('登录成功!')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      });
    },
    register(){
      this.$router.push({path:'/register'})
    }
  }
}

</script>

<style scoped>
.box{
  top:28%;
  position: absolute;
  width: 380px;
  height: 420px;
  background-color: rgba(255,255,255,.3);
  border-radius: 20px;
  overflow: hidden;
}
.box::before{
  content: '';
  position: absolute;
  top:-50%;
  left:-50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg,transparent,#45f3ff,#45f3ff);
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
}
.box::after{
  content: '';
  position: absolute;
  top:-50%;
  left:-50%;
  width: 380px;
  height: 420px;
  background: linear-gradient(0deg,transparent,#45f3ff,#45f3ff);
  transform-origin: bottom right;
  animation: animate 6s linear infinite;
  animation-delay: -3s;
}
@keyframes animate {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.form{
  position: absolute;
  inset:2px;
  border-radius: 20px;
  background-color: rgba(255,255,255);
  z-index: 10;

}
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
.h1style{
  /*font-size: var(--calcite-font-size-8);*/
  font-size: 60px;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgb(144,168,185),
    rgb(150,165,183),
    rgb(219,224,232)
  );
  font-weight:bold;
  color:transparent;
  background-clip:text
}


.login_title{
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

div{
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}


button:hover {
  background: #505458;
  outline: 0;

}
/*.title h1 {*/
/*  font-size: 60px;*/
/*  font-family: '宋体';*/
/*  float: left;*/
/*}*/

body {
  margin: 0px;
  padding: 0px;
}

#video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
}
</style>