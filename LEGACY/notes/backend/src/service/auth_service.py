from werkzeug.security import check_password_hash
from db import database
from utils import response
from model import auth

class AuthService():
  def __init__(self):
    self.__database = database.Database()
    self.__auth = auth.Auth()

  def authenticate(self, user):
    self.__auth.set_email(user['email'])
    self.__auth.set_pasword(user['password'])
    resultSet = self.__get_user_by_email()

    if resultSet == -1: return response.Response(500,"Error", "Erro to search user in database!", "{}")

    if not self.__check_user(resultSet): return response.Response(404,"Not found", "User not found", "{}")

    auth = self.__create_auth_obj(resultSet)
    
    if not self.__check_password(auth.get_password()):
      return response.Response(401,"Unauthorized", "Wrong password!", "{}")
    else:
      auth.set_token(self.__auth.get_token())
      return response.Response(200,"Authorized", "", auth.auth_to_json())

  def __check_user(self, user):
    return len(user) > 0
          
  def __check_password(self, passwordHash):
    return check_password_hash(passwordHash, self.__auth.get_password())
  
  def __get_user_by_email(self):
    values = [self.__auth.get_email()]
    return self.__database.select("select id, email, password from users where email like %s", values)
  
  def __create_auth_obj(self,resultSet):
    authObj = auth.Auth()
    authObj.set_id(resultSet[0][0])
    authObj.set_email(resultSet[0][1])
    authObj.set_pasword(resultSet[0][2])

    return authObj