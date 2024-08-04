const { sendResponse } = require("../common/response");
const { createConnection } = require("../db/dbconnection")

const createMenager = (menager, res) => {
    let connection = createConnection();
    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`insert into menager(nickname,photo,description,id_user) values('${menager.nickname}', '${menager.photo}','${menager.description}',${menager.id} )`, (err,rows) => {
            if(err){
                sendResponse(500, "Database Insert Error!", err,res);
            }else{
                let object = {
                    id: rows.insertId
                }
                sendResponse(200, "Created with success!",object,res);
            }
        })
    })
}

const updateMenager = (menager, idMenager, res) => {
    let connection = createConnection();
    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update menager set nickname = '${menager.nickname}', description = '${menager.description}',  photo = '${menager.photo}' where id = ${idMenager}`, (err, rows) => {
            if(err){
                sendResponse(500, "Database Update Error!", err,res);
            }else if(rows.length == 0){
                sendResponse(404, "Not Found!", "Menager Not Found!",res);
            }else{
                let object = {
                    id: rows.insertId
                }
                sendResponse(200, "Updated with success!",object,res);
            }
        })
    })
}

const updateMenagerNickname = (nickname, idMenager, res) => {
    let connection = createConnection();
    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update menager set nickname = '${nickname}' where id = ${idMenager}`, (err, rows) => {
            if(err){
                sendResponse(500, "Database Update Error!", err,res);
            }else if(rows.length == 0){
                sendResponse(404, "Not Found!", "Menager Not Found!",res);
            }else{
                let object = {
                    id: rows.insertId
                }
                sendResponse(200, "Updated with success!",object,res);
            }
        })
    })
}

const updateMenagerPhoto = (photo, idMenager, res) => {
    let connection = createConnection();
    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update menager set photo = '${photo}' where id = ${idMenager}`, (err,rows) => {
            if(err){
                sendResponse(500, "Database Update Error!", err,res);
            }else if(rows.length == 0){
                sendResponse(404, "Not Found!", "Menager Not Found!",res);
            }else{
                let object = {
                    id: rows.insertId
                }
                sendResponse(200, "Updated with success!",object,res);
            }
        })
    })
}

const updateMenagerDescription = (description, idMenager, res) => {
    let connection = createConnection();
    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Database Connection Error!", err,res);
        }

        connection.query(`update menager set description = '${description}' where id = ${idMenager}`, (err, rows) => {
            if(err){
                sendResponse(500, "Database Update Error!", err,res);
            }else if(rows.length == 0){
                sendResponse(404, "Not Found!", "Menager Not Found!",res);
            }else{
                let object = {
                    id: rows.insertId
                }
                sendResponse(200, "Updated with success!",object,res);
            }
        })
    })
}

module.exports = {
    createMenager,
    updateMenagerNickname,
    updateMenagerPhoto,
    updateMenagerDescription,
    updateMenager
}