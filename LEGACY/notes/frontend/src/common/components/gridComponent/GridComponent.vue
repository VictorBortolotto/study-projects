<template>
  <ion-grid>
    <slot></slot>
  </ion-grid>
</template>

<script lang="ts">
  import { IonGrid } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GridComponent',
    components: { IonGrid },
  });
</script>