const { generateJwtToken, validate } = require("../auth/auth");
const { generateUserReference } = require("../common/reference.creator");
const { sendResponse } = require("../common/response");
const { createConnection } = require("../db/dbconnection");
const { pagination } = require("../db/pagination");

const createUser = (user, res) => {
    let connection = createConnection();

    connection.connect((err) => {
        if (err) {
            sendResponse(500, "Ooops something goes wrong! Try again later.", err,res);
        }

        verifyIfUserEmailAlreadyExists(user, connection, res);
    });
}

const verifyIfUserEmailAlreadyExists = (user, connection, res) => {
    connection.query(`select * from user where email like '%${user.email}%'`, (err, rows) => {
        if(err){
            sendResponse(500, "Ooops something goes wrong! Try again later.", err,res);
        }
        
        if(rows.length >= 1){
            sendResponse(400, "Duplicated Data", "User Already Exists!",res);
        }else{
            insertUser(user, connection, res);
        }
    })
}

const insertUser = (user, connection, res) => {
    let reference = generateUserReference();
    connection.query(`insert into user(email,password,reference) values('${user.email}','${user.password}','${reference}')`, (err, rows) => {
        if(err){
            sendResponse(500, "Ooops something goes wrong! Try again later.", err,res);
        }else{
            let object = {
                user: {
                    id: 0,
                    email: '',
                    reference: ''
                },
                token: ''
            }

            object.user.id = rows.insertId
            object.user.email = user.email
            object.user.reference = reference
            object.token = generateJwtToken(user)
            sendResponse(200, "Created with success!",object,res);
        }
    });
}

const auth = (user, res) => {
    let connection = createConnection();

    connection.query(`select id, email, password, reference from user where email =  '${user.email}'`, (err, rows) => {
        if(err) {
            sendResponse(500, "Ooops something goes wrong! Try again later.", err,res);
        }else {
            if(rows.length === 0){
                sendResponse(404, "User Not Found", "User Not Found!",res);
            }else{
                if(!validate(user.password, rows[0].password)){
                    sendResponse(401, "Wrong email or password!", err,res);
                }else {
                    generateToken(rows[0], res, connection)
                }
            }
        }
    })
}

const generateToken = (user, res, connection) => {
    connection.query(`select id, nickname, description, photo from menager where id_user = ${user.id}`, (err, rows) => {
        if(err) {
            sendResponse(500, "Ooops something goes wrong! Try again later.", err,res);
        }else {
            let object = {
                id: user.id,
                reference: user.reference,
                token: '',
                menager: null
            }

            if(rows.length === 0){
                object.token = generateJwtToken(user);
                sendResponse(200, "",object,res);
            }else{
                object.menager = rows[0]
                object.token = generateJwtToken(user);
                sendResponse(200, "",object,res);
            }
        }
    })
}

const getUser = (param,idUser, res) => {
    let connection = createConnection();
    connection.query(`select email, nickname, photo from user u, menager m where u.id = m.id_user and (u.reference in(${param}) or u.email in(${param}) or m.nickname in(${param})) and u.id <> ${idUser}`, (err, rows) => {
        if(err) {
            sendResponse(500, "Ooops something goes wrong! Try again later.", err,res);
        }else {
            if(rows.length === 0){
                sendResponse(404, "User Not Found", "User Not Found!",res);
            }else{
                res.statusCode = 200
                let users = pagination(rows, 6);
                let obj = {
                    users: users
                }
                sendResponse(200, "Retrivied with success!",obj,res);
            }
        }
    })
}

module.exports = {
    createUser,
    auth,
    getUser
}