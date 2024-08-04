<template>
  <ion-header>
      <ion-toolbar :style="style">
        <slot></slot>
      </ion-toolbar>
    </ion-header>
</template>

<script>
  import { defineComponent } from 'vue';
  import { IonHeader, IonToolbar } from '@ionic/vue';

  export default defineComponent({
    name: 'HeaderComponent',
    props: {
      style: String
    },
    components: {
      IonHeader, 
      IonToolbar,
    },
  });
</script>