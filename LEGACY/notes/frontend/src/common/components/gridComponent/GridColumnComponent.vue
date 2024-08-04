<template>
  <ion-col :style="styleProps" :size="size" :size-lg="sizeLg" :size-md="sizeMd" :size-sm="sizeSm">
    <slot></slot>
  </ion-col>
</template>

<script lang="ts">
  import { IonCol } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GridColumnComponent',
    props: {
      styleProps: String,
      size: String,
      sizeSm: String,
      sizeMd: String,
      sizeLg: String
    },
    components: { IonCol },
  });
</script>