<h1 align="center"> JDBC connection with MySql </h1>

<p align="center">A little aplicattion using JDBC and Maven to connect on a MySQL database.</p>

<h2 align="center"> Licenses </h2>

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/VictorBortolotto/jdbc/blob/master/LICENSE)

<h2 align="center"> Technologies </h2>

<p align="center">
    <a href="https://maven.apache.org/download.cgi">MAVEN 3.6.3</a> <br/>
    <a href="https://www.oracle.com/java/technologies/javase-jdk16-downloads.html">JDK 16.0.2</a> <br/>
    <a href="https://www.mysql.com/downloads/">MySQL</a> <br/>
</p>

<h2 align="center"> Running the application </h2>

```bash

# Clone this repository

$ git clone <https://github.com/VictorBortolotto/jdbc.git>

# To use this application you can use the constructor with arguments user(<name>, <email>)
# or you can use just the constructor the constructor whitout arguments user()
# and call the methods insert, delete, update, selectAll or select

Users user = new Users("Jack", "Jack@gmail.com");

# or 

Users user = new Users();

# Example insert(<table_name>, <tolumn_name>, <value>)

user.insert("user", "name", "Jack");

# or

user.setName("Jack");
user.insert("user", "name", user.getName());

# or

user.insert("user", "name", "Jack");

# Example update("table_name", "column_name", <value>, <id>)

user.update("user", "name", user.getName(), 11);

# or 

user.update("user", "name", "Theodor", 11);

# or

user.setName("Theodor");
user.update("user", "name", user.getName());

# Example delete(<table_name>, <id>)

user.delete("user", 11);

# Example selct(<table_name>, <id>)

user.select("user", 1);

# Example selctAll(<table_name>)

user.selctAll("user");

# Now you just need run the main class in the view package

```

<h2 align="center"> Doc's Links </h2>

[![Lenguage: JAVA](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)](https://docs.oracle.com/en/java/javase/16/)

[![Database: MySql](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)](https://dev.mysql.com/doc/)

<h2 align="center">Author</h2>

<a href="https://www.linkedin.com/in/victor-augusto-campos-bortolotto/">
<img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4D03AQFt3YYTxPs9hQ/profile-displayphoto-shrink_200_200/0/1614791853272?e=1634169600&v=beta&t=cZy1JLDfzlCKbTfWEs_wBrgLA4dl239CWbThcU7bGKA" width="100px;" alt=""/>
</a>
</br>
<a href="https://www.linkedin.com/in/victor-augusto-campos-bortolotto/">
Victor Augusto Campos Bortolotto
</a>

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/victor-augusto-campos-bortolotto/)](https://www.linkedin.com/in/victor-augusto-campos-bortolotto/) 
[![Gmail Badge](https://img.shields.io/badge/-victorcamposbortolottowork@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:victorcamposbortolottowork@gmail.com)](mailto:victorcamposbortolottowork@gmail.com)