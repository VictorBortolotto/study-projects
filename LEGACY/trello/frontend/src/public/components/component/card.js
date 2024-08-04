const card = (card) => {
    return `
        <li class="card" id="card-${card.id}" draggable="true" ondragstart="drag(event)">
            <div class="card-container">
                <dis class="card-header">
                    <div class="card-options-container">
                        <button class="card-options" id="card-options-container-${card.id}" onclick="onClickCardOptionsContainer(this.id)">
                            <img src="../icons/three-dots-vertical.svg" alt="">
                        </button>
                        <div class="card-list-options" id="card-options-${card.id}">
                            <ol class="card-options-list">
                                <li class="card-option-item">
                                    <button class="card-option-button" id="edit-card-${card.id}" onclick="onClickEditTaskDialog(this.id)">EDIT</button>
                                </li>
                                <li class="card-option-item">
                                    <button class="card-option-button" id="delete-card-${card.id}" onclick="onClickDelete(this.id)">DELETE</button>
                                </li>
                                <li class="card-option-item">
                                    <button class="card-option-button" id="move-card-${card.id}" onclick="(this.id)">MOVE TO</button>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="card-title-area" id="card-title-${card.id}" onclick="onClickTitle(this.id)">
                        <h6 class="card-title">
                            ${card.name}
                        </h6>
                    </div>
                    
                </dis>
                <div class="card-description-area">
                    <p class="card-description" id="card-description-${card.id}" onclick="onClickDescription(this.id)">
                        ${card.description}
                    </p>
                </div>
                <div class="card-footer">

                </div>
            </div>
        </li>
    `
}

const onClickCardOptionsContainer = (id) => {
    let idTask = id.replace('card-options-container-', '')
    let taskOptions = document.getElementById(`card-options-${idTask}`)
    if (taskOptions.style.display === '' || taskOptions.style.display === 'none'){
        taskOptions.style.display = 'flex'
    } else {
        taskOptions.style.display = 'none'
    }
}

const onClickTitle = (id) => {
    let idTask = id.replace('card-title-', '')
    openEditCardDialog(idTask)
}

const onClickDescription = (id) => {
    let idTask = id.replace('card-description-', '')
    openEditCardDialog(idTask)
}

const onClickEditTaskDialog = (id) => {
    let idTask = id.replace('edit-card-', '')
    openEditCardDialog(idTask)
}

const onClickDelete = async(id) => {
    let idTask = id.replace('delete-card-', '')
    let response = await deleteTask(idTask)
    
    if (response.statusCode === 500) {
        showSnackbar('error', response.message)
        return;
    } 
    
    let card = document.getElementById(`card-${idTask}`)
    card.remove()
    showSnackbar('success', response.message)
}

const openEditCardDialog = async(idTask) => {
    let response = await getTask(idTask)
    let task = response.obj.task
    let cardListOptions = document.getElementById(`card-options-${idTask}`)
    cardListOptions.style.display = 'none'
    let newTaskCardContainer = document.getElementById('new-task-card-container')
    newTaskCardContainer.style.display = 'flex'
    newTaskCardContainer.innerHTML = newTaskCard(idTask)
    let newTaskNameInput = document.getElementById('new-task-name-input');
    newTaskNameInput.focus()
    let btnCreateTask = document.getElementById('btn-create-task')
    btnCreateTask.style.display = 'none'
    fillNewTaskFields(task)
    setTaskFromCard(task)
    removeSnackBar();
    createSnackBarOn('new-task-card-container')
}

const fillNewTaskFields = (taskObj) => {
    let taskName = document.getElementById('new-task-name-input')
    let taskDescription = document.getElementById('new-task-description')
    let taskInitialDate = document.getElementById('calendar-initial-date')
    let taskEndDate = document.getElementById('calendar-end-date')
    let taskPriority = document.getElementById('priority-input')

    taskName.value = taskObj.name
    taskDescription.value = taskObj.description
    taskInitialDate.value = taskObj.startDate
    taskEndDate.value = taskObj.endDate
    taskPriority.value = translateTaskPriority(taskObj.priority)
}

const translateTaskPriority = (priority) => {
    let priorityLevel = ''
    if (priority === 'L') {
        priorityLevel = 'Low'
    } 
    
    if (priority === 'H') {
        priorityLevel = 'High'
    } 
    
    if (priority === 'U') {
        priorityLevel = 'Urgent'
    }

    if (priority === 'M') {
        priorityLevel = 'Medium'
    }

    return priorityLevel;
}