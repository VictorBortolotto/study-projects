from service import note_service

class NoteController():
  def __init__(self):
    self.__note_service = note_service.NoteService()

  def create_note(self,note):
    return self.__note_service.create_note(note)

  def update_note_name(self,new_name,id):
    return self.__note_service.update_note_name(new_name,id)

  def update_note_description(self,new_description,id):
    return self.__note_service.update_note_description(new_description,id)
  
  def delete_note(self,id_note,id_note_list):
    return self.__note_service.delete_note(id_note,id_note_list)