const express = require('express');
const cors = require('cors');
const connectToDB = require('./db/db');
const AppConstants = require('./utils/constant');
const routes = require('./routes/routes');

require('dotenv').config();

const app = express();
const appConstant = AppConstants;
const port = process.env.PORT ?? 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(cors());

app.use(`${process.env.BASE_URL}`, routes);

connectToDB()
.then((db) => {
    console.log(appConstant.SUCCESSFUL);
  })
  .catch((error) => {
    console.log(appConstant.UNSUCCESSFUL, error);
  });


app.listen(port, () => {
    console.log("Server is Running on " + `${port}`);
});