const routes = {
    createUser: "/newUser",
    getUser: "/user/find/:id/:param",
    createMenager: "/newMenager",
    createFrame: "/newFrame",
    deleteFrame: "/delete/frame/:id",
    updateFrame: "/frame/:idMenager",
    updateFrameName: "/frame/name/:idMenager",
    updateFrameDescription: "/frame/description/:idMenager",
    updateFrameToArchived: "/frame/archived/:idMenager",
    getFrames: "/frames/:id",
    getArchivedFrames: "/frames/archived/:id",
    createTaskList: "/newTaskList",
    updateTaskListName: '/newTaskListName/:id',
    deleteTaskList: '/delete/taskList/:id',
    createTask: "/newTask",
    deleteTask: "/delete/task/:id",
    updateTask: "/update/task/:id",
    updateTaskToNewTaskList: "/update/task/new/taskList/:id",
    archiveTask: "/archive/task/:id",
    getTask: "/task/:id",
    getTaskList: "/frame/taskList/:id",
    updateMenagerNickname: "/menager/nickname",
    updateMenagerDescription: "/menager/description",
    updateMenagerPhoto: "/menager/photo",
    updateMenager: "/menager",
    login: '/auth',
    sendEmailFriendRequest: '/send/email/friendRequest'
}

module.exports = routes