<template>
  <ion-button :class="className" :id="id" :expand="expand" :shape="shape" :fill="fill" :size="size" :color="color" :style="styleProps" onclick="click">
    <slot></slot>
  </ion-button>
</template>

<script>
  import { IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ButtonComponent',
    props: {
      className: String,
      id: String,
      expand: String,
      shape: String,
      fill: String,
      size: String,
      styleProps: String,
      color: String,
      click: Function,
      icon: Object
    },
    components: { 
      IonButton
    },
    setup(props) {
      return props.icon
    }
  });
</script>