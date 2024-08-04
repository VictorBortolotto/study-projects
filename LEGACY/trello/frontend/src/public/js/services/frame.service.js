const header = new Headers({
    'Content-Type': 'application/json'
})

const createFrame = async(frame) => {
    const request = {
        method: methods.post,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(frame)
    }

    let response = await fetch(routes.currentRoute + routes.createFrame, request).then(response => response.json());
    return response;
}

const getFrames = async(idFrame) => {
    const request = {
        method: methods.get,
        headers: header,
        mode: 'cors',
        cache: 'default'
    }

    let response = await fetch(routes.currentRoute + routes.getFrames + `/${idFrame}`, request).then(response => response.json());
    return response;
}

const getArchivedFrames = async(idFrame) => {
    const request = {
        method: methods.get,
        headers: header,
        mode: 'cors',
        cache: 'default'
    }

    let response = await fetch(routes.currentRoute + routes.getArchivedFrames + `/${idFrame}`, request).then(response => response.json());
    return response;
}

const updateFrame = async(idFrame, frame) => {
    const request = {
        method: methods.put,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(frame)
    }

    let response = await fetch(routes.currentRoute + routes.updateFrame + `/${idFrame}`, request).then(response => response.json());
    return response;
}


const updateFrameName = async(idFrame, frame) => {
    const request = {
        method: methods.patch,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(frame)
    }

    let response = await fetch(routes.currentRoute + routes.updateFrameName + `/${idFrame}`, request).then(response => response.json());
    return response;
}

const updateFrameDescription = async(idFrame, frame) => {
    const request = {
        method: methods.patch,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(frame)
    }

    let response = await fetch(routes.currentRoute + routes.updateFrameDescription + `/${idFrame}`, request).then(response => response.json());
    return response;
}

const updateFrameToArchived = async(idFrame, frame) => {
    const request = {
        method: methods.patch,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(frame)
    }

    let response = await fetch(routes.currentRoute + routes.updateFrameToArchived + `/${idFrame}`, request).then(response => response.json());
    return response;
}

const deleteFrame = async(idFrame, frame) => {
    const request = {
        method: methods.delete,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(frame)
    }

    let response = await fetch(routes.currentRoute + routes.deleteFrame + `/${idFrame}`, request).then(response => response.json());
    return response;
}