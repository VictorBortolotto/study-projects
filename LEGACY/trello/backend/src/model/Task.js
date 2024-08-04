const taskModel = (data) => {
  let task = {
      id: data.task_id,
      name: data.task_name,
      description: data.description,
      startDate: formatDateTask(data.start_date),
      endDate: formatDateTask(data.end_date),
      spendedTime: data.spended_time,
      archived: data.archived === 0 ? false : true,
      priority: data.priority,
      idTaskList: data.id
  }
  return task;
}

const formatDateTask = (fullDate = '') => {
  let dateParts = fullDate.split("-")
  let date = ""
  date = dateParts[0] + "/" + dateParts[1] + "/" + dateParts[2]
  return date
}

module.exports = {
  taskModel
}