const header = new Headers({
    'Content-Type': 'application/json'
})

const createMenager = async(menager) => {
    
    const request = {
        method: methods.post,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(menager)
    }

    let response = await fetch(routes.currentRoute + routes.createMenager, request).then(response => response.json());
    return response;

}

const updateMenager = async(menager) => {
    
    const request = {
        method: methods.put,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(menager)
    }

    let response = await fetch(routes.currentRoute + routes.updateMenager, request).then(response => response.json());
    return response;

}

const updateMenagerNickname = async(menager) => {
    
    const request = {
        method: methods.patch,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(menager)
    }

    let response = await fetch(routes.currentRoute + routes.updateMenagerNickname, request).then(response => response.json());
    return response;

}

const updateMenagerDescription = async(menager) => {
    
    const request = {
        method: methods.patch,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(menager)
    }

    let response = await fetch(routes.currentRoute + routes.updateMenagerDescription, request).then(response => response.json());
    return response;

}

const updateMenagerPhoto = async(menager) => {
    
    const request = {
        method: methods.patch,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(menager)
    }

    let response = await fetch(routes.currentRoute + routes.updateMenagerPhoto, request).then(response => response.json());
    return response;

}

