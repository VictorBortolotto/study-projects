<style>
  @import './styles/login.style.css';
</style>

<template>
  <div class="login-container">
    <div class="login-area">
      <div class="login-form">
        <ion-text style="color: rgb(93, 221, 93);" ><h1>LOGIN</h1></ion-text>
        <InputComponent id="email" title="Email" style="color: black; width: 90%; background: white;" placeholder="Email" labelPlacement="floating" type="text" fill="outline"></InputComponent>
        <InputComponent id="password" title="Password" style="color: black; width: 90%; background: white;" placeholder="Password" labelPlacement="floating" type="password" fill="outline"></InputComponent>
        <ButtonComponent @click="onClickSignIn()" styleProps="font-size: 18px; width: 90%; height: 10%; --background: rgb(93, 221, 93);">SIGN IN</ButtonComponent>
        <ion-text><a href="/signup" style="color: rgb(93, 221, 93); text-decoration: none;">Create account</a></ion-text>
        <ToastComponent id="toast"></ToastComponent>
      </div>
      <div class="welcome-signup">
        <ion-text style="color: white;" ><h1 style="font-size: xx-large;">WELCOME TO NOTES!</h1></ion-text>
        <ion-text style="color: white; width: 90%;" ><h3 style="text-align: center">Your best friend that you can write and tell all your important thinks to never forget them anymore.</h3></ion-text>
      </div>
    </div> 
  </div>
</template>

<script setup>
  import { IonText } from '@ionic/vue';
  import InputComponent from '../../common/components/inputComponent/InputComponent.vue';
  import ButtonComponent from '../../common/components/buttomComponent/ButtonComponent.vue';
  import { onClickSignIn } from './js/Login';
  import ToastComponent from '../../common/components/toastCompoenent/ToastComponent.vue';
</script>./js/Login