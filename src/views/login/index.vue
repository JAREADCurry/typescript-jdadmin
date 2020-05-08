<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">电竞社管理后台</h3>
      </div>

      <el-form ref="loginForm" :model="loginForm" :rules="rules">

        <el-form-item prop="phone">
          <el-input v-model="Register.phone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item prop="验证码" class="code">
          <div class="loginVerificationCode">
            <el-input v-model="Register.sendcode" placeholder="请输入验证码" />
            <el-button v-if="disabled===false" type="button" :disabled="disabled" class="el-buttonxxx" @click="sendcode">发送验证码
            </el-button>

            <el-button v-if="disabled===true" type="button" :disabled="disabled" class="el-buttonxxx" @click="sendcode">
              {{ btntxt }}
            </el-button>
          </div>
        </el-form-item>

        <el-button :loading="loading" type="info" style="width:100%;margin-bottom:30px;" @click="submitForm">提交</el-button>

      </el-form>
      <!-- <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div> -->
      <!-- <el-button class="thirdparty-button" type="info" @click="showDialog=true">
        其他登录
      </el-button> -->
      <!-- 微信扫码登录 -->
      <!-- <social-sign /> -->

      <el-dialog title="其他登录" :visible.sync="showDialog">
        请选择登陆类型
        <br>
        <br>
        <br>
        <social-sign />
      </el-dialog>
    </el-form>

    <!-- <vue-particles
      color="#dedede"
      :particle-opacity="0.7"
      :particles-number="80"
      shape-type="circle"
      :particle-size="4"
      lines-color="#dedede"
      :lines-width="1"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LangSelect from '@/components/LangSelect/index.vue'
import SocialSign from './components/SocialSignin.vue'
import { sendMessage, clubUserLogin, weChatLoginGet, telIsExist } from '@/api/users'
import { getToken, setToken } from '@/utils/cookies'

@Component({
  name: 'Login',
  components: {
    LangSelect,
    SocialSign
  }
})
export default class extends Vue {
  private passwordType = 'password'
  private loading = false
  private showDialog = false
  private capsTooltip = false
  private redirect?: string
  private loginForm= {
    username: 'admin242',
    password: 'admin24'
  }

  private showLogin= false
  private Register= {
    // phone: '18565694429',
    phone: '',
    sendcode: '',
    backSendcode: ''
  }

    private disabled=false
    private time= 0
    private btntxt= '重新发送'
    private rules= {}

    mounted() {
      // const code = this.getUrlKey('code')
      // console.log('code', code)
      // if (code !== false) {
      //   this.loading = true
      //   this.weChetLogin(code)
      // } else {
      // // this.loading = true
      // }
    }

    private checkCapslock(e: KeyboardEvent) {
      const { key } = e
      this.capsTooltip = key !== null && key.length === 1 && (key >= 'A' && key <= 'Z')
    }

    // jd-------------------------------------------------------------------------------------------------------------------------------------
    // private getUrlKey(variable: any) {
    //   const query = window.location.href
    //   if (query.indexOf('code') !== -1) {
    //     let vars = query.split('&')
    //     vars = vars[0].split('?')
    //     const value = vars[1].split('=')[1]
    //     // console.log('vars', vars)
    //     return value
    //   } else {
    //     return false
    //   }
    // }

    private async checkPhoneNumber(i: any) {
      try {
        const res = await telIsExist({
          tel: i
        })
        if (res.ret === 0) {
          if (res.data === 'true') {
          // 请求手机验证码
            this.getmessage()
            this.time = 60
            this.disabled = true
            this.timer()
          } else {
            this.$message({
              message: '该号码不存在',
              type: 'error',
              center: false
            })
          }
        } else {
          this.$message({
            message: res.msg,
            type: 'error',
            center: false
          })
        }
      } catch (err) {
        console.log('获取数据失败', err)
      }
    }

    private async weChetLogin(i: any) {
      try {
        const res = await weChatLoginGet({
          code: i
        })
        this.loading = false

        if (res.ret === 0) {
          console.log('微信登录', res)
          sessionStorage.setItem('token', res.data.token) // 保存数据到sessionStorage

          setToken(res.data.token)
          console.log('getter', getToken())
          const myToken = sessionStorage.getItem('token')
          console.log(myToken)
          this.$router.push('/')
        } else {
          this.loading = false
          this.$message({
            message: res.msg,
            type: 'error',
            center: false
          })
        }
      } catch (err) {
        console.log('获取数据失败', err)
      }
    }

    private handleLogin() {
    // this.$refs.loginForm.validate(valid => {
    //   if (valid) {
    //     this.loading = true
    //     this.$store.dispatch('user/login', this.loginForm).then(() => {
    //       this.$router.push({ path: this.redirect || '/' })
    //       this.loading = false
    //     }).catch(() => {
    //       this.loading = false
    //     })
    //   } else {
    //     console.log('error submit!!')
    //     return false
    //   }
    // })

    }

    private async getmessage() {
      const mobile = this.Register.phone
      // const categories = await sendMessage(mobile, 1)
      const response: any = await sendMessage({ mobile: mobile, sendType: '1' })
      if (response.ret === 0) {
        this.Register.backSendcode = response.data.code
        this.$message({
          message: '发送成功',
          type: 'success',
          center: false
        })
      } else {
        this.$message({
          message: response.msg,
          type: 'error',
          center: false
        })
      }
    }

    private sendcode() {
      const reg = 11 && /^((13|14|15|17|18|16|19)[0-9]{1}\d{8})$/
      if (this.Register.phone === '') {
        this.$message({
          message: '手机号不能为空',
          type: 'error',
          center: false
        })
        return
      }
      if (!reg.test(this.Register.phone)) {
        this.$message({
          message: '请输入正确的手机号',
          type: 'error',
          center: false
        })
      } else {
        console.log(this.Register.phone)
        this.checkPhoneNumber(this.Register.phone)
      }
    }

    // 60S倒计时
    private timer() {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's后重新获取'
        setTimeout(this.timer, 1000)
      } else {
        this.time = 0
        this.btntxt = '获取验证码'
        this.disabled = false
      }
    }

    private submitForm222() {
      // this.$router.push('/')
      this.$router.push({ path: '/dashboard' })
      // console.log('getToken(): ', this.$router)
    }

    private async submitForm() {
      const mobile = this.Register.phone

      // JD提交社长手机验证码
      if (this.Register.sendcode === '') {
        this.$message({
          message: '请输入验证码',
          type: 'error',
          center: false
        })
      } else {
        console.log(this.Register.sendcode)
        console.log(this.Register.backSendcode)
        try {
        // const submitData = { mobile: this.Register.phone, code: this.Register.sendcode }
        // const categories = await clubUserLogin(mobile, this.Register.sendcode)
        // console.log('mobile', mobile)
        // console.log('code', this.Register.sendcode)
          const response: any = await clubUserLogin({ mobile: mobile, code: this.Register.sendcode })
          if (response.ret === 0) {
            sessionStorage.setItem('token', response.data.token) // 保存数据到sessionStorage
            setToken(response.data.token)
            console.log('getter', getToken())
            const myToken = sessionStorage.getItem('token')
            console.log(myToken)
            this.$router.push('/')
          } else {
            this.$message({
              message: response.msg,
              type: 'error',
              center: false
            })
          }
        } catch (err) {
          console.log('获取失败', err)
        }
      }
    }
}
</script>

<style lang="scss">

$bg:#000;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
.el-buttonxxx{
    width:30%;
    box-sizing: border-box;
    display:block;
    float: right;
    height: 47px;
        padding: 12px 0;
  }
/* reset element-ui css */
.login-container {
  background-color: #000;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 50%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    margin-bottom:40px;
  }
}
</style>

<style lang="scss" scoped>
$bg:#000;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  position: relative;
  .login-form {
    // position: absolute;
    width: 520px;
    max-width: 100%;
    padding: 60px 35px 0;
    margin: 80px auto;
    overflow: hidden;
    // left: 50%;
    // margin-left: -260px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
