const mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'Coyle#2415', 
  database: 'department_db',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection