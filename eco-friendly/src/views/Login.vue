<template>
  <div id="div" >
    <video id="video" muted src="../assets/map.mp4" autoplay loop></video>
    <div style="position:relative;top:100px" class="title">
      <h1>基于WebGIS的安徽省气象数据信息共享平台</h1>
    </div>
    <div class="container">
      <h1>Please Login</h1>
        <el-form :model="user" :rules="rules" ref="userForm">
          <span style="color:#fff; font-size:18px;position: relative;top:55px;left:-20px"> 用户名 </span>
         <el-form-item prop="username"style="margin:30px 50px;">
            <el-input  size="medium"style="width:250px;" prefix-icon="el-icon-user" v-model="user.username"></el-input>
          </el-form-item>
          <span style="color:#fff; font-size:18px;position: relative;top:-10px;left:-5px"> 密码 </span>
          <el-form-item prop="password" style="margin:-40px 0px">
            <el-input  size="medium"style="width:250px;"prefix-icon="el-icon-lock" show-password v-model="user.password"></el-input>
          </el-form-item>
          <el-form-item style="margin:60px 0px">
            <el-button style="position: relative; background-color:#14273f;left:75px;width: 100px;" type="primary" size="big" autocomplete="off" @click="login">
              <sapn style="font-size: 15px">登录</sapn>
            </el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      user:{},
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
          this.request.post("/user/login", this.user).then(res => {
            if (res.code === '200') {
              localStorage.setItem("user",JSON.stringify(res.data))  //存储用户信息到浏览器
              this.$router.push("/HomeMap")
              this.$message.success('登录成功!')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      });
    }
  }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}

div{
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

}
.container {
  margin-top: 200px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px 0px 40px 40px;
  border-radius: 5px;
}

.container h1 {
  text-align: center;
 position:relative;
  top:40px;
  left:-20px
}

button:hover {
  background: #14273f;
  outline: 0;

}
.title h1 {
  font-size: 60px;
  font-family: '宋体';
  float: left;

}

body {
  margin: 0;
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