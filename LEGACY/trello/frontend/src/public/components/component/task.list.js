var isOptionsOpened = false;

const taskList = (list) => {
    return `
        <li class="task-list" id="task-list-${list.id}">
            <div class="task-list-content">
                <div class="task-list-header">
                    <div class="task-list-title-area">
                        <h6 class="task-list-title" id="task-list-title-${list.id}">
                            ${list.name}
                        </h6>
                    </div>
                    <div class="task-list-options-area">
                        <button class="task-list-button-options" id="task-list-button-options-${list.id}" onclick="onClickButtonListOptions(this.id)">
                            <img src="../icons/three-dots-vertical.svg" alt="">
                        </button>
                        <div class="task-list-options" id="task-list-options-${list.id}">
                            <ol class="task-list-options-container">
                                <li class="task-list-option-item">
                                    <button class="task-list-option-button" id="new-card-${list.id}" onclick="onClickOpenNewTaskDialog(this.id)">NEW CARD</button>
                                </li>
                                <li class="task-list-option-item">
                                    <button class="task-list-option-button" id="delete-task-list-${list.id}" onclick="onClickDeleteTaskList(this.id)">DELETE LIST</button>
                                </li>
                                <li class="task-list-option-item">
                                    <button class="task-list-option-button" id="edit-card-${list.id}" onclick="onClickEditTaskList(this.id)">EDIT LIST</button>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div class="tasks-list-container">
                    <ol class="task-list-cards-container" id="task-list-cards-container-${list.id}" ondrop="drop(event)" ondragover="allowDrop(event)" onmousedown="onMouseClickSetFrom(this.id)">
                        
                    </ol>
                </div>
            </div>
        </li>
    `
}

const onClickButtonListOptions = (id) => {
    let idTaskList = id.replace('task-list-button-options-', '')
    let optionArea = document.getElementById('task-list-options-' + idTaskList)
    
    if(optionArea.style.display !== 'flex'){
        isOptionsOpened = true;
        optionArea.style.display = 'flex'
     }else{
        isOptionsOpened = false;
        optionArea.style.display = 'none'
     }
}

const onClickDeleteTaskList = async (id) => {
    let idTaskList = parseInt(id.replace('delete-task-list-', ''))
    let response = await deleteTaskList(idTaskList)

    if (response.statusCode === 500) {
        showSnackbar('error', response.message);
        return;
    } 

    let taskList = document.getElementById(`task-list-${idTaskList}`)
    taskList.remove()

    showSnackbar('success', response.message);
}

const onClickEditTaskList = (id) => {
    openDialogCreateTaskList(id)
    let taskListDialogTitle = document.getElementById('task-list-dialog-title')
    let createTaskList = document.getElementById('create-task-list')
    let saveTaskList = document.getElementById('save-task-list')
    taskListDialogTitle.textContent = "EDIT TASK LIST"
    createTaskList.style.display = 'none'
    saveTaskList.style.display = 'flex'
}