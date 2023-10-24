const fs = require('fs');

exports.deleteFiles = (req, res, next) => {
  const imagenes = req.files;

  try {
    imagenes.forEach(({ path }) => {
      fs.rmSync(path);
    });
  } catch (error) {
    next(error);
  }
}