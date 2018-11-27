<template>
  <div>
    <div class="login-head">
    </div>


    <div class="form-list">
      <input type="number" placeholder-class="input-placeholder" name="tel"  placeholder="请输入您的手机号码"    maxlength="11"/>
    </div>
    <div class="form-list getCode">
      <input type="number" name="code"  placeholder="请输入短信验证码"  maxlength="4"/>
      <button class="getMsg" >2</button>
    </div>
    <div class="login-btn">登录</div>
    <div class="agreement">
      已同意<router-link to="/" class="main-color">《用户服务协议》</router-link>
    </div>
  </div>


</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped lang="less">
  .login-head{
    margin:60/100rem 0  80/100rem 0;
    text-align: center;
  }
  .login-head image{
    width:250/100rem;
    height:87/100rem;
  }


  .form-list{
    margin:0 30/100rem 30/100rem;
    font-size:14/100rem;
    height: 90/100rem;
    border-radius: 5/100rem;
    opacity: 0.9;
  }
  .form-list input{
    background-color: #f8f8f8;
    padding-left:20/100rem;
    height: 90/100rem;
    line-height: 90/100rem;

  }
  .getCode{
    display: flex;
    justify-content: space-between;
  }
  .getCode input{
    width:430/100rem;
  }
  .getMsg{
    width: 210/100rem;
    height: 90/100rem;
    background-color: #ffffff;
    line-height:  90/100rem;
    text-align: center;
    color: #222222;
    font-size:14/100rem;
    margin:0;
  }
  .login-btn{
    margin:0 30/100rem;
    height: 90/100rem;
    background-color: #f5174a;
    border-radius: 5/100rem;
    opacity: 0.9;
    color: #ffffff;
  }
  .agreement{
    display: flex;
    justify-content: flex-end;
    font-size:12/100rem;
    margin:24/100rem 30/100rem 0 0;
  }

</style>
