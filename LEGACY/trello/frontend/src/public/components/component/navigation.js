var isShowUserNavigation = false;

const onClickPerfilPhoto = () => {
    showNavigation();
    let menager = JSON.parse(sessionStorage.getItem('menager'));
    let navigationPerfilPhoto = document.getElementById('user-navigation-perfil-photo');
    let navigationPerfilName = document.getElementById('user-navigation-perfil-name');
    let navigationContainer = document.getElementById('navigation-container');

    if(!isShowUserNavigation){
        navigationContainer.style.display = 'flex'

        navigationPerfilPhoto.src =  menager.photo
        navigationPerfilName.innerText = menager.nickname
        isShowUserNavigation = true
        removeSnackBar();
    }
}
 
const showNavigation = () => {
    let navigationContainer = document.getElementById('navigation-container');
    navigationContainer.innerHTML += navigationComponent();
}

const removeNavigation = () => {
    let navigationContainer = document.getElementById('navigation-container');
    navigationContainer.innerHTML = '';
}

const onClickCloseNavigationContainer = () => {
    let navigationContainer = document.getElementById('navigation-container');
    if(isShowUserNavigation){
       navigationContainer.style.display = 'none'
       isShowUserNavigation = false
       removeNavigation();
       createSnackBarOn('main-container');
    }
}

const onClickButtonProfile = () => {
    document.location.href = '/profile'
}
 
const onClickButtonHome = () => {
    document.location.href = '/home'
}

const fillPhoto = () => {
    let perfilPhoto = document.getElementById('nav-user-perfil-photo');
    let menager = JSON.parse(sessionStorage.getItem('menager'));
    perfilPhoto.src = menager.photo
}

const navigationComponent = () => {
    return `
        <div class="user-navigation-container" >
            <div class="user-name-container">
                <div class="user-navigation-image-area">
                    <img src="../assets/user.png" alt="" id="user-navigation-perfil-photo" class="user-navigation-image">
                </div>
                <div class="user-navigation-name-area">
                    <h5 class="user-navigation-name" id="user-navigation-perfil-name">
                    </h5>
                </div>
                <div class="close-navigation-container">
                    <button class="btn-close-navigation-container" onclick="onClickCloseNavigationContainer()">
                        X
                    </button>
                </div>
            </div>
            <ol class="user-navigation-list">
                <li class="user-navigation-list-item">
                    <button class="navigation-list-button" onclick="onClickButtonHome()">
                        HOME
                    </button>
                </li>
                <li class="user-navigation-list-item">
                    <button class="navigation-list-button" onclick="onClickButtonProfile()">
                        PROFILE
                    </button>
                </li>
                <li class="user-navigation-divisor"></li>
                <li class="user-navigation-list-item">
                    <button class="navigation-list-button" onclick="openDialogAddFriend()">
                        ADD FRIEND
                    </button>
                </li>
            </ol>
        </div>
    `
}