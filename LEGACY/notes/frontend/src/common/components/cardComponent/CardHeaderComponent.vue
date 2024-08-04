<template>
  <ion-card-header :style="styleProps">
    <slot></slot>
  </ion-card-header>
</template>

<script lang="ts">
import { IonCardHeader } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardHeaderComponent',
  props: {
    styleProps: String
  },
  components: { IonCardHeader },
});
</script>