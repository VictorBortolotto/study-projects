const taskCardComponent = (task) => {
  return `
    <li class="task" id="task-${task.id}">
      <div class="task-name">${task.name}</div>
      <div class="task-desc">${task.description}</div>
      ${checkbox(task.status, task.id)}
      <div class="buttons-task">
        <div class="edit">
          <button class="task-edit"><img src="../../assets/edit.svg" alt=""></button>
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
}

const checkbox = (taskStatus, taskId) => {
  if (taskStatus) {
    return `<div class="status"><input type="checkbox" name="" id="check-${taskId}" class="task-status" onclick="onClickChecked(this.id)" checked></div>`
  } else {
    return `<div class="status"><input type="checkbox" name="" id="check-${taskId}" class="task-status" onclick="onClickChecked(this.id)" !checked></div>`
  }
}

const onClickRemove = (id) => {
  let idTaskCard = id.replace("task-remove-", "")
  let card = document.getElementById("task-" + idTaskCard)
  card.remove()
}