from db import database
from utils import response
from model import auth
from model import user
from werkzeug.security import generate_password_hash

class UserService():
  def __init__(self):
    self.__db = database.Database()
    self.__auth = auth.Auth()

  def create_user(self,newUser):
    data = user.User(newUser['email'], newUser['password'])
    
    resultSet = self.__get_user_by_email(data.get_email())    
    if len(resultSet) > 0:
      return response.Response(403,"Info", "E-mail Already Exists!", "{}")
    
    return self.__insert_new_user(data)

  def __insert_new_user(self,data):
    password = generate_password_hash(data.get_password())
    values = (data.get_email(), password)
    responseObj = {}
    resultSet = self.__db.insert("insert into users(email,password) values(%s, %s)", values)
    if resultSet['rowsAffected'] == 1:
      auth = self.__create_auth_obj(resultSet)
      auth.set_token(self.__auth.get_token())
      responseObj = response.Response(200,"Success", "User Created with Success", auth.auth_to_json())
    else:
      responseObj = response.Response(500,"Error", "Error while insert user in database","{}")
    
    return responseObj
  
  def update_user_password(self,data,id):
    values = (data['password'], id)
    rowsAffected = self.__db.update("update users set password = %s where id = %s", values)
    if rowsAffected == 1:
      responseObj = response.Response(200,"Success", "User Update with Success", "{}")
    elif rowsAffected == 0:
      responseObj = response.Response(404,"Info", "User Not Found", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error While Update User in Database", "{}")

    return responseObj
  
  def __get_user_by_email(self,email):
    values = [email]
    return self.__db.select("select email, password from users where email like %s", values)
  
  def __create_auth_obj(self,resultSet):
    authObj = auth.Auth()
    authObj.set_id(resultSet["lastId"])

    return authObj