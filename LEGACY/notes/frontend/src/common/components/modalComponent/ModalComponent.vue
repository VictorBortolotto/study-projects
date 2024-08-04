<template>  
  <ion-modal id="modal" trigger="open-dialog" :style="styleProps">
    <slot></slot>
  </ion-modal>
</template>

<script>
  import { IonModal } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ModalComponent',
    props: {
      styleProps: String
    },
    components: {
      IonModal
    }
  });
</script>