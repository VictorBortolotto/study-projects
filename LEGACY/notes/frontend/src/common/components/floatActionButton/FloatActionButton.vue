<template>
  <ion-fab slot="fixed" horizontal="end" vertical="bottom">
    <ion-fab-button style="--background: rgb(93, 221, 93);">
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script lang="ts">
  import { IonFab, IonFabButton, IonIcon } from '@ionic/vue';
  import { add, chevronUp } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'FloatActionButtonComponent',
    components: { IonFab, IonFabButton, IonIcon },
    setup() {
      return { add, chevronUp };
    },
  });
</script>