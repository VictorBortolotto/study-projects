from db import database
from utils import response, pagination
from model import note_list

class NoteListService():
  def __init__(self):
    self.__db = database.Database()

  def create_note_list(self,newNoteList):
    values = (newNoteList['name'],newNoteList['idUser'])
    responseObj = {}
    resultSet = self.__db.insert("insert into note_list(name,id_user) values (%s,%s)",values)
    if resultSet['rowsAffected'] == 1:
      noteList = note_list.NoteList(resultSet["lastId"],newNoteList['name'],newNoteList['idUser'])
      responseObj = response.Response(200,"Success", "Note List Created with Success", noteList.note_list_to_json())
    else:
      responseObj = response.Response(500,"Error", "Error While Inserting Note List in Database", "{}")
    
    return responseObj

  def update_note_list_name(self,name,id):
    values = (name['name'],id)
    responseObj = {}
    rowsAffected = self.__db.update("update note_list set name = %s where id = %s",values)
    if rowsAffected == 1:
      responseObj = response.Response(200,"Success", "Note List Update With Success", "{}")
    elif rowsAffected == 0:
      responseObj = response.Response(404,"Info", "Note List Not Found", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error While Updating Note List in Database", "{}") 

    return responseObj

  def delete_note_list(self,id):
    values = [id]
    rowsAffected = self.__db.delete("delete from note_list where id = %s",values)
    responseObj = {}
    if rowsAffected == 1:
      responseObj = response.Response(200,"Success", "Note List Deleted With Success", "{}")
    elif rowsAffected == 0:
      responseObj = response.Response(404,"Info", "Note List Not Found", "{}")
    else:
      responseObj = response.Response(500,"Error", "Error While Deleting Note List in Database", "{}") 

    return responseObj
  
  def get_note_list_by_id(self,id):
    values = [id]
    resultSet = self.__db.select("select id, id_user, name from note_list where id = %s", values)

    if resultSet == -1: return response.Response(500,"Error", "Error To Shearch Note List in Database", "{}") 

    if len(resultSet) > 0:
      noteList = note_list.NoteList(resultSet[0][0], resultSet[0][2], resultSet[0][1])
      return response.Response(200,"Success", "Note List Retrieved with Success", noteList.note_list_to_json())
    else:
      return response.Response(404,"Info", "Note List Not Found", "{}")
  
  def get_note_lists(self):
    resultSet = self.__db.select("select id, id_user, name from note_list", [])
    
    if resultSet == -1: return response.Response(500,"Error", "Error To Shearch Note List in Database", "{}") 

    noteListJsonObj = ''
    for noteList in resultSet:
      noteListObj = note_list.NoteList(noteList[0], noteList[2], noteList[1])
      noteListJsonObj += noteListObj.note_list_to_json() + ','

    pagination.Pagination().pagination(resultSet)
    noteListJsonObj = '['+ noteListJsonObj[0:len(noteListJsonObj) - 1] + ']'

    if len(resultSet) > 0:
      return response.Response(200,"Success", "Note List Retrieved with Success", noteListJsonObj)
    else:
      return response.Response(404,"Info", "Note Lists Not Found", "{}")
    
