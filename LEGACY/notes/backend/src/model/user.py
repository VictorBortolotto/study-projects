class User():
  def __init__(self,email,password):
    self.__email = email
    self.__password = password

  def set_email(self, email):
    self.__email = email
  
  def get_email(self):
    return self.__email
  
  def set_password(self,password):
    self.__password = password

  def get_password(self):
    return self.__password
  
  def user_to_string(self):
    return '[ id: ' + str(self.__id) + ', email: ' + self.__email + ', password: ' + self.__password + ' ]'

  def user_to_json(self):
    return '{ "id": ' + str(self.__id) + ', "email": "' + self.__name + '", "password": "' + self.__password + '" }'