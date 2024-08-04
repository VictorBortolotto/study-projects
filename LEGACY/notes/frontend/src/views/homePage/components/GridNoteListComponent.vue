<template>
  <HomeContext>
    <GridComponent v-if="getFromLocalStorage().length > 0">
      <GridRowComponent>
        <GridColumnComponent v-for="item in getFromLocalStorage()" :key="item.id" size="4">
          <CardComponent>
            <CardHeaderComponent styleProps="--background: white; min-height: 150px;">
              <CardTitleTextComponent>
                {{ item.name  }}
              </CardTitleTextComponent>
            </CardHeaderComponent>
          </CardComponent>
        </GridColumnComponent>
      </GridRowComponent>
    </GridComponent>
    <CardComponent v-else styleProps="display:flex; align-items: center; justify-content: center; width: 100%; height: 96%; --background: white;">
      <CardTitleTextComponent styleProps="color: black;">Sorry, but there's no Note Lists to show here, click on the button at right side to create a new one!</CardTitleTextComponent>
    </CardComponent>
  </HomeContext>
</template>

<script>
  import CardComponent from '../../../common/components/cardComponent/CardComponent.vue';
  import CardHeaderComponent from '../../../common/components/cardComponent/CardHeaderComponent.vue';
  import CardTitleTextComponent from '../../../common/components/cardComponent/CardTitleTextComponent.vue';
  import GridComponent from '../../../common/components/gridComponent/GridComponent.vue';
  import GridRowComponent from '../../../common/components/gridComponent/GridRowComponent.vue';
  import GridColumnComponent from '../../../common/components/gridComponent/GridColumnComponent.vue';
  import { defineComponent } from 'vue';
  import HomeContext from '../../context/HomeContext.vue';
  import { getLocalStorage } from '../../../utils/utils';

  export default defineComponent({
    name: 'GridNoteListComponent',
    components: {
      CardComponent,
      CardHeaderComponent,
      CardTitleTextComponent,
      GridComponent,
      GridRowComponent,
      GridColumnComponent,
      HomeContext
    },
    methods: {
      getFromLocalStorage(){
        return JSON.parse(getLocalStorage("noteLists"))
      }
    }
  });
</script>