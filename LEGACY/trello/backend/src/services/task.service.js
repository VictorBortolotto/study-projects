const { sendResponse } = require("../common/response");
const { createConnection } = require("../db/dbconnection");
const { taskModel } = require("../model/Task");

const createTask = (task,res) => {
    let connection = createConnection();
    connection.beginTransaction(() => {
        connection.query(`insert into task(name,description,priority,start_date,end_date,spended_time,archived) values('${task.name}', '${task.description}','${task.priority}','${task.startDate}','${task.endDate}',${task.spendedTime},${task.archived})`, (err,rows) => {
            if(err){
                sendResponse(500, "Database Insert Error!", err,res);
            }else{
                insertIntoTaskInTaskList(task.idTaskList, rows.insertId, connection,res);
            }
        })
    })
}

const insertIntoTaskInTaskList = (idTaskList, idTask, connection, res) => {
    connection.query(`insert into task_in_task_list(id_task,id_task_list) values(${idTask}, ${idTaskList})`, (err, rows) => {
        if(err){
            connection.rollback();
            sendResponse(500, "Database Insert Error!", err,res);
        }else{
            let object = {
                id: idTask
            }
            connection.commit()
            sendResponse(200, "Created with success!",object,res);
        }
    });
}

const updateTaskLocationOnTaskLists = (obj, res) => {
    let connection = createConnection();
    connection.beginTransaction(() => {
        deleteTaskAndTaskListFromTaskInTaskLists(obj.idTask, obj.idTaskListFrom, connection, res, insertIntoTaskInTaskList(obj.idTaskListTo, obj.idTask, connection, res))
    })
        
}

const deleteTask = (idTask, res) => {
    let connection = createConnection();
    connection.beginTransaction(() => {
        connection.query(`select tl.id
                            from task_list tl,
                                 task_in_task_list ttl,
                                 task t 
                           where t.id = ttl.id_task
                             and tl.id = ttl.id_task_list
                             and t.id = ${idTask}`, (err, rows) => {
            if (err) {
                sendResponse(500, "Error to delete the task!", "",res);
            }

            if (rows.length > 0){
                deleteTaskAndTaskListFromTaskInTaskLists(idTask, rows[0].id, connection, res);
                taskDelete(idTask, connection, res)
            }
        })
    })    
}

const taskDelete = (idTask, connection, res) => {
    connection.query(`delete from task where id = ${idTask}`, (err, rows) => {
        if(err){
            connection.rollback();
            sendResponse(500, "Error to delete the task!", "",res);
        }else {
            connection.commit()
            sendResponse(200,"Task deleted with success!",{}, res);
        }
    })
}

const deleteTaskAndTaskListFromTaskInTaskLists = (idTask, idTaskList, connection, res) => {
    connection.query(`delete from task_in_task_list where id_task = ${idTask} and id_task_list = ${idTaskList}`, (err, rows) => {
        if(err){
            connection.rollback();
            sendResponse(500, "Error to delete task!", "",res);
        }
    });
}

const getTask = (idTask, res) => {
    let connection = createConnection();
    connection.query(`select id as task_id, name as task_name, description, DATE_FORMAT(start_date, '%d-%m-%Y') as start_date, DATE_FORMAT(end_date, '%d-%m-%Y') as end_date, spended_time, archived, priority from task where id = ${idTask}`, (err, rows) => {
        if(err){
            sendResponse(500, "Database Select Error!", err,res);
        }else{

            if (rows.length === 0) sendResponse(404, "Not Found!", "Task Not Found!",res);

            let object = {
                task: taskModel(rows[0])
            }

            sendResponse(200,"",object,res);
        }
    });
}

const archiveTask = (archive, id, res) => {
    let connection = createConnection();
    connection.beginTransaction(() => {
        connection.query(`update task set archived = ${archive} where id = ${id}`, (err, rows) => {
            if(err){
                connection.rollback();
                sendResponse(500, "Database Select Error!", err,res);
            }else{

                if (rows.length === 0) sendResponse(404, "Not Found!", "Task Not Found!",res);
                connection.commit();
                sendResponse(200,"Success","Task updated with success!",res);
            }
        });
    });
}

const updateTask = (task, id, res) => {
    let connection = createConnection();
    connection.query(`update task 
                         set name = '${task.name}',
                             description = '${task.description}',
                             priority = '${task.priority}',
                             start_date = '${task.startDate}',
                             end_date = '${task.endDate}',
                             spended_time = ${task.spendedTime},
                             archived = ${task.archived} 
                       where id = ${id}`, (err, rows) => {
        if(err){
            connection.rollback();
            sendResponse(500, "Database Select Error!", err,res);
        }else{

            if (rows.length === 0) sendResponse(404, "Task Not Found!", "Task Not Found!", res);

            sendResponse(200,"Task updated with success!",{}, res);
        }
    });
}

module.exports = {
    createTask,
    getTask,
    archiveTask,
    updateTask,
    updateTaskLocationOnTaskLists,
    deleteTask
}