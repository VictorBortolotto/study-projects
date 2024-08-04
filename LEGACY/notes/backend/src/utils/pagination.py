from model import note_list

class Pagination():

  def pagination(self,list):
    countItensPerPage = 0
    listCount = 0
    componentList = []
    listOfComponentList = []
    for data in list:
      if countItensPerPage < 9:
        noteList = note_list.NoteList(data[0], data[2], data[1])
        componentList.append(noteList.note_list_to_json()) 
      elif countItensPerPage == 9: 
        countItensPerPage = 0
        listOfComponentList.append(componentList)
        componentList = []
        listCount += 1
      
      countItensPerPage += 1
      
    
    print(listOfComponentList)