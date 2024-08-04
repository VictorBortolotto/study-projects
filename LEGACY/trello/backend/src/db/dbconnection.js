const mysql = require("mysql");
const conf = require("./dbconf");

const createConnection = () => {
    let connection = mysql.createConnection({
        host: conf.host,
        user: conf.user,
        password: conf.password,
        port: conf.port,
        database: conf.database
    });
    
    return connection;
}

module.exports = {
    createConnection
}