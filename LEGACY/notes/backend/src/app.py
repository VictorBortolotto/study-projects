from flask import Flask, request, Response
from flask_cors import CORS
app = Flask(__name__)
from controller import user_controller, note_list_controller, note_controller, auth_controller
from utils import routes
CORS(app, origins=["http://localhost:5173/*","http://localhost:5173/*"])

@app.route(routes.Routes.LOGIN.value, methods=['POST'])
def login():
  user = request.get_json()
  response = auth_controller.AuthController().authenticate(user)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())
  
@app.route(routes.Routes.NEW_USER.value, methods=['POST'])
def signup():
  new_user = request.get_json()
  response = user_controller.UserController().create_user(new_user)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.UPDATE_USER_PASSWORD.value, methods=['PATCH'])
def update_password(id):
  new_password = request.get_json()
  response = user_controller.UserController().update_password(new_password,id)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.NEW_NOTE_LIST.value, methods=['POST'])
def new_note_list():
  new_note_list = request.get_json()
  response = note_list_controller.NoteListController().create_note_list(new_note_list)
  print(response.response_to_json())
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.DELETE_NOTE_LIST.value, methods=['DELETE'])
def delete_note_list(id):
  response = note_list_controller.NoteListController().delete_note_list(id)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.UPDATE_NOTE_LIST_NAME.value, methods=['PATCH'])
def update_note_list_name(id):
  new_name = request.get_json()
  response = note_list_controller.NoteListController().update_note_list_name(new_name,id)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.GET_NOTE_LIST_BY_ID.value, methods=['GET'])
def get_note_list_by_id(id):
  response = note_list_controller.NoteListController().get_note_list_by_id(id)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.GET_NOTE_LISTS.value, methods=['GET'])
def get_note_lists():
  response = note_list_controller.NoteListController().get_note_lists()
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.NEW_NOTE.value, methods=['POST'])
def new_note():
  new_note = request.get_json()
  response = note_controller.NoteController().create_note(new_note)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.DELETE_NOTE.value, methods=['DELETE'])
def delete_note(id_note_list,id_note):
  response = note_controller.NoteController().delete_note(id_note,id_note_list)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.UPDATE_NOTE_NAME.value, methods=['PATCH'])
def update_note_name(id):
  new_name = request.get_json()
  response = note_controller.NoteController().update_note_name(new_name,id)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())

@app.route(routes.Routes.UPDATE_NOTE_DESCRIPTION.value, methods=['PATCH'])
def update_note_description(id):
  new_description = request.get_json()
  response = note_controller.NoteController().update_note_description(new_description,id)
  return Response(response.response_to_json(),mimetype='application/json',status=response.get_status_code())