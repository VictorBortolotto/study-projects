class Note():
  def __init__(self,id,name,description):
    self.__id = id
    self.__name = name
    self.__description = description

  def set_id(self,id):
    self.__id = id
  
  def get_id(self):
    return self.__id
  
  def set_description(self,name):
    self.__name = name

  def get_description(self):
    return self.__name
  
  def set_description(self,description):
    self.__description = description

  def get_description(self):
    return self.__description
  
  def note_to_string(self):
    return '[ id: ' + str(self.__id) + ', name: ' + self.__name + ', description: ' + self.__description + ' ]'

  def note_to_json(self):
    return '{ "id": ' + str(self.__id) + ', "name": "' + self.__name + '", "description": "' + self.__description + '" }'