<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../../assets/logo.png">
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="loginInfoDto.username">
      <input type="password"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="loginInfoDto.password">
      <!--<button class="login_btn el-button el-button--primary is-round" type="primary" round>登录</button>-->
      <el-button class="login_btn" @click="login" type="primary" round :loading="isBtnLoading">登录系统</el-button>
      <div style="margin-top: 10px">
        <span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      loginInfoDto: {
        username: '',
        password: ''
      },
      isBtnLoading: false
    }
  },
  methods: {
    login () {
      if (!this.loginInfoDto.username) {
        this.$message.error('用户名不能为空')
        return
      }
      if (!this.loginInfoDto.password) {
        this.$message.error('密码不能为空')
        return
      }

      this.$axios.post('/login', {
        'username': this.loginInfoDto.username,
        'password': this.loginInfoDto.password
      }).then(response => {
        if (response.data.data) {
          this.$router.replace({path: '/index'})
        } else {
          this.$message({
            message: '用户名或密码错误',
            type: 'warning'
          })
        }
      }).catch(function (error) {
        console.log('异常' + error)
      })
    }
  }
}
</script>

<style>
  .login_form {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
  }
  .qxs-ic_user {
    background: url("../../assets/ic_user.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
  }
  .qxs-ic_password {
    background: url("../../assets/ic_password.png") no-repeat;
    background-size: 13px 15px;
    background-position: 3%;
    margin-bottom: 20px;
  }
  .login_logo {
    height: 100%;
  }
  .login_btn {
    width: 100%;
    font-size: 16px;
    background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
    filter: brightness(1.4);
  }
</style>
