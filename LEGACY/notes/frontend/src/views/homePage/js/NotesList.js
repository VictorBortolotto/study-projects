import { openToast } from "../../../common/js/toast"
import { createNewNoteList } from "../../../services/note.list.service"
import { getLocalStorage, getSessionStorage, isEmptyOrNull, setLocalStorage } from "../../../utils/utils"

export async function onClickCreateNewTaskList() {
  let name = document.getElementById('list-name').value

  if(isEmptyOrNull(name)){
    openToast('warn', "Please, fill all the fields before to continue!")
    return
  }
  
  const noteList = {
    idUser: getSessionStorage("idUser"),
    name: name
  }

  let response = await createNewNoteList(noteList)

  if(response.statusCode === 200){
    let noteList = JSON.parse(getLocalStorage('noteLists'))
    if(isEmptyOrNull(noteList)){
      noteList = []
      noteList[0] = response.obj
    }else{
      noteList.push(response.obj)
    }
    setLocalStorage('noteLists', JSON.stringify(noteList))
    openToast('success', response.description)
  }else{
    openToast('error', response.description)
  }
} 

export async function onClickCancelNewTaskList() {
  let modal = document.getElementById('dialog')
  modal.dismiss()
} 

export default {
  onClickCreateNewTaskList,
  onClickCancelNewTaskList
}