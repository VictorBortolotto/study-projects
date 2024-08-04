import methods from "./methods";
import routes from "./routes";

const header = new Headers({
  'Content-Type': 'application/json'
})

export const createUser = async(user) => {

  const request = {
      method: methods.methods.post,
      headers: header,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(user)
  }

  let response = await fetch(routes.defaultRoute + routes.userRoutes.user + routes.userRoutes.newUser, request).then(response => response.json());
  return response;

}

export const login = async(user) => {

  const request = {
      method: methods.methods.post,
      headers: header,
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(user)
  }

  let response = await fetch(routes.defaultRoute + routes.loginRoute.login, request).then(response => response.json());
  return response;

}

export default {
  createUser,
  login
}