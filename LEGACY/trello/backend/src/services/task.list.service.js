const { sendResponse } = require("../common/response");
const { createConnection } = require("../db/dbconnection");
const { taskModel } = require("../model/Task");

const createTaskList = (taskList, res) => {
    let connection = createConnection();

    connection.query(`insert into task_list(name) values('${taskList.name}')`, (err, rows) => {
        if(err){
            connection.rollback();
            sendResponse(500, "Database Insert Error!", err,res);
        }else{
            insertTaskListInFrame(taskList.idFrame, rows.insertId, connection, res);
        }
    });
}

const updateTaskListName = (taskList,id,res) => {
    let connection = createConnection();

    connection.query(`update task_list set name = '${taskList.taskListName}' where id = ${id}`, (err, rows) => {
        if(err){
            connection.rollback();
            sendResponse(500, "Database Insert Error!", err,res);
        }else{
            res.statusCode = 200
            let obj = {
                frames: rows 
            }
            sendResponse(200, "Updated with success!",obj,res);
        }
    });
}

const insertTaskListInFrame = (idFrame, idTaskList, connection,res) => {
    connection.query(`insert into task_list_in_frame(id_frame,id_task_list) values(${idFrame}, ${idTaskList})`, (err, rows) => {
        if(err){
            connection.rollback();
            sendResponse(500, "Database Insert Error!", err,res);
        }else{
            let obj = {
                id: idTaskList
            }
            sendResponse(200, "Task list created with success!",obj,res);
        }
    });
}

const getTaskLists = (idFrame,res) => {
    let connection = createConnection();
    connection.query(`select tl.id, 
                             tl.name as task_list_name, 
                             t.id as task_id, 
                             t.name as task_name, 
                             t.description, 
                             t.start_date, 
                             t.end_date, 
                             t.spended_time,  
                             t.archived,
                             t.priority
                        from task_list tl, 
                             task_list_in_frame tlf, 
                             frame f, 
                             task_in_task_list titl, 
                             task t 
                       where tl.id = tlf.id_task_list  
                         and f.id = tlf.id_frame 
                         and tl.id = titl.id_task_list 
                         and t.id = titl.id_task 
                         and f.id = ${idFrame} 
                   union all 
                      select tl2.id, 
                             tl2.name, 
                             0, 
                             '', 
                             '', 
                             '', 
                             '', 
                             0, 
                             0,
                             ''
                        from task_list tl2, 
                             task_list_in_frame tlf2, 
                             frame f2 
                       where tl2.id = tlf2.id_task_list 
                         and f2.id = tlf2.id_frame 
                         and tl2.id not in (select titl2.id_task_list 
                                              from task_in_task_list titl2) 
                         and f2.id = ${idFrame}
                    order by id asc`, (err, rows) => {
        if(err) {
            connection.rollback();
            sendResponse(500, "Database Insert Error!", err,res);
        }else{
            res.statusCode = 200
            let obj = {
                taskList: rows 
            }

            let taskListObj = createTaskListObj(obj.taskList);
            let tasks = createTasksList(taskListObj, obj.taskList)

            for(let i = 0; i < tasks.length; i++) {
                taskListObj[i].tasks.push(tasks[i])
            }
            
            sendResponse(200, "",taskListObj,res);
        }
    });
}

const createTasksList = (taskListObj, objTaskList) => {
    let tasks = []
    let tasksIndex = 0

    for (let i = 0; i < taskListObj.length; i++) {
        let taskList = []
        tasksIndex = 0
        objTaskList.filter((data, index) => {
            if (taskListObj[i].id === data.id) {
                let task = taskModel(data);
                if (taskList.length === 0) {
                    taskList[tasksIndex] = task
                } else {
                    taskList[tasksIndex] = task
                }
                tasksIndex += 1
            }  
        })
        tasks[i] = taskList
    }

    return tasks;
}

const createTaskListObj = (tasks) => {
    let taskLists = [];
    let lastId = 0;
    let index = 0;
    for (let i = 0; i < tasks.length; i++) {
        if (lastId === 0 || tasks[i].id !== lastId) {
            let taskList = {
                name: tasks[i].task_list_name,
                id: tasks[i].id,
                tasks: []
            }

            if (taskLists.length === 0) {
                taskLists[index] = taskList;
            } else {
                taskLists[index] = taskList;
            }
            index += 1;
            lastId = tasks[i].id;
        }
    }
    return taskLists;
}

const deleteTaskList = (idTaskList, res) => {
    let connection = createConnection();
    connection.beginTransaction(() => {
        connection.query(`select t.id
                            from task_list tl,
                                 task_in_task_list ttl,
                                 task t 
                           where t.id = ttl.id_task
                             and tl.id = ttl.id_task_list
                             and tl.id = ${idTaskList}`, (err, rows) => {
            if(err){
                sendResponse(500, "Ooops something goes wrong to delete the task list! Try again later.", err,res);
            }

            if(rows.length > 0){
                let idTasks = getIdTasksString(rows)
                deleteTaskAndTaskListFromTaskInTaskLists(idTasks, idTaskList, connection, res);
                deleteTaskAndTaskListFromTaskListInFrame(idTaskList, connection, res);
                deleteAlltaskInTaskList(idTasks, connection, res)
                taskListDelete(idTaskList, connection, res)
            } else {
                deleteTaskAndTaskListFromTaskListInFrame(idTaskList, connection, res);
                taskListDelete(idTaskList, connection, res);
            }
        });
    })
    
}

const taskListDelete = (idTaskList, connection, res) => {
    connection.query(`delete from task_list where id = ${idTaskList}`, (err, rows) => {
        if(err){
            console.log(err);
            connection.rollback();
            sendResponse(500, "Error to delete task list.", err,res);
        }
        connection.commit();
        sendResponse(200, "Task list deleted with success!",{},res);
    });
}

const deleteAlltaskInTaskList = (idTasks, connection, res) => {
    connection.query(`delete from task where id in (${idTasks})`, (err, rows) => {
        if(err){
            console.log(err);
            connection.rollback();
            sendResponse(500, "Error to delete the task!", "",res);
        }
    })
}

const deleteTaskAndTaskListFromTaskInTaskLists = (idTasks, idTaskList, connection, res) => {
    connection.query(`delete from task_in_task_list where id_task in(${idTasks}) and id_task_list = ${idTaskList}`, (err, rows) => {
        if(err){
            console.log(err);
            connection.rollback();
            sendResponse(500, "Error to delete the task list!", "",res);
        }
    });
}

const deleteTaskAndTaskListFromTaskListInFrame = (idTaskList, connection, res) => {
    connection.query(`delete from task_list_in_frame where id_task_list = ${idTaskList}`, (err, rows) => {
        if(err){
            console.log(err);
            connection.rollback();
            sendResponse(500, "Error to delete the task list!", "",res);
        }
    });
}

const getIdTasksString = (tasks) => {
    let ids = ""
    for (let i = 0; i < tasks.length; i++) {
        ids += tasks[i].id + ","
    }
    ids = ids.substring(0, ids.length - 1)
    return ids
}

module.exports = {
    createTaskList,
    getTaskLists,
    updateTaskListName,
    deleteTaskList
}