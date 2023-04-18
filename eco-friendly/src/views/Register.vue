<template>
  <div id="div">
    <video id="video" muted src="../assets/background.mp4" autoplay loop></video>
    <div style="position:absolute;top:80px" >
      <h1 class="h1style">基于气象预测模型的气象数据与共享平台</h1>
    </div>
    <div class="container">
      <h1 class="register_title">Please Register</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="userForm" label-width="0px">
        <el-form-item prop="username">
          <el-input type="text" size="medium" style="width:300px;" prefix-icon="el-icon-user"
                    v-model="ruleForm.username" placeholder="请输入用户名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" size="medium" style="width:300px;" prefix-icon="el-icon-lock" show-password
                    v-model="ruleForm.password" placeholder="请输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" size="medium" style="width:300px;" prefix-icon="el-icon-lock" show-password
                    v-model="ruleForm.checkPass" placeholder="请再次输入密码" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button  size="medium" type="success" style="position: relative;left:-4vh" @click="register" autocomplete="off">注册</el-button>
          <el-button size="medium" type="warning" @click="reset" autocomplete="off">重置</el-button>
          <el-button size="medium" type="primary"style="position: relative;right:-4vh" @click="$router.push('/login')" autocomplete="off">去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data(){
    return{
      ruleForm:{},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        networkName: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
        ],
      }
    }
  },

  methods:{
    register() {
      this.$refs['userForm'].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
          if (this.ruleForm.password !== this.ruleForm.checkPass){
            this.$message.error("两次输入的密码不一致")
            return false
          }
          this.request.post("/user/register", this.ruleForm).then(res => {
            if (res.code === '200') {
              this.$message.success('注册成功!')
            } else {
              this.$message.error(res.msg)
            }
          })
        }
      });
    },
    reset() {
      this.$refs.userForm.resetFields()
    },
  }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}
.register_title{
  margin: 20px auto 40px auto;
  text-align: center;
  color: #505458;
}
div{
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /*overflow: hidden;*/
}
.container {
  top:28%;
  position: absolute;
  width: 380px;
  height: 420px;
  background-color: rgba(255,255,255,0.25);
  backdrop-filter: blur(3px);
  border-radius: 20px;
}
button:hover {
  background: #505458;
  outline: 0;
}
.h1style{
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



