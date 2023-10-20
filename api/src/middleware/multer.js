const multer = require("multer")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads')
  },
  filename: function (req, file, cb) {
    const mimetipe = file.mimetype.split('/')[1];
    cb(null, Date.now() + `.${mimetipe}`)
  }
})

const upload = multer({
  storage: storage
}).single('file');

module.exports = { upload };