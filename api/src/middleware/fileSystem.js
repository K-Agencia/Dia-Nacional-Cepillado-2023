const fs = require('fs');

exports.deleteFiles = (req, res, next) => {
  const { path } = req.file;

  try {
    fs.rmSync(path);
  } catch (error) {
    console.log(error);
  }
}