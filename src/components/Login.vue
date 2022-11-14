
<template>
    <div class="container-login">
        <div class="welcome-login">
            <h1 class="login-h1">Welcome Back.</h1>
        </div>
        <div class="login">
            <img class="login-logo" src="../assets/img/logo-login.jpg" alt="logo-login">
            <p class="login-p">Login to an existing account</p>
            <form action="/home">
            <div class="container-input">
                <i class="fa-solid fa-user"></i>
                <input class="login-page" type="email" placeholder="E-mail" required>
            </div>

            <div class="container-input">
                <i class="fa-solid fa-key"></i>
                <input class="login-page" type="password" name="" id="" placeholder="Password" required>
            </div>
            
            <div class="container-checkbox">
                <div class="checkbox">
                    <input type="checkbox" id="checkbox">
                    <label for="checkbox"> Remember me</label>
                </div>
                <a href="">Forgot password?</a>
            </div>

            <div class="container-captcha">
                <vue-recaptcha
                    theme="light"
                    size="normal"
                    :tabindex="0"
                    @widgetId="recaptchaWidget = $event"
                    @verify="callbackVerify($event)"
                    @expired="callbackExpired()"
                    @fail="callbackFail()"
                />
            </div>
            <button class="login-btn" type="submit" value="Submit">Log in</button>

          </form>

            <div>
                <hr class="login-hr">
                <p class="login-signin">or sign in with</p>
            </div>

            <div class="container-login-icon">
                <img class="icn" src="../assets/img/google.svg" alt="">
                <img class="icn" src="../assets/img/facebook.svg" alt="">
                <img class="icn" src="../assets/img/apple.svg" alt="">
            </div>
        </div>
    </div>
</template>


<script>
  import { ref } from "vue";
  import { VueRecaptcha, useRecaptcha } from "vue3-recaptcha-v2";

  export default {
    name: "recaptcha",
    components: { VueRecaptcha },
    setup: () => {
      // Reset Recaptcha
      const { resetRecaptcha } = useRecaptcha();
      const recaptchaWidget = ref(null);

      const callbackVerify = (response) => {
        console.log(response);
        return response;
      };
      const callbackExpired = () => {
        console.log("expired!");
      };
      const callbackFail = () => {
        console.log("fail");
      };
      // Reset Recaptcha action
      const actionReset = () => {
        resetRecaptcha(recaptchaWidget.value);
      };

      return {
        recaptchaWidget,
        callbackVerify,
        callbackFail,
        actionReset,
        view : 0,
      };
    },
  };
</script>