const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const PORT = 3000;
require('dotenv').config();

let db,
    dbConnectionStr = process.env.DB_STRING;
    dbName = 'restaurant'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }).then(
  (client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
  }
);

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
