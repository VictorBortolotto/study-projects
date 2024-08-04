<template>
  <ModalComponent id="dialog" styleProps="--background: white; --width: 30%; --height: 25%;">
    <CardComponent styleProps="--background: white; height: 100%; width: 100%; padding: 0 0 0 0; margin: 0px;">
      <CardHeaderComponent styleProps="--background: white; color: black;">
        <CardTitleTextComponent styleProps="display: flex; align-items: center; justify-content: center; --color: black;">Nova Lista</CardTitleTextComponent>
      </CardHeaderComponent>
      <CardContentComponent styleProps="display: flex; align-items: center; justify-content: center; flex-direction: column; row-gap: 10px;">  
        <InputComponent id="list-name" title="Nome da lista" labelPlacement="floating" style="width: 90%; height: 30px;"/>
        <div style="width: 90%; display: flex; flex-direction: row;">
          <ButtonComponent @click="onClickCancelNewTaskList()" styleProps="font-size: 18px; width: 100%; height: 10%; --background: rgb(236, 88, 88);">Cancel</ButtonComponent>
          <ButtonComponent @click="onClickCreateNewTaskList()" styleProps="font-size: 18px; width: 100%; height: 10%; --background: rgb(93, 221, 93);">Send</ButtonComponent>
        </div>
      </CardContentComponent>
    </CardComponent>
  </ModalComponent>
</template>

<script>
  import ButtonComponent from '../../../common/components/buttomComponent/ButtonComponent.vue';
  import CardComponent from '../../../common/components/cardComponent/CardComponent.vue';
  import CardContentComponent from '../../../common/components/cardComponent/CardContentComponent.vue';
  import CardHeaderComponent from '../../../common/components/cardComponent/CardHeaderComponent.vue';
  import CardTitleTextComponent from '../../../common/components/cardComponent/CardTitleTextComponent.vue';
  import ModalComponent from '../../../common/components/modalComponent/ModalComponent.vue';
  import InputComponent from '../../../common/components/inputComponent/InputComponent.vue';
  import { defineComponent } from 'vue';
  import { onClickCreateNewTaskList, onClickCancelNewTaskList } from '../js/NotesList';

  export default defineComponent({
    name: 'NewTaskModalComponent',
    components: {
      ButtonComponent,
      CardComponent,
      CardContentComponent,
      CardHeaderComponent,
      CardTitleTextComponent,
      ModalComponent,
      InputComponent
    },
    setup() {
      return { onClickCreateNewTaskList, onClickCancelNewTaskList }
    }
  });
</script>