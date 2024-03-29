const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_NAME,
});

exports.querySQL = async (sentencia, data = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log({err: err});
        reject(err);}

      connection.query(sentencia, data, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
        connection.release();
        if (error) reject(error);
      });
    });
  });
};