package com.jdbc.example.view;

import com.jdbc.example.controller.Commands;
import com.jdbc.example.model.Users;

public class View {
    
    public static void main(String[] args) {
        
        // Example, using the classes
        Commands commands = new Commands(); 
        Users person = new Users("Hector", "hector@gmail.com"); 

        // At first let's insert a user name into the database
        commands.insert("users", "name", person.getName());

        // Now let's update the new user to give an email to him
        commands.update("users", "email", person.getEmail(), 11);

        // Using the method selectAll to select the users from database
        commands.selectAll("users");
        
        // Using the mehtod select to show just one user from database
        commands.select("users", 11);

        // Using the method delete
        commands.delete("users", 10);

        commands.selectAll("users");

    }

}
