const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.BD_HOST,
  user: process.env.BD_USER,
  password: process.env.BD_PASS,
  database: process.env.BD_NAME,
});

exports.querySQL = async (query, data = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) console.log(err);

      connection.query(query, data, (error, results, fields) => {
        if (error) console.log(error);

        console.log(results);
        resolve(results);
        connection.release();
        if (error) reject(error);
      });
    });
  });
};
// 3226780958
// 3180790707