const express = require("express");
const { createUser, auth, getUser } = require("./src/services/user.service");
const { createMenager, updateMenagerPhoto, updateMenagerNickname, updateMenagerDescription } = require("./src/services/menager.service");
const routes = require("./src/routes/routes");
const cors = require('cors')
const { createFrame, getFrames, updateFrame, updateFrameName, updateFrameDescription, updateArchiveFrameStatus, getArchivedFrames, deleteFrame } = require("./src/services/frame.service");
const { createTask, getTask, updateTask, archiveTask, updateTaskLocationOnTaskLists, deleteTask } = require("./src/services/task.service");
const { toHash } = require("./src/auth/auth");
const { sendEmail } = require("./src/email/send.email");
const { emailSendRequestTemplate } = require("./src/email/send.friend.request.template");
const { createTaskList, getTaskLists, updateTaskListName, deleteTaskList } = require("./src/services/task.list.service")

const app = express();
const port = 8080;

app.use(
    express.json(),
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']
    })
);

app.post(routes.createUser, (req, res) => {
    req.body.password = toHash(req.body.password);
    createUser(req.body, res);
});

app.get(routes.getUser, (req, res) => {
    let param = req.params.param
    let idUser = req.params.id
    getUser(param,idUser, res);
});

app.post(routes.login, (req,res) => {
    auth(req.body,res);
})

app.post(routes.createMenager, (req,res) => {
    createMenager(req.body,res)
})

app.post(routes.createFrame, (req,res) => {
    createFrame(req.body,res)
})

app.delete(routes.deleteFrame, (req,res) => {
    let id = req.params.id;
    deleteFrame(id,res)
})

app.put(routes.updateFrame, (req,res) => {    
    updateFrame(req.params.idMenager,req.body,res)
})

app.patch(routes.updateFrameName, (req,res) => {    
    updateFrameName(req.params.idMenager,req.body,res)
})

app.patch(routes.updateFrameDescription, (req,res) => {    
    updateFrameDescription(req.params.idMenager,req.body,res)
})

app.patch(routes.updateFrameToArchived, (req,res) => {    
    updateArchiveFrameStatus(req.params.idMenager,req.body,res)
})

app.get(routes.getFrames, (req,res) => {
    let idMenager = req.params.id
    getFrames(idMenager,res)
})

app.get(routes.getArchivedFrames, (req,res) => {
    let idMenager = req.params.id
    getArchivedFrames(idMenager,res)
})

app.post(routes.createTaskList, (req,res) => {
    createTaskList(req.body,res)
})

app.patch(routes.updateTaskListName, (req,res) => {
    let id = req.params.id;
    updateTaskListName(req.body,id,res)
})

app.delete(routes.deleteTaskList, (req,res) => {
    let id = req.params.id;
    deleteTaskList(id,res)
})

app.post(routes.createTask, (req,res) => {
    createTask(req.body,res)
})

app.delete(routes.deleteTask, (req,res) => {
    let id = req.params.id;
    deleteTask(id,res)
})

app.put(routes.updateTask, (req,res) => {
    let id = req.params.id;
    updateTask(req.body,id,res)
})

app.patch(routes.updateTaskToNewTaskList, (req,res) => {
    updateTaskLocationOnTaskLists(req.body,res)
})

app.patch(routes.archiveTask, (req,res) => {
    let id = req.params.id;
    archiveTask(req.body,id,res)
})

app.get(routes.getTask, (req,res) => {
    let idTask = req.params.id
    getTask(idTask,res)
})

app.put(routes.updateMenager, (req,res) => {
    updateMenagerNickname(req.body.nickname,req.body.id,res)
})

app.patch(routes.updateMenagerNickname, (req,res) => {
    updateMenagerNickname(req.body.nickname,req.body.id,res)
})

app.patch(routes.updateMenagerPhoto, (req,res) => {
    updateMenagerPhoto(req.body.photo,req.body.id,res)
})

app.patch(routes.updateMenagerDescription, (req,res) => {
    updateMenagerDescription(req.body.description,req.body.id,res)
})

app.post(routes.sendEmailFriendRequest, (req,res) => {
    let emailOptions = req.body;
    emailOptions.onError = "Error to send friend request, try again later!";
    emailOptions.onSuccess = "Friend request sent with success!";
    sendEmail(emailOptions, emailSendRequestTemplate(emailOptions.userNameFrom,emailOptions.userNameTo),res)
})

app.get(routes.getTaskList, (req,res) => {
    let id = req.params.id;
    getTaskLists(id,res);
})

app.listen(port, () => {
    console.log("App running on port " + port + "...");
});
