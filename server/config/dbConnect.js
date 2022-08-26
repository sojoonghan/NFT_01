const dotenv = require('dotenv')
dotenv.config();
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '12345',
    port: '3306',
    database: 'jihoon'
});
db.connect((err) => {
    if (err) { console.log(err) }
    else {
        console.log("DB Connect Sucess");
    }
})
module.exports = db;