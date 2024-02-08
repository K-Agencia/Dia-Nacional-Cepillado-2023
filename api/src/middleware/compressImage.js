const path = require('path');
const fs = require('fs');
const sizeOf = require('image-size')
const sharp = require('sharp');

exports.compressImage = async (files) => {

  return await new Promise((resolve, reject) => {
    files.forEach((file) => {

      const ext = file.filename.split('.')[1];
      const arrayExt = ['jpg', 'jpeg', 'png'];

      if (arrayExt.includes(ext)) {

        const relationCompress = file.size > 1000000 ? 0.25 : 0.40;

        console.log(file);

        const dimensions = sizeOf(file.path);
        const width = Math.round(dimensions.width * relationCompress);
        const height = Math.round(dimensions.height * relationCompress);

        const filenameCompress = path.join(__dirname, '..', 'uploads/compress', file.filename);
        file.newPath = path.join(__dirname, '..', 'uploads/compress', file.filename);

        sharp(file.path).resize(width, height).jpeg({
          quality: 80,
          chromaSubsampling: '4:4:4'
        }).toFile(filenameCompress, (err, data) => {
          if (err) {
            reject({ err });
          } else {
            fs.rmSync(file.path);
          }
        })

      } else {
        file.newPath = file.path
      }
    });

    resolve(files);
  })
}