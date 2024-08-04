<template>
    <ion-row>
      <slot></slot>
    </ion-row>
</template>

<script lang="ts">
  import { IonRow } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GridRowComponent',
    components: { IonRow },
  });
</script>