const AWS = require('aws-sdk');
const fs = require('fs');

const s3 = new AWS.S3();

exports.aws_upload = async (req, res, next) => {

  try {
    const { filename, path } = req.file;

    const fileStream = fs.createReadStream(path);

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
      Body: fileStream
    };

    const aws = await s3.upload(params).promise();

    req.aws = aws;
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