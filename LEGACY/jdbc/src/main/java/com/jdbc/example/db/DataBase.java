package com.jdbc.example.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DataBase {
    
    private final String url = "jdbc:mysql://localhost:3306/jdbcexample";
    private final String user = "root";
    private final String password = "";

    public Connection openConnection(){

        DataBase config = new DataBase();
        Connection connection = null;

        try{

            connection = DriverManager.getConnection(config.getUrl(), config.getUser(), config.getPassword());    

        }catch (SQLException e){

            e.printStackTrace();

        }

        return connection;

    }

    public void closeConnection(Connection connection){

        try{

            if(!connection.isClosed()){

                connection.close();
                System.out.println("The connection are closed.");

            }

        }catch(SQLException e){

            e.printStackTrace();

        }

    }

    public void closePreparedStatement(PreparedStatement preparedStatement){

        try{

            if(!preparedStatement.isClosed()){

                preparedStatement.close();
                System.out.println("The prepared statement are closed.");

            }

        }catch(SQLException e){

            e.printStackTrace();

        }

    }

    private String getUrl() { return url; }

    private String getUser() { return user; }

    private String getPassword() { return password; }

}