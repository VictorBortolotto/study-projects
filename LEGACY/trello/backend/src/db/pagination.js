const pagination = (objectsList, totalObjectsPerPage) => {
    let pages = [];
    let objectsPerPage = []; 
    let pageCount = 0;
    let objectsPerPageCount = 0;
    while(objectsPerPageCount <= objectsList.length){
        for(let countObjectsInserted = 0; countObjectsInserted < totalObjectsPerPage; countObjectsInserted++){
            if((countObjectsInserted < totalObjectsPerPage) && (objectsPerPageCount < objectsList.length)){
                objectsPerPage[countObjectsInserted] = objectsList[objectsPerPageCount];
            }
            objectsPerPageCount += 1;
        }
        pages[pageCount] = objectsPerPage;
        pageCount += 1;
        objectsPerPage = [];
    }
    return pages;
}

module.exports = {
    pagination
}