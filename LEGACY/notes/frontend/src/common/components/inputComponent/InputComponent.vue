<template>
  <ion-input :class="className" :id="id" :label="title" :placeholder="placeholder" :disabled="isDisabled" :label-placement="labelPlacement" :type="type" :fill="fill"></ion-input>
</template>

<script>
  import { IonInput } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'InputComponent',
    props: {
      className: String,
      id: String,
      title: String,
      placeholder: String,
      isDisabled: Boolean,
      isRequired: Boolean,
      labelPlacement: String,
      type: String,
      fill: String
    },
    components: { IonInput }
  });
</script>