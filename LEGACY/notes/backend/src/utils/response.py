class Response():
  def __init__(self,status_code,message,description,obj):
    self.__status_code = status_code
    self.__message = message
    self.__description = description
    self.__obj = obj
  
  def set_status_code(self,status_code):
    self.__status_code = status_code

  def get_status_code(self):
    return self.__status_code
  
  def set_message(self,message):
    self.__message = message

  def get_message(self):
    return self.__message
  
  def set_description(self,description):
    self.__description = description

  def get_description(self):
    return self.__description
  
  def set_description(self,obj):
    self.__obj = obj

  def get_description(self):
    return self.__obj
  
  def response_to_string(self):
    return '[ status_code: ' + str(self.__status_code) + ', message: ' + self.__message + ', description: ' + self.__description + ', obj: ' + self.__obj + ' ]'

  def response_to_json(self):
    return '{ "statusCode": ' + str(self.__status_code) + ', "message": "' + self.__message + '", "description": "' + self.__description +  '", "obj":' + self.__obj + '}'
    