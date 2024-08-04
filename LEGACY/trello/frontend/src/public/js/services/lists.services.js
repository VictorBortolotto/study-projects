const header = new Headers({
  'Content-Type': 'application/json'
})

const createTaskList = async(obj) => {
  const request = {
    method: methods.post,
    headers: header,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(obj)
  }

  let response = await fetch(routes.currentRoute + routes.createTaskList, request).then(response => response.json());
  return response;
}

const updateTaskListName = async(obj) => {
  const request = {
    method: methods.patch,
    headers: header,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(obj)
  }

  let response = await fetch(routes.currentRoute + routes.updateTaskListName + `/${obj.id}`, request).then(response => response.json());
  return response;
}

const getTaskList = async(id) => {
  const request = {
    method: methods.get,
    headers: header,
    mode: 'cors',
    cache: 'default'
  }
  
  let response = await fetch(routes.currentRoute + routes.getTaskList + `${id}`, request).then(response => response.json());
  return response
} 


const deleteTaskList = async(idTaskList) => {
  const request = {
    method: methods.delete,
    headers: header,
    mode: 'cors',
    cache: 'default'
  }

  let response = await fetch(routes.currentRoute + routes.deleteTaskList + `/${idTaskList}`, request).then(response => response.json());
  return response;
}
