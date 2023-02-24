<template>
  <body id="poster">
  <div id="div">
    <video id="video" muted src="../assets/background.mp4" autoplay loop></video>
    <div style="position:relative;top:100px" class="title">
      <h1 class="h1style">基于WebGIS的安徽省气象数据信息共享平台</h1>
    </div>
    <div class="container">
      <h1 class="login_title">Please Login</h1>
      <el-form :model="loginForm" :rules="rules" ref="userForm">
        <span style="color:#505458; font-size:18px;position: relative;top:55px;left:-20px"> 用户名 </span>
        <el-form-item prop="username" style="margin:30px 50px;">
          <el-input type="text" size="medium" style="width:250px;" prefix-icon="el-icon-user"
                    v-model="loginForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
        </el-form-item>
        <span style="color:#505458; font-size:18px;position: relative;top:-10px;left:-5px"> 密码 </span>
        <el-form-item prop="password" style="margin:-40px 0px">
          <el-input type="password" size="medium" style="width:250px;" prefix-icon="el-icon-lock" show-password
                    v-model="loginForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <span></span>
        <span></span>
        <el-form-item style="margin:60px 0px">
          <el-button style="position: relative; background-color:#505458;right:75px;width: 90px;border:none;" type="primary"
                     size="big" autocomplete="off" @click="register">
            <span style="font-size: 15px">注册</span>
          </el-button>
          <el-button style="position: relative; background-color:#505458;left:40px;width: 90px;border:none;" type="primary"
                     size="big" autocomplete="off" @click="login">
            <span style="font-size: 15px">登录</span>
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
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
* {
  box-sizing: border-box;
}
.h1style{
  font-size: var(--calcite-font-size-8);
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

#poster{
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
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
  overflow: hidden;

}
.container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 200px auto;
  background:#ffffff;
  padding: 40px 10px 40px 40px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;

}

.container h1 {
  text-align: center;
  position:relative;
  top:40px;
  left:-20px
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