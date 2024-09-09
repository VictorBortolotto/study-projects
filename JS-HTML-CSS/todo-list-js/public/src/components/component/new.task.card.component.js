const newTaskCardComponent = () => {
  return `
    <div class="new-task-card">
      <div class="card-header">NEW TASK</div>
      <div class="card-content">
        <label for="" class="task-card-label">Name: </label>
        <input type="text" class="task-card-input" id="task-card-name">
        <label for="" class="task-card-label">Description: </label>
        <input type="text" class="task-card-input" id="task-card-description">
        <div class="checkbox-area">
          <label for="" class="task-card-checkbox-label">Status:</label>
          <input type="checkbox" id="task-checkbox" class="task-card-checkbox" onclick="onClickCheckboxCreateTask(this.id)">
          <div class="task-status-area" id="task-status-text">PENDING</div>
        </div>
      </div>
      <div class="card-footer">
        <button class="new-task-card-button" id="create-task-button" onclick="createTask()">CREATE</button>
        <button class="new-task-card-button" id="cancel-create-task-button" onclick="onClickCancel()">CANCEL</button>
      </div>
    </div>
  `
}

const onClickNewTask = () => {
  let newTaskCardArea = document.getElementById('new-task-card-area')
  newTaskCardArea.style.display = 'flex'
  newTaskCardArea.innerHTML = newTaskCardComponent()
  newTaskCardArea.innerHTML += '<div id="snackbar"></div>'
}

const onClickCancel = () => {
  let newTaskCardArea = document.getElementById('new-task-card-area')
  newTaskCardArea.innerHTML = ""
  newTaskCardArea.style.display = "none"
}

const onClickCheckboxCreateTask = (id) => {
  let checkbox = document.getElementById(id)
  let taskStatusDesc = document.getElementById('task-status-text')
  if (checkbox.checked) {
    taskStatusDesc.innerHTML = "DONE"
  } else {
    taskStatusDesc.innerHTML = "PENDING"
  }
}

const createTask = () => {
  let taskName = document.getElementById('task-card-name').value
  let taskDescription = document.getElementById('task-card-description').value
  let taskStatus = document.getElementById('task-checkbox')

  let task = {
    id: 0,
    name: taskName,
    description: taskDescription,
    status: taskStatus.checked
  }

  task.id = taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1
  addTaskInTaskList(task)
  onClickCancel()
}