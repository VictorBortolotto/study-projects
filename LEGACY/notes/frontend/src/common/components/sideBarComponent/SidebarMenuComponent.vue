<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar style="--background: rgb(93, 221, 93);">
        <ion-title>Notes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" style="--background: white">
      <ButtonComponent styleProps="font-size: 15px; width: 100%; height: 5%; --background: white; color: red;">
        LOGOUT
        <ion-icon :icon="logOutOutline"></ion-icon>
      </ButtonComponent>
    </ion-content>
  </ion-menu>
</template>

<script>
  import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
  import { logOutOutline } from 'ionicons/icons';
  import ButtonComponent from '../buttomComponent/ButtonComponent.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'SidebarMenuComponent',
    components: {
      IonContent,
      IonHeader,
      IonMenu,
      IonTitle,
      IonToolbar,
      IonIcon,
      ButtonComponent
    },
    setup() {
      return { logOutOutline }
    }
  });
</script>