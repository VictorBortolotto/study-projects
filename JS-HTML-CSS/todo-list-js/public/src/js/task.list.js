var taskList = []
var pages = []
var statusToShow = false
var pageNumber = 0

const addTaskInTaskList = (task) => {
  if (taskList.length === 0) {
    taskList[0] = task
  } else {
    taskList[(taskList.length - 1) + 1] = task
  }  
  filterTasks()
  addTaskToLayout()
}

const addTaskToLayout = () => {
  let tasks = document.getElementById('tasks')
  tasks.innerHTML = ''
  pages[pageNumber].map((taskPage) => {
    if (taskPage.status === statusToShow) {
      tasks.innerHTML += taskCardComponent(taskPage)
    }
  }) 
}

const filterTasks = () => {
  let page = []
  let countDataPerPage = 0;
  let countPages = 0
  taskList.filter((task) => {
    if (task.status === statusToShow) {
      createPage(task, page, countDataPerPage, countPages) 
      if (countDataPerPage === 8) {
        countDataPerPage = 0 
        countPages += 1
        page = []
      } else {
        countDataPerPage += 1
      }
    }
  })
  
}

const removeTaskFromTaskList = () => {
  
}

const createPage = (task, page, countData, countPages) => {
  if (countData < 9) {
    page[countData] = task
  } 
  
  pages[countPages] = page
}

const onClickDone = () => {
  statusToShow = true
  filterTasks()
  addTaskToLayout()
}

const onClickPending = () => {
  statusToShow = false
  filterTasks()
  addTaskToLayout() 
}

const onClickButtonNext = () => {
  let newTaskCardArea = document.getElementById('main')
  newTaskCardArea.innerHTML += '<div id="snackbar"></div>'
  pageNumber += 1
  if (pageNumber > pages.length - 1) {
    pageNumber -= 1
  }

  addTaskToLayout()
}

const onClickButtonPrevious = () => {
  pageNumber -= 1
  if (pageNumber < 0) {
    pageNumber += 1 
  }
  
  addTaskToLayout()
}