const express = require('express');
const app = express();

//router
const router = require('../src/routes/routes');

//cors
const cors = require('cors');

//body-parser
const bodyParser = require('body-parser');

//dotenv
require('dotenv').config();

const { dataSource } = require('../src/database/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

async function run() {
  try {
    await dataSource.initialize();
    console.log("dataSource  initialized");
    app.listen(process.env.port, () => {
      console.log(`server listening on port ${process.env.port}`);
    });
  } catch (err) {
    console.error(err.message);
  }
}
run();
