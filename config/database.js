const mysql = require('mysql');

//mysql connection 

const CONNECTION = mysql.createConnection({
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "port": process.env.DB_PORT
});

//connect event

CONNECTION.connect((err) => {
    if (err) throw err;
    // console.log('Connected to MySQL Server!');
});


//create database tables

//users

CONNECTION.query(`CREATE TABLE IF NOT EXISTS users(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    isActive BOOLEAN DEFAULT true
) ENGINE=INNODB` , function(err , result , fields) {
    if(err) throw err;
    // console.log('Users table created')
})

//board

CONNECTION.query(`CREATE TABLE IF NOT EXISTS board(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    userId INT NOT NULL,
    isActive BOOLEAN DEFAULT true,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=INNODB` , function(err , result , fields) {
    if(err) throw err;
    // console.log('Board table created')
})

//task

CONNECTION.query(`CREATE TABLE IF NOT EXISTS task(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    userId INT NOT NULL,
    boardId INT NOT NULL,
    status ENUM('todo', 'inprogress' , 'done') DEFAULT 'todo',
    isActive BOOLEAN DEFAULT true,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (boardId) REFERENCES board(id) ON DELETE CASCADE
) ENGINE=INNODB` , function(err , result , fields) {
    if(err) throw err;
    // console.log('Task table created')
})

module.exports = CONNECTION