from service import note_list_service

class NoteListController():
  def __init__(self):
    self.__note_list_service = note_list_service.NoteListService()

  def create_note_list(self,note_list):
    return self.__note_list_service.create_note_list(note_list)
  
  def delete_note_list(self,id):
    return self.__note_list_service.delete_note_list(id)
  
  def update_note_list_name(self,new_name,id):
    return self.__note_list_service.update_note_list_name(new_name,id)

  def get_note_list_by_id(self,id):
    return self.__note_list_service.get_note_list_by_id(id)
  
  def get_note_lists(self):
    return self.__note_list_service.get_note_lists()