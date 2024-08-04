const taskHeaders = new Headers({
  'Content-Type': 'application/json'
})

const newTask = async(task) => {
  const request = {
    method: methods.post,
    headers: taskHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(task)
  }

  let response = await fetch(routes.currentRoute + routes.createTask, request).then(response => response.json());
  return response;
}

const getTask = async(id) => {
  const request = {
    method: methods.get,
    headers: header,
    mode: 'cors',
    cache: 'default'
  }
  
  let response = await fetch(routes.currentRoute + routes.getTask + `${id}`, request).then(response => response.json());
  return response
} 

const updateTask = async(task) => {
  const request = {
    method: methods.put,
    headers: taskHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(task)
  }

  let response = await fetch(routes.currentRoute + routes.updateTask + `/${task.id}`, request).then(response => response.json());
  return response;
}

const updateTaskToNewTaskList = async(obj) => {
  const request = {
    method: methods.patch,
    headers: taskHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(obj)
  }

  let response = await fetch(routes.currentRoute + routes.updateTaskToNewTaskList + `/${obj.idTask}`, request).then(response => response.json());
  return response;
}

const archiveTask = async(task) => {
  const request = {
    method: methods.patch,
    headers: taskHeaders,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(task)
  }

  let response = await fetch(routes.currentRoute + routes.archiveTask + `/${task.id}`, request).then(response => response.json());
  return response;
}

const deleteTask = async(idTask) => {
  const request = {
    method: methods.delete,
    headers: taskHeaders,
    mode: 'cors',
    cache: 'default'
  }

  let response = await fetch(routes.currentRoute + routes.deleteTask + `/${idTask}`, request).then(response => response.json());
  return response;
}
