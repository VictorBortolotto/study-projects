const { sendResponse } = require("../common/response");
const { createConnection } = require("../db/dbconnection")
const { pagination } = require('../db/pagination');

const getFrames = (idMenager,res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`select id, name, description, archived from frame where id_menager = ${idMenager} and archived = false`, (err, rows) => {
            if(err){
                res.statusCode = 500
                sendResponse(500, "Database Select Error!", err,res);
            }else{
                res.statusCode = 200
                let frames = pagination(rows, 12);
                let obj = {
                    frames: frames
                }
                sendResponse(200, "Retrivied with success!",obj,res);
            }
        });
    });
}

const getArchivedFrames = (idMenager,res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`select id, name, description, archived from frame where id_menager = ${idMenager} and archived = true`, (err, rows) => {
            if(err){
                res.statusCode = 500
                sendResponse(500, "Database Select Error!", err,res);
            }else{
                res.statusCode = 200
                let frames = pagination(rows, 12);
                let obj = {
                    frames: frames
                }
                sendResponse(200, "Retrivied with success!",obj,res);
            }
        });
    });
}

const updateFrame = (idMenager,frame,res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update frame set name = '${frame.name}', description = '${frame.description}' where id_menager = ${idMenager} and id = ${frame.id}`, (err, rows) => {
            if(err){
                res.statusCode = 500
                sendResponse(500, "Database Update Error!", err,res);
            }else{
                res.statusCode = 200
                let obj = {
                    frames: rows 
                }
                sendResponse(200, "Updated with success!",obj,res);
            }
        });
    });
}

const updateFrameName = (idMenager,frame,res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update frame set name = '${frame.name}' where id_menager = ${idMenager} and id = ${frame.id}`, (err, rows) => {
            if(err){
                res.statusCode = 500
                sendResponse(500, "Database Update Error!", err,res);
            }else{
                res.statusCode = 200
                let obj = {
                    frames: rows 
                }
                sendResponse(200, "Updated with success!",obj,res);
            }
        });
    });
}

const updateFrameDescription = (idMenager,frame,res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update frame set description = '${frame.description}' where id_menager = ${idMenager} and id = ${frame.id}`, (err, rows) => {
            if(err){
                res.statusCode = 500
                sendResponse(500, "Database Update Error!", err,res);
            }else{
                res.statusCode = 200
                let obj = {
                    frames: rows 
                }
                sendResponse(200, "Updated with success!",obj,res);
            }
        });
    });
}

const updateArchiveFrameStatus = (idMenager,frame,res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update frame set archived = '${frame.archived}' where id_menager = ${idMenager} and id = ${frame.id}`, (err, rows) => {
            if(err){
                res.statusCode = 500
                sendResponse(500, "Database Update Error!", err,res);
            }else{
                res.statusCode = 200
                let obj = {
                    frames: rows 
                }
                sendResponse(200, "Updated with success!",obj,res);
            }
        });
    });
}

const createFrame = (frame, res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`insert into frame(name,description,id_menager) values('${frame.name}','${frame.description}',${frame.idMenager})`, (err, rows) => {
            if(err){
                sendResponse(500, "Database Insert Error!", err,res);
            }else{
                let obj = {
                    id: rows.insertId
                }
                sendResponse(200, "Created with success!",obj,res);
            }
        });
    });
}

const deleteFrame = (idFrame, res) => {
    let connection = createConnection();
   
    connection.beginTransaction(() => {
        connection.query(`select id_task_list from task_list_in_frame where id_frame = ${idFrame}`, (err, rows) => {
            if (err) {
                sendResponse(500, "Error to delete the frame!", err,res);
            }

            if (rows.length > 0) {
                let idsTaskLists = getTaskListsIdsString(rows);
                connection.query(`select id_task from task_in_task_list where id_task_list in (${idsTaskLists})`, (err, taskInTaskListRows) => {
                    if (err) {
                        sendResponse(500, "Error to delete the frame!", err,res);
                    }
                    
                    if (taskInTaskListRows.length > 0) {
                        let idsTasks = getTaskIdsString(taskInTaskListRows)
                        deleteTaskListInFrame(idsTaskLists, connection, res)
                        deleteTaskInTaskList(idsTasks, connection, res)
                        deleteTaskList(idsTaskLists, connection, res)
                        deleteTask(idsTasks, connection, res)
                        deleteFromFrame(idFrame, connection, res)
                    }
                })
            } else {
                deleteFromFrame(idFrame, connection, res)
            }
        })
    })
}

const deleteFromFrame = (idFrame, connection, res) => {
    connection.query(`delete from frame where id = ${idFrame}`, (err, rows) => {
        if (err) {
            connection.rollback()
            sendResponse(500, "Error to delete the frame!", err,res);
        }

        connection.commit()
        sendResponse(200, "Deleted with success!",{},res);
    })
}

const deleteTaskListInFrame = (idsTaskLists, connection, res) => {
    connection.query(`delete from task_list_in_frame where id_task_list in(${idsTaskLists})`, (err, rows) => {
        if (err) {
            connection.rollback()
            sendResponse(500, "Error to delete the frame!", err,res);
        }
    })
}

const deleteTaskList = (idsTaskLists, connection, res) => {
    connection.query(`delete from task_list where id in(${idsTaskLists})`, (err, rows) => {
        if (err) {
            connection.rollback()
            sendResponse(500, "Error to delete the frame!", err,res);
        }
    })
}

const deleteTask = (idsTasks, connection, res) => {
    connection.query(`delete from task where id in(${idsTasks})`, (err, rows) => {
        if (err) {
            connection.rollback()
            sendResponse(500, "Error to delete the frame!", err,res);
        }
    })
}

const deleteTaskInTaskList = (idsTasks, connection, res) => {
    connection.query(`delete from task_in_task_list where id_task in(${idsTasks})`, (err, rows) => {
        if (err) {
            connection.rollback()
            sendResponse(500, "Error to delete the frame!", err,res);
        }
    })
}

const getTaskListsIdsString = (listsIds) => {
    let ids = ""
    for(let i = 0; i < listsIds.length; i++) {
        ids += listsIds[i].id_task_list + ","
    }
    ids = ids.substring(0, ids.length - 1)
    return ids
}

const getTaskIdsString = (listsIds) => {
    let ids = ""
    for(let i = 0; i < listsIds.length; i++) {
        ids += listsIds[i].id_task + ","
    }
    ids = ids.substring(0, ids.length - 1)
    return ids
}

module.exports = {
    createFrame,
    getFrames,
    updateFrame,
    updateFrameName,
    updateFrameDescription,
    getArchivedFrames,
    updateArchiveFrameStatus,
    deleteFrame
}