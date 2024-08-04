import psycopg
import json 
from pathlib import Path

class Database():
  def __init__(self):
    self.__info = self.__load_database_configuration()
  
  def __load_database_configuration(self):
    root_folder = Path(__file__).parents[2]
    config = open(root_folder / 'resources\\database_config.json')
    info = json.load(config)
    return info

  def __connect(self):
    connection = psycopg.connect(
      dbname=self.__info['database'],
      host=self.__info['host'],
      user=self.__info['user'],
      password=self.__info['password'],
      port=self.__info['port']
    )
    return connection
  
  def __close_connection(self,connection):
    if not connection.closed: connection.close()

  def __commit(self,connection):
    connection.commit()

  def __create_cursor(self,connection):
    return connection.cursor()
  
  def __close_cursor(self,cursor):
    if not cursor.closed: cursor.close()

  def insert_relational_tables(self,sql,values):
    connection = self.__connect()
    cursor = self.__create_cursor(connection)
    rowsAffected = 0 
    try:
      cursor.execute(sql,values)
      rowsAffected = cursor.rowcount
      self.__commit(connection)
    except (Exception, psycopg.DatabaseError) as error:
      print(error)
      connection.rollback()
      self.__close_cursor(cursor)
      self.__close_connection(connection)
      return -1

    self.__close_cursor(cursor)
    self.__close_connection(connection)
    return rowsAffected
  
  def insert(self,sql,values):
    connection = self.__connect()
    cursor = self.__create_cursor(connection)
    resultSet = {
      "rowsAffected": 0,
      "lastId": 0,
      "onError": ""
    }
    try:
      cursor.execute(sql,values)
      resultSet['rowsAffected'] = cursor.rowcount
      cursor.execute("select lastval()")
      resultSet['lastId'] = cursor.fetchone()[0]
      self.__commit(connection)
    except (Exception, psycopg.DatabaseError) as error:
      print(error)
      connection.rollback()
      self.__close_cursor(cursor)
      self.__close_connection(connection)
      resultSet['rowsAffected'] = -1
      resultSet["onError"] = error
      return resultSet

    self.__close_cursor(cursor)
    self.__close_connection(connection)
    return resultSet

  def delete(self,sql,values):
    connection = self.__connect()
    cursor = self.__create_cursor(connection)
    rowsAffected = 0
    try:
      cursor.execute(sql,values)
      rowsAffected = cursor.rowcount
      self.__commit(connection)
    except (Exception, psycopg.DatabaseError) as error:
      print(error)
      connection.rollback()
      self.__close_cursor(cursor)
      self.__close_connection(connection)
      return -1

    self.__close_cursor(cursor)
    self.__close_connection(connection)
    return rowsAffected

  def update(self,sql,values):
    connection = self.__connect()
    cursor = self.__create_cursor(connection)
    rowsAffected = 0
    try:
      cursor.execute(sql,values)
      rowsAffected = cursor.rowcount
      self.__commit(connection)
    except (Exception, psycopg.DatabaseError) as error:
      print(error)
      connection.rollback()
      self.__close_cursor(cursor)
      self.__close_connection(connection)
      return -1

    self.__close_cursor(cursor)
    self.__close_connection(connection)
    return rowsAffected

  def select(self,sql,values):
    connection = self.__connect()
    cursor = self.__create_cursor(connection) 
    results = []
    try:
      cursor.execute(sql,values)
      results = cursor.fetchall()
    except (Exception, psycopg.DatabaseError) as error:
      print(error)
      self.__close_cursor(cursor)
      self.__close_connection(connection)
      return -1

    self.__close_cursor(cursor)
    self.__close_connection(connection)
    return results

  def connection_test(self):
    connection = self.__connect()
    if connection.closed == False:
      print('Database Connection is Open')
      self.__close_connection(connection)
