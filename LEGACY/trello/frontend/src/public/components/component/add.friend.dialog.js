var actualPage = 0;
var usersList = [];

const createAddFriendDialogComponent = () => {
    return `
        <div class="add-friend-dialog">
            <div class="add-friend-dialog-header">
                <div class="dialog-id-nickname">
                    <div class="dialog-user-id">
                        <label for="" class="dialog-user-label">ID</label>
                        <input type="text" class="dialog-user-input" id="dialog-user-reference" readonly="true">
                    </div>
                    <div class="dialog-user-nickname">
                        <label for="" class="dialog-user-label">Name</label>
                        <input type="text" class="dialog-user-input" id="dialog-user-name" readonly="true">
                    </div>
                </div>
                <div class="dialog-email-area">
                    <div class="dialog-email">
                        <label for="" class="dialog-user-label">Email</label>
                        <input type="text" class="dialog-user-input" id="dialog-user-email" readonly="true">
                    </div>
                </div>
                <div class="dialog-search-area">
                    <div class="dialog-search">
                        <input type="text" class="dialog-user-input" id="search-user-input" placeholder="Search a friend by: Email, Nickname or ID.">
                        <button class="dialog-search-button" onclick="onClickSearchUsers()">
                            <img src="../icons/search-white.svg" class="dialog-button-search-icon" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div class="add-friend-dialog-body">
                <div class="list-friend-area">
                    <ol class="users-list" id="list-of-users">
                        
                    </ol>
                </div>
                <div class="dialog-list-pagination">
                    <div class="button-area">
                        <button class="dialog-user-pagination-button" onclick="onClickPrevious()">
                            <img src="../icons/caret-left.svg" class="dialog-button-pagination-icon" alt="">
                        </button>
                        <button class="dialog-user-pagination-button" onclick="onClickNext()">
                            <img src="../icons/caret-right.svg" class="dialog-button-pagination-icon" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div class="add-friend-dialog-footer">
                <button class="dialog-user-close-button" onclick="onClickCloseDialog()">
                    CANCEL
                </button>
            </div>
        </div>` 
}

const dialogListItem = (user, index) => {
    return `<li class="user-list-item">
                <div class="user-list-item-photo-area">
                    <img src="${user.photo}" class="dialog-user-photo-list-item" alt="">
                </div>
                <div class="user-list-item-name-area">
                    <h2 class="dialog-user-name-list-item">
                        ${user.nickname}
                    </h2>
                </div>
                <div class="user-list-item-button-area">
                    <button class="user-list-send-button" id="user-list-send-button-${index}" onclick="onClickSend(this.id)">
                        SEND
                    </button>
                </div>
            </li>`
}

const openDialogAddFriend = () => {
    let addFriendDialogContainer = document.getElementById('add-friend-dialog-container')
    addFriendDialogContainer.innerHTML += createAddFriendDialogComponent();
    addFriendDialogContainer.style.display = 'flex'
    fillFieldsOnOpenDialog()
    createSnackBarOn('add-friend-dialog-container')
}

const fillFieldsOnOpenDialog = () => {
    let dialogUserReference = document.getElementById('dialog-user-reference')
    let dialogUserName = document.getElementById('dialog-user-name')
    let dialogUserEmail = document.getElementById('dialog-user-email')
    dialogUserName.value = JSON.parse(sessionStorage.getItem('menager')).nickname
    dialogUserEmail.value = getCookie("email").replace('%40', '@')
    dialogUserReference.value = getCookie("user_reference")
}

const onClickSearchUsers = async() => {
    let idUser = getCookie("id")
    let searchUserInput = document.getElementById('search-user-input')
    let text = searchUserInput.value

    if(text === null || text === undefined || text === ''){
        showSnackbar('warning', 'Please fill all the fields!');
        return;
    }

    text = buildSearchText(text);

    let response = await getUser(idUser, text)
    if(response.statusCode === 200){
        fillUserList(response.obj.users[0])
        usersList = response.obj.users
    }
}

const buildSearchText = (text) => {
    let listOfParams = []
    let params = ""
    if(text.includes(',')){
        listOfParams = text.split(',');
        listOfParams.forEach((param) => {
            params += "'" + param + "',"
        })
        params = params.substring(0, params.length - 1)
    }else{
        params = "'" + text + "'";
    }

    return params
}

const fillUserList = (userList) => {
    let list = document.getElementById('list-of-users');
    let html = ''
    cleanUserList();
    userList.forEach((user, i) => {
        html += dialogListItem(user, i)
    })

    list.innerHTML = html
}

const cleanUserList = () => {
    let list = document.getElementById('list-of-users');
    list.innerHTML = '';
}

const onClickCloseDialog = () => {
    cleanUserList();
    let addFriendDialogContainer = document.getElementById('add-friend-dialog-container');
    addFriendDialogContainer.style.display = 'none';
    usersList = [];
    removeSnackBar();
    addFriendDialogContainer.innerHTML = ''
}

const onClickSend = async(id) => {
    let userListId = parseInt(id.replace('user-list-send-button-', ''));
    let userNameFrom = document.getElementById('dialog-user-name').value
    let userNameTo = usersList[actualPage][userListId].nickname
    let userToEmail = usersList[actualPage][userListId].email
    const object = {
        to: userToEmail,
        subject: 'Friend Request',
        userNameFrom: userNameFrom,
        userNameTo: userNameTo,
        onError: "",
        onSuccess: ""
    }
    let response = await sendFriendRequest(object)
    if(response.statusCode == 500){
        showSnackbar('warning', 'Error to send friend request!');
        return;
    }
}

const onClickNext = () => {
    actualPage += 1
    if(actualPage > (usersList.length - 1)){
        actualPage -= 1
        return;
    }
   
    fillUserList(usersList[actualPage]);
}

const onClickPrevious = () => {
    if(actualPage == 0){
        return;
    }
  
    actualPage -= 1
    fillUserList(usersList[actualPage]);
}