const { querySQL } = require("../config/mysql");

exports.insert_data = async (req, res, next) => {

  const { aws, body } = req;
  const { institucion, sede, ciudad, departamento } = body;
  const imagen = aws.Key;

  const data = [
    institucion.toLowerCase(),
    sede.toLowerCase(),
    ciudad.toLowerCase(),
    departamento.toLowerCase(),
    imagen
  ]

  const query = "INSERT INTO dia_nacional_cepillado_2023 (institucion, sede, ciudad, departamento, imagen) VALUES (?, ?, ?, ?, ?);";

  try {
    await querySQL(query, data);
    res.send(`La institución ${institucion.toUpperCase()} se ha registrado correctamente.`);
    next();
  } catch (error) {
    next(error);
  }
}

exports.select_all_data = async (req, res, next) => {

  const query = "SELECT * FROM dia_nacional_cepillado_2023;";

  try {
    const data = await querySQL(query);
    res.send(data);
  } catch (error) {
    next(error);
  }
}


exports.select_data_id = async (req, res, next) => {

  const { id } = req.query;

  const query = "SELECT * FROM dia_nacional_cepillado_2023 WHERE id = ?;";

  try {
    const data = await querySQL(query, [id]);
    res.send(data[0]);
  } catch (error) {
    next(error);
  }
}
