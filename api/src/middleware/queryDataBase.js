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

  const query = `
  SELECT
    I.id AS id,
    I.institucion AS institucion,
    I.sede AS sede,
    I.ciudad AS ciudad,
    I.departamento AS departamento,
    (
        SELECT imagen
        FROM imagenes
        WHERE id_instituciones = I.id
        LIMIT 1
    ) AS imagen_1,
    (
        SELECT imagen
        FROM imagenes
        WHERE id_instituciones = I.id
        LIMIT 1,1
    ) AS imagen_2,
    (
        SELECT imagen
        FROM imagenes
        WHERE id_instituciones = I.id
        LIMIT 2,1
    ) AS imagen_3
  FROM instituciones AS I;
`;

  try {
    const data = await querySQL(query);
    res.send(data);
  } catch (error) {
    next(error);
  }
}


exports.select_data_id = async (req, res, next) => {

  const { id } = req.query;

  const query = `
  SELECT
    I.id AS id,
    I.institucion AS institucion,
    I.sede AS sede,
    I.ciudad AS ciudad,
    I.departamento AS departamento,
    (
        SELECT imagen
        FROM imagenes
        WHERE id_instituciones = I.id
        LIMIT 1
    ) AS imagen_1,
    (
        SELECT imagen
        FROM imagenes
        WHERE id_instituciones = I.id
        LIMIT 1,1
    ) AS imagen_2,
    (
        SELECT imagen
        FROM imagenes
        WHERE id_instituciones = I.id
        LIMIT 2,1
    ) AS imagen_3
  FROM instituciones AS I
  WHERE id = ?;`;

  try {
    const data = await querySQL(query, [id]);
    res.send(data[0]);
  } catch (error) {
    next(error);
  }
}


exports.select_page_data = async (req, res, next) => {

  const { page } = req.params;

  const nextPage = (parseInt(page) - 1) * 20;
  
  const query = `SELECT * FROM instituciones`
  // const query = `
//   SELECT
//     I.id AS id,
//     I.institucion AS institucion,
//     I.sede AS sede,
//     I.ciudad AS ciudad,
//     I.departamento AS departamento,
//     (
//         SELECT imagen
//         FROM imagenes
//         WHERE id_instituciones = I.id
//         LIMIT 1
//     ) AS imagen_1,
//     (
//         SELECT imagen
//         FROM imagenes
//         WHERE id_instituciones = I.id
//         LIMIT 1,1
//     ) AS imagen_2,
//     (
//         SELECT imagen
//         FROM imagenes
//         WHERE id_instituciones = I.id
//         LIMIT 2,1
//     ) AS imagen_3
//   FROM instituciones AS I
//   LIMIT 20
//   OFFSET ${nextPage};
// `;

  try {
    const data = await querySQL(query);
    res.send(data);
  } catch (error) {
    next(error);
  }
}
