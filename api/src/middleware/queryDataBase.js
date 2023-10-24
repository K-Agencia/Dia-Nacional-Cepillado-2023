const { querySQL } = require("../config/mysql");

exports.insert_data = async (req, res, next) => {

  const { aws, body } = req;
  const { institucion, sede, ciudad, departamento } = body;

  const data = [
    institucion.toLowerCase(),
    sede.toLowerCase(),
    ciudad.toLowerCase(),
    departamento.toLowerCase()
  ]

  try {
    const query = "INSERT INTO instituciones (institucion, sede, ciudad, departamento) VALUES (?, ?, ?, ?);";
    const { insertId } = await querySQL(query, data);

    aws.forEach(async key => {
      
      const query = "INSERT INTO imagenes (id_instituciones, imagen) VALUES (?, ?);";
      const data = [insertId, key];

      await querySQL(query, data);
    });

    res.send(`La institución ${institucion.toUpperCase()} se ha registrado correctamente.`);
    next();
  } catch (error) {
    next(error);
  }
}

exports.select_all_data = async (req, res, next) => {

  const query = "SELECT * FROM instituciones;";

  try {
    const data = await querySQL(query);
    res.send(data);
  } catch (error) {
    next(error);
  }
}


exports.select_data_id = async (req, res, next) => {

  const { id } = req.query;

  const query = "SELECT * FROM instituciones WHERE id = ?;";

  try {
    const data = await querySQL(query, [id]);
    res.send(data[0]);
  } catch (error) {
    next(error);
  }
}
