var cardTask = null;

const newTaskCard = (id) => {
  return `<div class="new-task-card">
            <div class="new-task-card-header">
                <h1 class="new-task-card-title">
                    NEW TASK
                </h1>
            </div>
            <div class="new-task-card-section">
                <label for="" class="task-name-label">Name:</label>
                <input type="text" id="new-task-name-input" class="task-name-field" placeholder="Name">
                <label for="" class="task-name-label">Description:</label>
                <textarea type="text" class="task-name-field" id="new-task-description" placeholder="Description"></textarea>
                <div class="calendar-button-titles">
                    <label for="" class="calendar-button-title">Start:</label>
                    <label for="" class="calendar-button-title">End:</label>
                </div>
                <div class="calendar-buttons-area">
                    <div class="calendar-button">
                        <button class="btn-show-calendar" id="btn-calendar-initial-date" onclick="onClickShowCalendar(this.id)">
                            <img src="../icons/calendar-plus.svg" alt="">
                        </button>
                        <input type="text" id="calendar-initial-date" class="calendar-input" onclick="onClickShowCalendar(this.id)" placeholder="Start date" readonly>
                    </div>
                    <div class="calendar-button">
                        <button class="btn-show-calendar" id="btn-calendar-end-date" onclick="onClickShowCalendar(this.id)">
                            <img src="../icons/calendar-plus.svg" alt="" >
                        </button>
                        <input type="text" id="calendar-end-date" class="calendar-input" onclick="onClickShowCalendar(this.id)" placeholder="End date" readonly>
                    </div>
                </div>
                <label for="" class="task-name-label">Priority:</label>
                <div class="calendar-options-area">
                    <input type="text" class="priority-field" id="priority-input" placeholder="Low" onclick="onClickPriorityField()" readonly>
                    <div class="priority-list-area" id="priority-list">
                        <ul class="priority-options">
                            <li class="priority-option" id="list-option-urgent" onclick="onClickListOption(this.id)">Urgent</li>
                            <li class="priority-option" id="list-option-high" onclick="onClickListOption(this.id)">High</li>
                            <li class="priority-option" id="list-option-medium" onclick="onClickListOption(this.id)">Medium</li>
                            <li class="priority-option" id="list-option-low" onclick="onClickListOption(this.id)">Low</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="new-task-card-footer">
                <button class="new-task-card-cancel-button" onclick="onClickCancelNewTaskDialog()">Cancel</button>
                <button class="new-task-card-create-button" id="btn-create-task" onclick="onClickCreateTask(${id})">Create</button>
                <button class="new-task-card-create-button" id="btn-save-task" onclick="onClickSaveTask()">Save</button>
            </div>
            <dialog class="modal" id="calendar-modal"></dialog>
        </div>`
}

const onClickOpenNewTaskDialog = (id) => {
    let idTaskList = id.replace('new-card-', '')
    let taskListOptions = document.getElementById(`task-list-options-${idTaskList}`)
    taskListOptions.style.display = 'none'
    let newTaskCardContainer = document.getElementById('new-task-card-container')
    newTaskCardContainer.style.display = 'flex'
    newTaskCardContainer.innerHTML = newTaskCard(idTaskList)
    let newTaskNameInput = document.getElementById('new-task-name-input');
    newTaskNameInput.focus();
    let btnSaveTask = document.getElementById('btn-save-task')
    btnSaveTask.style.display = 'none'
    removeSnackBar();
    createSnackBarOn('new-task-card-container')
}

const onClickKeyEscNewTaskCardDialog = () => {
    let newTaskListContainer = document.getElementById('new-task-card-container');
    newTaskListContainer.addEventListener('keydown', (e) => {
        if(e.key === 'Escape'){
            onClickCancelNewTaskDialog();
        }
    });
}

const onClickCancelNewTaskDialog = () => {
    let newTaskCardContainer = document.getElementById('new-task-card-container')
    newTaskCardContainer.style.display = 'none'
    removeSnackBar();
    createSnackBarOn('main-container')
    newTaskCardContainer.innerHTML = ''
}
   
const onClickCreateTask = async(id) => {
    let taskObj = task(id)

    if (!isFieldsFilled(taskObj)) return;

    let response = await newTask(taskObj);

    if(response.statusCode === 200){
        showSnackbar("success", response.message);
        taskObj.id = response.obj.id;
        let taskListElement = document.getElementById(`task-list-cards-container-${taskObj.idTaskList}`);
        taskListElement.innerHTML += card(taskObj)
        onClickCancelNewTaskDialog();
    }else {
        showSnackbar("error", response.message);
    } 
}

const task = (id) => {
    const task = {
        name: '',
        description: '',
        priority: 'L',
        startDate: '',
        endDate: '',
        spendedTime: 0,
        archived: false,
        idTaskList: id
    }
    
    let taskName = document.getElementById('new-task-name-input').value
    let taskDescription = document.getElementById('new-task-description').value
    let taskInitialDate = document.getElementById('calendar-initial-date').value
    let taskEndDate = document.getElementById('calendar-end-date').value
    let taskPriority = document.getElementById('priority-input').value

    if (!verifyIfIsEmpty(taskPriority)) {
        task.priority = getPriorityLevel(taskPriority)
    }
    task.name = taskName
    task.description = taskDescription
    task.startDate = formatDateTaskList(taskInitialDate)
    task.endDate = formatDateTaskList(taskEndDate)

    return task
}

const getPriorityLevel = (priority) => {
    return priority.substring(0, priority.length - (priority.length - 1))
}

const formatDateTaskList = (fullDate) => {
    let dateParts = fullDate.split("/")
    let date = ""
    date = dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0]
    return date
}

const onClickPriorityField = () => {
    let priorityOptions = document.getElementById('priority-list')
    if (priorityOptions.style.display === '' || priorityOptions.style.display === 'none'){
      priorityOptions.style.display = 'flex'
    } else { 
      priorityOptions.style.display = 'none'
    }
}

const onClickListOption = (id) => {
    let listOptionValue = document.getElementById(id)
    let priorityField = document.getElementById('priority-input')
    let priorityOptions = document.getElementById('priority-list')

    let optionValue = listOptionValue.textContent
    priorityField.value = optionValue
    priorityOptions.style.display = 'none'
}

const setTaskFromCard = (task) => {
    cardTask = task;
}

const getTaskFromCard = () => {
    return cardTask
}

const onClickSaveTask = async() => {
    let taskObj = getTaskFromCard()
    let modifiedTask = task(0)
    modifiedTask.id = taskObj.id

    if (!isFieldsFilled(modifiedTask)) return;

    let response = await updateTask(modifiedTask)
    if (onTaskResponseVerifyErrors(response)) return    
}

const isFieldsFilled = (taskObj) => {
    let taskName = document.getElementById('new-task-name-input')
    let taskDescription = document.getElementById('new-task-description')
    let taskInitialDate = document.getElementById('calendar-initial-date')
    let taskEndDate = document.getElementById('calendar-end-date')

    if (verifyIfIsEmpty(taskObj.name)) {
        showSnackbar('warning', "Please fill the task name!")
        taskName.focus()
        return false
    }

    if (verifyIfIsEmpty(taskObj.description)) {
        showSnackbar('warning', "Please fill the task description!")
        taskDescription.focus()
        return false
    }

    if (verifyIfIsEmpty(taskObj.startDate)) {
        showSnackbar('warning', "Please fill the task start date!")
        taskInitialDate.focus()
        return false
    }

    if (verifyIfIsEmpty(taskObj.endDate)) {
        showSnackbar('warning', "Please fill the task end date!")
        taskEndDate.focus()
        return false
    }

    return true
}

const onTaskResponseVerifyErrors = (response) => {
    let isError = false;

    if (response.statusCode === 404) {
        showSnackbar('warning', response.message)
        return isError = true;
    } else if (response.statusCode === 500) {
        showSnackbar('error', response.message)
        return isError = true;
    } 

    showSnackbar('success', response.message)
    return isError;
}