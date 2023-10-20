const express = require('express');
const { upload } = require('../middleware/multer');
const { aws_upload, aws_getFile } = require('../middleware/aws');
const { deleteFiles } = require('../middleware/fileSystem');
const { insert_data, select_all_data, select_data_id } = require('../middleware/queryDataBase');
const { parseData } = require('../middleware/parseData');
const { sendFile } = require('../middleware/sendFile');
const app = express();

app.get('/all', select_all_data);
app.get('/institucion', select_data_id);
app.get('/img', aws_getFile, sendFile);

app.post('/', upload, parseData, aws_upload, insert_data, deleteFiles);

module.exports = app;