from service import auth_service

class AuthController():
  def __init__(self):
    self.__auth_service = auth_service.AuthService()

  def authenticate(self,user):
    return self.__auth_service.authenticate(user)