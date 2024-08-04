class NoteList():
  def __init__(self,id,name,id_user):
    self.__id = id
    self.__name = name
    self.__id_user = id_user

  def set_id(self, id):
    self.__id = id
  
  def get_id(self):
    return self.__id

  def set_name(self, name):
    self.__name = name
  
  def get_name(self):
    return self.__name

  def set_id_user(self, id_user):
    self.__id_user = id_user
  
  def get_id_user(self):
    return self.__id_user
  
  def note_list_to_string(self):
    return '[ id: ' + str(self.get_id()) + ', id_user: ' + str(self.get_id_user()) + ', name: ' + self.get_name() + ' ]'
  
  def note_list_to_json(self):
    return '{ "id": ' + str(self.get_id()) + ', "idUser": ' + str(self.get_id_user()) + ', "name": "' + self.get_name() + '" }'