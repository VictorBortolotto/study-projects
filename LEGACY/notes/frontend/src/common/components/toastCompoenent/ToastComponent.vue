<template>
  <ion-toast :id="id" :message="message" :is-open="isOpen" style="text-align: center;"></ion-toast>
</template>

<script>
  import { IonToast } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ToastComponent',
    props: {
      duration: Number,
      message: String,
      isOpen: Boolean,
      styleProps: String,
      id: String
    },
    components: {
      IonToast
    },
  });
</script>