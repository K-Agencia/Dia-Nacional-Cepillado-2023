const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const s3 = new AWS.S3();

const arrayImagesAWS = (data) => {

  const files = [];

  data.forEach(file => {

    const { path, filename } = file;

    const fileStream = fs.createReadStream(path);

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
      Body: fileStream
    };

    files.push(s3.upload(params).promise());
  });
  return Promise.all(files);

}

exports.aws_upload = async (req, res, next) => {

  try {
    const imagenes = req.files;

    const response = await arrayImagesAWS(imagenes);
    const keys = response.map(data => data.Key);

    req.aws = [...keys];
    next();

  } catch (error) {
    console.log(error);
  }
}

exports.aws_getFile = async (req, res, next) => {

  const { key } = req.query;

  try {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
    };

    const data = await s3.getObject(params).promise();

    req.aws = { file: data };
    next();
  } catch (err) {
    next(err);
  }
}



