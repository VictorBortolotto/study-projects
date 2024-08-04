package com.jdbc.example.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.jdbc.example.db.DataBase;

public class Commands {
    
    private PreparedStatement preparedStatement = null;
    private ResultSet resultSet = null;
    private Connection connection = null; 

    public void select(String table, int id){

        Commands query = new Commands();
        DataBase dataBase = new DataBase();
        connection = dataBase.openConnection();

        try {
        
            preparedStatement = connection.prepareStatement("select * from " + table + " where user_id = " + id);
            resultSet = preparedStatement.executeQuery();
            query.showQuery(resultSet);
        
        } catch (SQLException e) {
        
            e.printStackTrace();
        
        }finally{

            dataBase.closePreparedStatement(preparedStatement);
            dataBase.closeConnection(connection);

        }   

    }

    public void selectAll(String table){

        Commands query = new Commands();
        DataBase dataBase = new DataBase();
        connection = dataBase.openConnection();

        try {
        
            preparedStatement = connection.prepareStatement("select * from " + table);
            resultSet = preparedStatement.executeQuery();
            query.showQuery(resultSet);
        
        } catch (SQLException e) {
        
            e.printStackTrace();
        
        }finally{

            dataBase.closePreparedStatement(preparedStatement);
            dataBase.closeConnection(connection);

        }   

    }

    public void update(String table, String column, String value, int id){

        DataBase dataBase = new DataBase();
        Connection connection = dataBase.openConnection();

        try{    

            preparedStatement = connection.prepareStatement("update " + table + " set " + column + " = " + "'" + value +  "'" + " where user_id = " + id);
            preparedStatement.executeUpdate();
              
        }catch(SQLException e){

            e.printStackTrace();

        }finally{
        
            System.out.println("Table was updated.");
            dataBase.closePreparedStatement(preparedStatement);
            dataBase.closeConnection(connection);
        
        } 

    }

    public void insert(String table, String column, String value){

        DataBase dataBase = new DataBase();
        Connection connection = dataBase.openConnection();

        try{    

            preparedStatement = connection.prepareStatement("insert into " + table + " (" + column + ") " + " values ('" + value +  "')");
            preparedStatement.executeUpdate();
              
        }catch(SQLException e){

            e.printStackTrace();

        }finally{
        
            System.out.println("Datas was inserted.");
            dataBase.closePreparedStatement(preparedStatement);
            dataBase.closeConnection(connection);
        
        } 

    }

    public void delete(String table, int id){

        DataBase dataBase = new DataBase();
        Connection connection = dataBase.openConnection();

        try{    

            preparedStatement = connection.prepareStatement("delete from " + table + " where user_id = " + id);
            preparedStatement.executeUpdate();
              
        }catch(SQLException e){

            e.printStackTrace();

        }finally{
        
            System.out.println("Datas was deleted.");
            dataBase.closePreparedStatement(preparedStatement);
            dataBase.closeConnection(connection);
        
        } 

    }

    private void showQuery(ResultSet resultSet){

        try{

            while(resultSet.next()){

                System.out.println("ID: " + resultSet.getInt("user_id") + " - " + resultSet.getString("name") + " - " + resultSet.getString("email"));

            }

        }catch(SQLException e){

            e.printStackTrace();

        }

    }

}