const getUser = async(idUser, params) => {
    const request = {
        method: methods.get,
        headers: header,
        mode: 'cors',
        cache: 'default'
    }

    let response = await fetch(routes.currentRoute + routes.getUser + `/${idUser}/${params}`, request).then(response => response.json());
    return response;
}

const sendFriendRequest = async(options) => {
    const request = {
        method: methods.post,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(options)
    }

    let response = await fetch(routes.currentRoute + routes.sendEmailFriendRequest, request).then(response => response.json());
    return response;
}