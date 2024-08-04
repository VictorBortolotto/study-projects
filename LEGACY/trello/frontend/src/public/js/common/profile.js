const menager = {
    nickname: '',
    photo: '',
    description: '',
    id: 0
}

var commonPhoto = ''

const displayButtons = () => {
    let menager = sessionStorage.getItem('menager')
    let saveButton = document.getElementById('save-button');
    let editButton = document.getElementById('edit-button');
    let btnSaveChanges = document.getElementById('save-changes-button');
    let btnCancelEdit = document.getElementById('cancel-edit-button');
    commonPhoto = document.getElementById('user-perfil-photo').src;

    if(menager !== null && menager !== 'undefined') {
        saveButton.style.display = 'none';
        editButton.style.display = 'flex';
        editButton.style.alignItems = 'center';
        editButton.style.justifyContent = 'center';
        btnSaveChanges.style.display = 'none';
        btnCancelEdit.style.display = 'none';
    }else {
        saveButton.style.display = 'flex';
        saveButton.style.alignItems = 'center';
        saveButton.style.justifyContent = 'center';
        editButton.style.display = 'none'
    }
}

const onPhotoClick = () => {
    let input = document.createElement('input')
    input.type = 'file'
    input.style.display = 'none'

    
    input.onchange = (event) => {
        let file = event.target.files[0]; 
        let reader = new FileReader();
        let image = document.getElementById('user-perfil-photo')
       
        reader.onload = (event) => {
            image.src = event.target.result;
        }
    
        reader.readAsDataURL(file)
    }

    input.click();
}

const onClickButtonSave = async() => {
    checkFields();
    
    let response = await createMenager(menager);
    if(response.statusCode === 200){
        menager.id = response.obj.id
        sessionStorage.setItem('menager', JSON.stringify(menager));
        showSnackbar('success', response.message);
        displayButtons();
        fillFields();
        blockFields()
    }else {
        showSnackbar('error', response.message);
    }
}

const checkFields = () => {
    let nickname = document.getElementById('user-nickname').value
    let userEmail = document.getElementById('user-email').value;
    let userPhoto = document.getElementById('nav-user-perfil-photo').src
    
    if(verifyIfIsEmpty(nickname)){
        menagerNickname = userEmail.substring(0, userEmail.indexOf('@'))
        menager.nickname = menagerNickname 
        nickname.value = menagerNickname
    } else {
        menager.nickname = nickname;
    }

    if (commonPhoto !== document.getElementById('user-perfil-photo').src){
        menager.photo = document.getElementById('user-perfil-photo').src;
    }else {
        menager.photo = userPhoto
    }
    menager.description = document.getElementById('user-description').value;
    menager.id = getCookie("id");
}

const blockFields = () => {
    let userPerfilPhoto = document.getElementById('user-perfil-photo')
    let userNickName = document.getElementById('user-nickname')
    let userDescription = document.getElementById('user-description')
    userNickName.readOnly = true;
    userPerfilPhoto.onclick = null
    userDescription.readOnly = true;
    userNickName.style.color = 'rgb(171, 171, 171)'
    userDescription.style.color = 'rgb(171, 171, 171)'
}

const fillFields = () => {
    let menager = sessionStorage.getItem('menager');
    if(menager !== null && menager !== 'undefined'){
        menager = JSON.parse(sessionStorage.getItem('menager'));
        document.getElementById('user-nickname').value = menager.nickname
        document.getElementById('user-perfil-photo').src = menager.photo
        document.getElementById('user-description').value = menager.description
        document.getElementById('nav-user-perfil-photo').src = menager.photo
        blockFields();
    }
    let userEmail = document.getElementById('user-email')
    let userId = document.getElementById('user-id')
    userEmail.value = getCookie("email").replace('%40', '@')
    userId.value = getCookie("user_reference")
    userEmail.style.color = 'rgb(171, 171, 171)'
    userId.style.color = 'rgb(171, 171, 171)'
}

const onClickButtonEdit = () => {
    document.getElementById('user-perfil-photo').onclick = onPhotoClick
    document.getElementById('edit-button').style.display = 'none'

    let userNickName = document.getElementById('user-nickname')
    let userDescription = document.getElementById('user-description')

    userNickName.readOnly = false
    userDescription.readOnly = false
    userNickName.style.color = 'black'
    userDescription.style.color = 'black'

    let btnSaveChanges = document.getElementById('save-changes-button')
    let btnCancelEdit = document.getElementById('cancel-edit-button')

    btnSaveChanges.style.display = 'flex'
    btnSaveChanges.style.alignItems = 'center'
    btnSaveChanges.style.justifyContent = 'center'
    btnSaveChanges.style.width = '25%'

    btnCancelEdit.style.display = 'flex'
    btnCancelEdit.style.alignItems = 'center'
    btnCancelEdit.style.justifyContent = 'center'
}

const onClickSaveChanges = async() => {
    let newNickname = document.getElementById('user-nickname').value;
    let newPhoto = document.getElementById('user-perfil-photo').src;
    let newDescription = document.getElementById('user-description').value;   
    let actualMenager = JSON.parse(sessionStorage.getItem('menager'));
    let userEmail = document.getElementById('user-email').value;
    
    menager.nickname = newNickname;
    menager.description = newDescription;
    menager.photo = newPhoto;
    menager.id = actualMenager.id

    let response = null;

    if (verifyIfIsEmpty(newNickname)) {
        menager.nickname = userEmail.substring(0, userEmail.indexOf('@'))
    }

    let patchResponse = {
        updateNicknameStatusCode: 0,
        updateDescriptionStatusCode: 0,
        updatePhotoStatusCode: 0
    }

    if(actualMenager.nickname !== menager.nickname &&
        actualMenager.description !== menager.description &&
        actualMenager.photo !== menager.photo){
        response = await updateMenager(menager);
        if(response.statusCode === 200){
            sessionStorage.setItem('menager',JSON.stringify(menager));
            showSnackbar('success', "Updated with success!");
        }else if(response.statusCode === 404){
            showSnackbar('info', response.info);
        }else{
            showSnackbar('error', response.message);
        }
        fillFields();
        displayButtons();
        return;
    }

    if(actualMenager.nickname !== menager.nickname){
        response = await updateMenagerNickname(menager);   
        patchResponse.updateNicknameStatusCode = response.statusCode;
    }

    if(actualMenager.description !== menager.description){
        response = await updateMenagerDescription(menager);
        patchResponse.updateDescriptionStatusCode = response.statusCode;
    }

    if(actualMenager.photo !== menager.photo){
        response = await updateMenagerPhoto(menager);
        patchResponse.updatePhotoStatusCode = response.statusCode;
    }

    if(patchResponse.updateNicknameStatusCode === 500 ||
        patchResponse.updateDescriptionStatusCode === 500 ||
        patchResponse.updatePhotoStatusCode === 500){
        let message = createErrorMessage(patchResponse);
        setInfoOnCaseError(patchResponse);
        showSnackbar('error', message);
    }else if (patchResponse.updateNicknameStatusCode === 404 ||
        patchResponse.updateDescriptionStatusCode === 404 ||
        patchResponse.updatePhotoStatusCode === 404){
        fillFields();
        showSnackbar('error', response.message);    
    }else{
        sessionStorage.setItem('menager',JSON.stringify(menager));
        fillFields();
        showSnackbar('success', "Updated with success!");
    }  
    displayButtons();
}

const onClickButtonCancelEdit = () => {
    blockFields();
    displayButtons();
}

const setInfoOnCaseError = (patchResponse) => {
    let actualMenager = JSON.parse(sessionStorage.getItem('menager'));

    if(patchResponse.updateNicknameStatusCode === 500){
        menager.nickname = actualMenager.nickname;    
    }

    if(patchResponse.updateDescriptionStatusCode === 500){
        menager.description = actualMenager.description;
    }

    if(patchResponse.updatePhotoStatusCode === 500){
        menager.photo = actualMenager.photo;
    }

    menager.id = actualMenager.id;

    sessionStorage.setItem('menager',JSON.stringify(menager));
}

const createErrorMessage = (patchResponse) => {
    let message = 'Oops something goes wrong to update ';
    if(patchResponse.updateNicknameStatusCode === 500){
        message += 'nickname,'
    }

    if(patchResponse.updateDescriptionStatusCode === 500){
        message += 'description,'
    }

    if(patchResponse.updatePhotoStatusCode === 500){
        message += 'photo,'
    }

    message  = message.substring(0, message.length - 1);

    return message;
}