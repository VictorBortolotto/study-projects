<style>
  @import './styles/signup.style.css';
</style>

<template>
  <div class="signup-container">
    <div class="signup-area">
      <div class="signup-form">
        <ion-text style="color: rgb(93, 221, 93);" ><h1>SIGN UP</h1></ion-text>
        <InputComponent id="email" title="Email" style="color: black; width: 90%; background: white;" placeholder="Email" labelPlacement="floating" type="text" fill="outline"></InputComponent>
        <InputComponent id="password" title="Password" style="color: black; width: 90%; background: white;" placeholder="Password" labelPlacement="floating" type="password" fill="outline"></InputComponent>
        <InputComponent id="confirm-password" title="Confirm Password" style="color: black; width: 90%; background: white;" placeholder="Confirm Password" labelPlacement="floating" type="password" fill="outline"></InputComponent>
        <ButtonComponent @click="onClickSignUp()" styleProps="font-size: 18px; width: 90%; height: 10%; --background: rgb(93, 221, 93);">CREATE</ButtonComponent>
        <ToastComponent id="toast"></ToastComponent>
      </div>
      <div class="welcome-signup">
        <ion-text style="color: white;" ><h1 style="font-size: xx-large;">DONT HAVE AN ACCOUNT?</h1></ion-text>
        <ion-text style="color: white; width: 90%;" ><h3 style="text-align: center">If you don't have an account the first step to participate on this platform is create one, don't worry create an account is very quickly and you need do this step just once.</h3></ion-text>
      </div>
    </div> 
  </div>
</template>

<script setup>
  import { IonText } from '@ionic/vue';
  import InputComponent from '../../common/components/inputComponent/InputComponent.vue';
  import ButtonComponent from '../../common/components/buttomComponent/ButtonComponent.vue';
  import { onClickSignUp } from './js/Signup.js';
  import ToastComponent from '../../common/components/toastCompoenent/ToastComponent.vue';
</script>./js/Signup.js