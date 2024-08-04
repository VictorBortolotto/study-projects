from db import database
from utils import response

class NoteService():
  def __init__(self):
    self.__db = database.Database()
  
  def create_note(self,note):
    values = (note['name'],note['description'])
    resultSet = self.__db.insert("insert into note(name,description) values(%s,%s)", values)
    responseObj = {}
    if resultSet['rowsAffected'] == 1:
      responseObj = self.__insert_into_note_note_list(resultSet['lastId'],note['idNoteList'])
    else:
      responseObj = response.Response(500,"Error", "Error While Inserting Note in Database", "{}")
    
    return responseObj
  
  def __insert_into_note_note_list(self,id_note,id_note_list):
    values = [id_note_list,id_note]
    rowsAffected = self.__db.insert_relational_tables("insert into note_note_list(id_note_list,id_note) values(%s,%s)", values)
    responseObj = {}
    if rowsAffected == 1:
      responseObj = response.Response(200,"Success", "Note Created with Success", '{"idNote":' + str(id_note) + "}")
    else:
      responseObj = self.__delete_note_when_error(id_note)
      
    return responseObj
  
  def __delete_note_when_error(self,id_note):
    rowsAffected = self.__db.delete("delete from note where id = %s",str(id_note))
    if rowsAffected == 1:
      responseObj = response.Response(500,"Error", "Error While Inserting Note in Database", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error Trying to Delete Note in Database After an Error to Insert", '{"idNote":' + str(id_note) + "}")
    
    return responseObj
  
  def update_note_name(self,new_name,id):
    values = (new_name['name'],id)
    responseObj = {}
    rowsAffected = self.__db.update("update note set name = %s where id = %s",values)
    if rowsAffected == 1:
      responseObj = response.Response(200,"Success", "Note Update With Success", "{}")
    elif rowsAffected == 0:
      responseObj = response.Response(404,"Info", "Note Not Found", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error While Updating Note in Database", "{}") 

    return responseObj

  def update_note_description(self,new_description,id):
    values = (new_description['description'],id)
    responseObj = {}
    rowsAffected = self.__db.update("update note set description = %s where id = %s",values)
    if rowsAffected == 1:
      responseObj = response.Response(200,"Success", "Note Update With Success", "{}")
    elif rowsAffected == 0:
      responseObj = response.Response(404,"Info", "Note Not Found", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error While Updating Note in Database", "{}") 

    return responseObj
  
  def delete_note(self,id_note,id_note_list):
    rowsAffected = self.__delete_note_note_list(id_note_list,id_note)
    responseObj = {}
    if rowsAffected == 1:
      responseObj = self.__delete(id_note)
    elif rowsAffected == 0:
      responseObj = response.Response(404,"Info", "Note Not Found", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error While Deleting Note in Database", "{}") 

    return responseObj
  
  def __delete_note_note_list(self,id_note,id_note_list):
    values = (id_note,id_note_list)
    rowsAffected = self.__db.delete("delete from note_note_list where id_note_list = %s and id_note = %s",values)
    
    return rowsAffected
  
  def __delete(self,id_note):
    value = [id_note]
    rowsAffected = self.__db.delete("delete from note where id = %s",value)
    if rowsAffected == 1:
      responseObj = response.Response(200,"Success", "Note Deleted With Success", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error While Deleting Note in Database", "{}") 

    return responseObj