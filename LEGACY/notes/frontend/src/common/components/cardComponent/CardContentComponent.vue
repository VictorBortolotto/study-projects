<template>
    <ion-card-content :style="styleProps">
      <slot></slot>
    </ion-card-content>
</template>

<script lang="ts">
  import { IonCardContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CardContentComponent',
    props: {
      styleProps: String
    },
    components: { IonCardContent },
  });
</script>