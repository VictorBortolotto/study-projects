var from = "";

const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
}

const allowDrop = (ev) => {
  ev.preventDefault();
}

const drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  if(ev.target.id === '' || ev.target.id.indexOf("task-list-cards-container-") < 0 || from === ev.target.id) {
    return;
  }

  let to = ev.target.id

  let idTaskListFrom = parseInt(from.replace("task-list-cards-container-", ""))
  let idTaskListTo = parseInt(to.replace("task-list-cards-container-", ""))
  let idTask = parseInt(data.replace("card-", ""))

  let obj = toFromTaskObj(idTaskListTo, idTaskListFrom, idTask);

  if (!updateTaskLocationinTaskLists(obj)) return;

  ev.target.appendChild(document.getElementById(data));
}

const updateTaskLocationinTaskLists = async(obj) => {
  let response = await updateTaskToNewTaskList(obj)
  if (response.statusCode === 500) {
    return false
  } 

  return true
}

const toFromTaskObj = (idTaskListTo, idTaskListFrom, idTask) => {
  let obj = {
    idTaskListTo: idTaskListTo,
    idTaskListFrom: idTaskListFrom,
    idTask: idTask
  }

  return obj;
}

const onOpenTaskLists = async() => {
  let response = await getTaskList(localStorage.getItem("frameId"));

  if(response.statusCode === 200){
    createTaskListView(response.obj)
  }else if(response.statusCode === 500){
    showSnackbar('error', response.message)
  }
}

const onMouseClickSetFrom = (id) => {
  from = id;
}

const createTaskListView = (taskLists) => {
  let taskListContainerArea = document.getElementById("lists-container-area")
  let taskListArea = document.getElementById('task-lists-area');
  
  if (taskLists.length > 0){
    taskLists.map((list) => {
      taskListArea.innerHTML += taskList(list)
      putTasksInTaskList(list)
    })
  } else {
    taskListArea.style.display = 'none'
    taskListContainerArea.style.alignItems = 'center'
    taskListContainerArea.style.justifyContent = 'center'
    taskListContainerArea.innerHTML += '<div id="no-tasks" style="display: flex">No tasks list found, please create one just clicking on plus button.</div>'
    taskListContainerArea.style.fontFamily = "Arial, Helvetica, sans-serif"
    taskListContainerArea.style.fontSize = "25px"
    taskListContainerArea.style.color = "rgb(146, 146, 228)"
  }
}

const createNewTaskOnListView = (newTaskList) => {
  let taskListArea = document.getElementById('task-lists-area');
  let noTasks = document.getElementById('no-tasks');
  if (noTasks !== null) noTasks.style.display = 'none'
  if (taskListArea.style.display == 'none' || taskListArea.style.display == '') taskListArea.style.display = 'flex'
  
  taskListArea.innerHTML += taskList(newTaskList)
}

const putTasksInTaskList = (taskList) => {
  let taskListElement = document.getElementById(`task-list-cards-container-${taskList.id}`);
  taskList.tasks.map((tasks, index) => {
    tasks.map((task, taskIndex) => {
      if (task.id > 0){
        taskListElement.innerHTML += card(task)
      }
    })
  })
}

const onCreateTaskList = async() => {
  const taskListName = document.getElementById('task-name-input').value
  
  const taskList = {
      idFrame: localStorage.getItem('frameId'),
      name: taskListName
  }

  let response = await createTaskList(taskList)

  if(response.statusCode === 200){
      rebuildTaskList(response)
      onClickCancelButton();
  }else if(response.statusCode === 500){
      showSnackbar('error', response.message)
  }
}