<template>
  <ion-card :style="styleProps">
    <slot></slot>
  </ion-card>
</template>

<script lang="ts">
  import { IonCard } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CardComponent',
    props: {
      styleProps: String
    },
    components: { IonCard },
  });
</script>