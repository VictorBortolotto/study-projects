const taskCardComponent = (task) => {
  return `
    <li class="task" id="task-${task.id}">
      <div class="task-name">${task.name}</div>
      <div class="task-desc">${task.description}</div>
      ${checkbox(task.status, task.id)}
      <div class="buttons-task">
        <div class="edit">
          <button class="task-edit" id="task-edit-${task.id}" onclick="onClickEdit(this.id)"><img src="../../assets/edit.svg" alt=""></button>
        </div>
        <div class="remove"><button class="task-remove" id="task-remove-${task.id}" onclick="onClickRemove(this.id)"><img src="../../assets/trash.svg" alt=""></button></div>
      </div>
    </li>
  `
} 

const onClickChecked = (id) => { 
  let taskId = parseInt(id.replace('check-', ''))
  let checkbox = document.getElementById(id)

  checkbox.checked = checkbox.checked 

  taskList.map((task) => {
    if (task.id === taskId) { 
      task.status = checkbox.checked
    }
  })

  if (statusToShow !== checkbox.checked) {
    let card = document.getElementById('task-' + taskId)
    card.remove()
  }

  filterTasks()
  addTaskToLayout()
}

const checkbox = (taskStatus, taskId) => {
  if (taskStatus) {
    return `<div class="status"><input type="checkbox" name="" id="check-${taskId}" class="task-status" onclick="onClickChecked(this.id)" checked></div>`
  } else {
    return `<div class="status"><input type="checkbox" name="" id="check-${taskId}" class="task-status" onclick="onClickChecked(this.id)" !checked></div>`
  }
}

const onClickRemove = (id) => {
  let idTask = parseInt(id.replace("task-remove-", ""))
  let card = document.getElementById("task-" + idTask)
  let newList = []
  taskList.map((task) => {
    if (task.id !== idTask) { 
      newList.push(task)
    }
  })
  taskList = newList
  card.remove()
  filterTasks()
  addTaskToLayout()
}

const onClickEdit = (id) => {
  let idTask = parseInt(id.replace("task-edit-", ""))
  let task = {}
  taskList.map((taskinList) => {
    if (taskinList.id === idTask) task = taskinList 
  })

  onClickNewTask(idTask)

  let cardHeaderText = document.getElementById('card-header-text')
  cardHeaderText.textContent = 'EDIT TASK'
  let createTaskButton = document.getElementById('create-task-button')
  createTaskButton.style.display = 'none'
  let saveTaskButton = document.getElementById('save-task-button')
  saveTaskButton.style.display = "flex"

  let taskName = document.getElementById('task-card-name')
  let taskDescription = document.getElementById('task-card-description')
  let taskStatus = document.getElementById('task-checkbox')
  let taskStatusDesc = document.getElementById('task-status-text')
    
  taskName.value = task.name
  taskDescription.value = task.description
  taskStatus.checked = task.status

  if (task.status) {
    taskStatusDesc.innerHTML = "DONE"
  } else {
    taskStatusDesc.innerHTML = "PENDING"
  }

}