<template>
      <ion-card-title :style="styleProps">
        <slot></slot>
      </ion-card-title>
</template>

<script lang="ts">
  import { IonCardTitle  } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'CardTitleTextComponent',
    props: {
      styleProps: String
    },
    components: { IonCardTitle  },
  });
</script>