var isMenuOptionOpened = false;

const cleanFrameList = () => {
    let list = document.getElementById('frame-list');
    list.innerHTML = "";
}

const addFrameToHtml = (newFrame) => {
    let list = document.getElementById('frame-list');
    list.innerHTML += frame(newFrame)
}

const frame = (frame) => {
    let frameHtml = `
        <li class="frame-list-item" id="frame-${frame.id}">
            <div class="frame">
                <div class="frame-display-area">
                    <div class="frame-display-area-header">
                        <div class="frame-title-area">
                            <h1 class="frame-title">${frame.name}</h1>
                        </div>
                        <div class="frame-options">
                            <button class="frame-button" id="frame-options-button-${frame.id}" onclick="onClickButtonOptions(this.id)">
                                <img src="../icons/three-dots-vertical.svg" alt="">
                            </button>
                            <div class="dropdown-list-container">
                                <div class="frame-list-options" id="options-container-${frame.id}">
                                    <ol class="options-list">
                                        <li class="option-item">
                                            <button class="option-button" id="modify-button-${frame.id}" onclick="onClickModifyFrame(this.id)">MODIFY</button>
                                        </li>
                                        <li class="option-item">
                                            <button class="option-button" id="add-user-button-${frame.id}" onclick="openDialogAddFriend()">ADD USER</button>
                                        </li>
                                        <li class="option-item">
                                            <button class="option-button" id="archive-button-${frame.id}" onclick="onClickArchiveFrame(this.id)">${ frame.archived ? 'UNARCHIVE' : 'ARCHIVE' } </button>
                                        </li>
                                        <li class="option-item">
                                            <button class="option-button" id="delete-button-${frame.id}" onclick="onClickDeleteFrame(this.id)">DELETE</button>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="frame-display-area-body" id="frame-${frame.id}" onclick="onClickFrame(this.id)">
                        <h1 class="frame-description">${frame.description}</h1>
                    </div>
                </div>
            </div>
        </li>
    `

    return frameHtml;
}

const onClickButtonOptions = (id) => {
    let frameId = id.replace('frame-options-button-', '');
    let idContainer = 'options-container-' + frameId
    let optionsContainer = document.getElementById(idContainer);
    if(optionsContainer.style.display !== 'flex'){
       isMenuOptionOpened = true;
       optionsContainer.style.display = 'flex'
    }else{
       isMenuOptionOpened = false;
       optionsContainer.style.display = 'none'
    }
}

const onClickDeleteFrame = async(id) => {
    let idFrame = id.replace("delete-button-", "")
    let response = await deleteFrame(idFrame)

    if (response.statusCode === 500) {
        showSnackbar('error', response.message);
        return;
    } 

    let frame = document.getElementById(`frame-${idFrame}`)
    frame.remove()

    showSnackbar('success', response.message);
}

const onClickFrame = (id) => {
    let idFrame = parseInt(id.replace('frame-', ''));
    localStorage.setItem("frameId", idFrame)
    document.location.href = '/myLists/' + idFrame
}