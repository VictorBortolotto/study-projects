var taskListId = ''
const createTaskListComponent = () => {
    return `<div class="create-task-list-dialog" id="task-list-dialog">
        <div class="create-task-title">
            <h3 class="dialog-title" id="task-list-dialog-title">CREATE TASK LIST</h3>
        </div>
        <div class="create-task-list-filds">
            <label for="" class="dialog-label">Task List Name</label>
            <input type="text" class="dialog-input" id="task-name-input" placeholder="">
        </div>
        <div class="create-task-list-footer">
            <button class="dialog-button" id="cancel-task-list" onclick="onClickCancelButton()">CANCEL</button>
            <button class="dialog-button" id="create-task-list" onclick="onClickCreate()">CREATE</button>
            <button class="dialog-button" id="save-task-list" onclick="onClickSave()">SAVE</button>
        </div>
    </div>`
}

const openDialogCreateTaskList = (idTaskList) => {
    taskListId = idTaskList
    let taskListContainer = document.getElementById('task-list-container');
    taskListContainer.style.display = 'flex';
    taskListContainer.innerHTML += createTaskListComponent();
    let taskNameInput = document.getElementById('task-name-input');
    taskNameInput.focus();
    removeSnackBar();
    createSnackBarOn('task-list-container')
}

const onClickCancelButton = () => {
    let taskListContainer = document.getElementById('task-list-container');
    taskListContainer.style.display = 'none';
    removeSnackBar();
    createSnackBarOn('main-container')
    taskListContainer.innerHTML = '';
}

const onClickKeyEscNewTaskListDialog = () => {
    let taskListContainer = document.getElementById('task-list-container');
    taskListContainer.addEventListener('keydown', (e) => {
        if(e.key === 'Escape'){
            onClickCancelButton();
        }
    });
}

const onClickCreate = () => {
    let taskListName = document.getElementById('task-name-input').value

    if(verifyIfIsEmpty(taskListName)){
        showSnackbar('warning', "Please fill task list name!")
        return 
    }

    onCreateTaskList();
}

const onClickSave = async() => {
    let idTaskList = taskListId.replace('edit-card-', '')
    let taskListName = document.getElementById('task-name-input').value

    if(verifyIfIsEmpty(taskListName)){
        showSnackbar('warning', "Please fill task list name!")
        return 
    }

    let taskList = {
        id: idTaskList,
        taskListName: taskListName
    }

    let response = await updateTaskListName(taskList)
    
    if(response.statusCode === 200){
        let taskListNewTitle = document.getElementById(`task-list-title-${idTaskList}`)
        taskListNewTitle.textContent = taskListName
        onClickCancelButton();
    }else {
        showSnackbar("error", response.message);
    } 
}


const rebuildTaskList = (response) => {
    let taskListName = document.getElementById('task-name-input').value
    let newTaskList = {
        id: response.obj.id,
        name: taskListName
    }
    createNewTaskOnListView(newTaskList);

}