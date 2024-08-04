<template>
  <slot :setNoteList="setNoteList"></slot>
</template>

<script>
  import { openToast } from '../../common/js/toast';
  import { getNoteLists } from '../../services/note.list.service';
  import { setLocalStorage } from '../../utils/utils';

  export default {
    name: 'HomeContext',
    props: {
      list: [],
      setNoteList: Function
    },
    data() {
      return {
        noteList: []
      }
    },
    async mounted(list) {
      list = await this.fetchNoteList();
      return list
    },
    methods: {
      async fetchNoteList() {
        const response = await getNoteLists()
        if (response.statusCode === 200){
          let noteList = JSON.stringify(response.obj)
          setLocalStorage('noteLists', noteList)
          return response.obj;
        }else if (response.statusCode === 404){
          openToast('info', response.description)
          return
        }else{
          openToast('error', response.description)
          return
        }
      }
    }
  }
</script>