const header = new Headers({
    'Content-Type': 'application/json'
})

const createUser = async(user) => {
    
    const request = {
        method: methods.post,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(user)
    }

    let response = await fetch(routes.currentRoute + routes.createUser, request).then(response => response.json());
    return response;

}

const login = async(user) => {

    const request = {
        method: methods.post,
        headers: header,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(user)
    }

    let response = await fetch(routes.currentRoute + routes.login, request).then(response => response.json());
    return response;

}