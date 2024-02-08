require('dotenv').config();
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./src/routes');
const { errorHandling } = require('./src/middleware/errorHandling');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({
   extended: false
}));
app.use(express.json());

app.use(routes);
app.use(errorHandling);

app.listen(PORT, () => {
   console.log(`Server run in the port ${PORT}`);
})