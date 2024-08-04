var isNewFrameFormOpened = false;
var isModifyFrame = false;
var openedModifyFrame = ''
var actualPage = 0;
var frameList = [];
var listOfSearchedFrames = [];

var modifiedFrame = {}

const searchFrames = async() => {
   let menager = JSON.parse(sessionStorage.getItem('menager'));
   try{
      let response = await getFrames(menager.id);
      if(response.statusCode === 200){
         frameList = response.obj.frames
         listOfSearchedFrames = [];
         response.obj.frames[0].length === 0 ? onFramesNotFound() : fillFrameBox(frameList[0]);
      }else if(response.statusCode === 500){
         onDatabaseConnectionError();
         showSnackbar('error', response.message)
      }
   } catch (err) {
      onDatabaseConnectionError();
      showSnackbar('error', "Database Connection Error")
   }
}

const onFramesNotFound = () => {
   let frameGridContainer = document.getElementById('frame-grid-container');
   frameGridContainer.innerHTML = ''
   frameGridContainer.innerHTML += '<div class="onFramesNotFound" id="frame-not-found"><img src="../assets/not-found.png" alt="" class="image-not-found" id="frame-not-image"></div>'
   frameGridContainer.style.alignItems = 'center'
   frameGridContainer.style.justifyContent = 'center'
   let frameNotFound = document.getElementById('frame-not-found');
   frameNotFound.style.display = 'flex'
   frameNotFound.style.alignItems = 'center'
   frameNotFound.style.justifyContent = 'center'
   frameNotFound.style.width = '65%'
   frameNotFound.style.height = '85%'
   let frameNotFoundImage = document.getElementById('frame-not-image');
   frameNotFoundImage.style.display = 'flex'
   frameNotFoundImage.style.alignItems = 'center'
   frameNotFoundImage.style.justifyContent = 'center'
   frameNotFoundImage.style.width = '100%'
   frameNotFoundImage.style.height = '100%'
}

const onDatabaseConnectionError = () => {
   let frameGridContainer = document.getElementById('frame-grid-container');
   frameGridContainer.innerHTML = ''
   frameGridContainer.innerHTML += '<div class="onFrameError" id="frame-error"><img src="../assets/error.png" alt="" class="image-error" id="frame-error-image"></div>'
   frameGridContainer.style.alignItems = 'center'
   frameGridContainer.style.justifyContent = 'center'
   let frameError = document.getElementById('frame-error');
   frameError.style.display = 'flex'
   frameError.style.alignItems = 'center'
   frameError.style.justifyContent = 'center'
   frameError.style.width = '65%'
   frameError.style.height = '80%'
   let frameErrorImage = document.getElementById('frame-error-image');
   frameErrorImage.style.display = 'flex'
   frameErrorImage.style.alignItems = 'center'
   frameErrorImage.style.justifyContent = 'center'
   frameErrorImage.style.width = '100%'
   frameErrorImage.style.height = '100%'
}

const onClickNewFrameButton = () => {
   let newFrameFormListItem = document.getElementById('new-frame-form-list-item');
   if(isModifyFrame){
      displayModifyFrameButtons();
   }else{
      if(!isNewFrameFormOpened){
         newFrameFormListItem.style.display = 'flex'
         isNewFrameFormOpened = true
      }else{
         newFrameFormListItem.style.display = 'none'
         isNewFrameFormOpened = false
      }
   }
}

const onClickCreateFrame = async() => {
   let frameName = document.getElementById('new-frame-form-input-name').value;
   let frameDescription = document.getElementById('new-frame-form-input-description').value;
   let id = JSON.parse(sessionStorage.getItem('menager')).id;

   if (frameName === null || frameName === undefined || frameName === ''){
      showSnackbar('warning', 'Please fill all the fields!');
      return;
   }

   if (frameDescription === null || frameDescription === 'undefined' || frameDescription === ''){
      showSnackbar('warning', 'Please fill all the fields!');
      return;
   }

   let frame = {
      name: frameName,
      description: frameDescription,
      idMenager: id
   }

   let response = await createFrame(frame);
   if(response.statusCode === 200){
      cleanFrameList();
      searchFrames();
      actualPage = 0;
      actualPage = 0;
      showSnackbar('success', response.message);
   }else {
      showSnackbar('error', response.message);
   }

   onClickNewFrameButton();
   clearFildsNewFrame()
}

const clearFildsNewFrame = () => {
   document.getElementById('new-frame-form-input-name').value = '';
   document.getElementById('new-frame-form-input-description').value = '';
}

const createNewFrame = () => {
   let newFrame = {
      id: 0,
      name: '',
      description: ''
   }

   return newFrame;
}

const onClickModifyFrame = (id) => {
   let idFrame = parseInt(id.replace('modify-button-', ''));
   modifiedFrame = createNewFrame();
   modifiedFrame.id = idFrame;
   if(openedModifyFrame !== id && isModifyFrame){
      openedModifyFrame = id;
      fillFieldsModifyFrame();
   }else{
      openedModifyFrame = id;
      if(!isNewFrameFormOpened){
         onClickNewFrameButton();
      }
      displayModifyFrameButtons();
   }
}

const displayModifyFrameButtons = () => {
   let newFrameButton = document.getElementById('new-frame-buttton');
   let newFrameCreateButton = document.getElementById('new-frame-create-button');
   let modifyFrameSendButton = document.getElementById('modify-frame-send-button');
   let modifyFrameCancelButton = document.getElementById('modify-frame-cancel-button');
   
   if(!isModifyFrame){
      fillFieldsModifyFrame();
      modifyFrameSendButton.style.display = 'flex';
      modifyFrameCancelButton.style.display = 'flex';
      newFrameButton.textContent = 'MODIFY FRAME'
      newFrameCreateButton.style.display = 'none'
      isModifyFrame = true;
   }else{
      modifyFrameSendButton.style.display = 'none';
      modifyFrameCancelButton.style.display = 'none';
      newFrameButton.textContent = 'NEW FRAME'
      newFrameCreateButton.style.display = 'flex'
      isModifyFrame = false;
      clearFildsNewFrame();
      onClickNewFrameButton();
   }
}

const onClickCancelModifyFrame = () => {
   displayModifyFrameButtons();
}

const onClickSendModifyFrame = async() => {
   let frameName = document.getElementById('new-frame-form-input-name').value;
   let frameDescription = document.getElementById('new-frame-form-input-description').value;
   let id = JSON.parse(sessionStorage.getItem('menager')).id;
   let response = {};

   let oldFrame = getSelectionedFrame();

   if (frameName === null || frameName === undefined || frameName === ''){
      showSnackbar('warning', 'Please fill all the fields!');
      return;
   }

   if (frameDescription === null || frameDescription === 'undefined' || frameDescription === ''){
      showSnackbar('warning', 'Please fill all the fields!');
      return;
   }

   if(oldFrame.name !== frameName && oldFrame.description !== frameDescription){
      modifiedFrame.name = frameName;
      modifiedFrame.description = frameDescription;
      response = await updateFrame(id,modifiedFrame);
   }else{
      if(oldFrame.name !== frameName){
         modifiedFrame.name = frameName;
         modifiedFrame.description = frameDescription;
         response = await updateFrameName(id,modifiedFrame);
      }
   
      if(oldFrame.description !== frameDescription){
         modifiedFrame.name = frameName;
         modifiedFrame.description = frameDescription;
         response = await updateFrameDescription(id,modifiedFrame)
      }
   }

   if(response.statusCode === 200){
      cleanFrameList();
      searchFrames();
      clearFildsNewFrame();
      displayModifyFrameButtons();
      actualPage = 0;
      actualPage = 0;
      showSnackbar('success', response.message);
   }else {
      showSnackbar('error', response.message);
      return;
   }

}

const fillFieldsModifyFrame = () => {
   let frameName = document.getElementById('new-frame-form-input-name');
   let frameDescription = document.getElementById('new-frame-form-input-description');
   let oldFrame = getSelectionedFrame();
   frameName.value = oldFrame.name;
   frameDescription.value = oldFrame.description 
}

const getSelectionedFrame = () => {
   let selectionedFrame = {};
   frameList.filter((listOfFrameList) => {
      listOfFrameList.filter((frameList) => {
         if(frameList.id == modifiedFrame.id){
            selectionedFrame = frameList;
         }
      })
   });
   return selectionedFrame;
}

const fillFrameBox = (frames) => {
   cleanFrameList();
   frames.forEach((frame) => {
      addFrameToHtml(frame);
   })
}

const onClickButtonNext = () => {
   actualPage += 1
   if(actualPage > (frameList.length - 1)){
      actualPage -= 1
      return;
   }
   
   if(listOfSearchedFrames.length > 0){
      fillFrameBox(listOfSearchedFrames[actualPage]);
   }else{
      fillFrameBox(frameList[actualPage]);
   }
}

const onClickButtonPrevious = () => {
   if(actualPage == 0){
      return;
   }

   actualPage -= 1
   if(listOfSearchedFrames.length > 0){
      fillFrameBox(listOfSearchedFrames[actualPage]);
   }else{
      fillFrameBox(frameList[actualPage]);
   }
}

const onClickArchivedFrames = async() => {
   let menager = JSON.parse(sessionStorage.getItem('menager'));
   let response = await getArchivedFrames(menager.id);
   if(response.statusCode === 200){
      frameList = response.obj.frames
      listOfSearchedFrames = [];
      response.obj.frames.length === 0 ? showSnackbar('info', 'Theres no frames to retrieve!') : fillFrameBox(frameList[0]);
   }else if(response.statusCode === 500){
      showSnackbar('error', response.message)
   }
}

const onClickArchiveFrame = async(id) => {
   let idFrame = parseInt(id.replace('archive-button-', ''));
   modifiedFrame = createNewFrame();
   modifiedFrame.id = idFrame;
   let idMenager = JSON.parse(sessionStorage.getItem('menager')).id;
   let response = {};

   let oldframe = getSelectionedFrame();

   if(oldframe.archived === 1){
      modifiedFrame.archived = 0;
   }else{
      modifiedFrame.archived = 1;
   }

   modifiedFrame.name = oldframe.name;
   modifiedFrame.description = oldframe.description;

   response = await updateFrameToArchived(idMenager,modifiedFrame)

   if(response.statusCode === 200){
      searchFrames();
      clearFildsNewFrame();
      isModifyFrame = true;
      isNewFrameFormOpened = true;
      displayModifyFrameButtons();
      actualPage = 0;
      actualPage = 0;
      showSnackbar('success', response.message);
   }else {
      showSnackbar('error', response.message);
      return;
   }
}

const onClickShowFilterOptions = () => {
   filterContainer = document.getElementById('filters-container');
   if(filterContainer.style.display === 'none'){
      filterContainer.style.display = 'flex'
   }else{
      filterContainer.style.display = 'none'
   }
}

const onClickButtonSearch = () => {
   let search = document.getElementById('search').value;
   let listOfFramesList = []
   let listOfFrames = []
   frameList.filter((listOfFrameList, i) => {
      listOfFrameList.filter((frameList, frameIndex) => {
         if(frameList.description.includes(search) || frameList.name.includes(search)){
            listOfFrames[frameIndex] = frameList;
         }
      })
      listOfFrames.length > 0 ? listOfFramesList[i] = listOfFrames : listOfFramesList
   });

   if(listOfFramesList.length > 0){
      listOfSearchedFrames = listOfFramesList;
      fillFrameBox(listOfSearchedFrames[0])
   }else{
      showSnackbar('info', 'Frame not found!')
   }
}
