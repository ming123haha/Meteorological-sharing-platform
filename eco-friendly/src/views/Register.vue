<template>
  <body id="poster">
  <div id="div">
    <video id="video" muted src="../assets/background.mp4" autoplay loop></video>
    <div style="position:relative;top:100px" class="title">
      <h1 style="color: #505458">基于WebGIS的安徽省气象数据信息共享平台</h1>
    </div>
    <div class="container">
      <h1 class="register_title">Please Register</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" label-width="0px" label-position="left">
        <el-form-item style="margin:20px 40px;" label="" prop="loginName">
          <el-input type="text" style="width:250px;" prefix-icon="el-icon-user-solid" v-model.number="ruleForm.loginName" placeholder="请输入用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin:20px 40px;" label="" prop="networkName">
          <el-input type="text" v-model.number="ruleForm.networkName" style="width:250px;" prefix-icon="el-icon-user" placeholder="请输入网名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item style="margin:20px 40px;" label="" prop="pass">
          <el-input style="width:250px;" prefix-icon="el-icon-lock" type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item style="margin:20px 40px;" label="" prop="checkPass">
          <el-input style="width:250px;" prefix-icon="el-icon-lock" type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请再次输入密码"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" style="background: #505458;border: none" @click="submitForm" autocomplete="off">注册</el-button>
          <el-button @click="resetForm" autocomplete="off">重置</el-button>
          <el-button @click="toLogin">去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  </body>
</template>

<script>
export default {
  // name: "Register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validatePass('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致，请重新输入！'));
      }else {
        callback()
      }
    };
    return {
      ruleForm: {
        loginName: '',
        pass: '',
        checkPass: '',
        networkName: ''
      },
      rules: {
        loginName: [
          {required: true, message: "请输入您的用户名", trigger: 'blur'},
          // {min: 2, max: 9, message: "长度为2-9个字符", trigger: 'blur'},
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]

      }
    };
  },
  methods: {
    submitForm(ruleForm) {
      // this.axios.post('http://localhost:8080//user/register', this.ruleForm).then((resp) => {
      //   let data = resp.data;
      //   if (data.success) {
      //     this.ruleForm = {};
      //     this.$message({
      //       message: "注册成功！点击去登录按钮完成登录",
      //       type: "success"
      //     });
      //   }
      // })
      this.ruleForm = {};
          this.$message({
            message: "注册成功！点击去登录按钮完成登录",
            type: "success"
          })
    },
    resetForm(ruleForm) {
      this.$refs[ruleForm].resetFields();
    },
    toLogin() {
      this.$router.push({path: '/Login'})
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#poster{
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
  margin: 0px;
  padding: 0px;
}
.register_title{
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
.title h1 {
  font-size: 60px;
  font-family: '宋体';
  float: left;
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