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

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/order', async (req, res) => {
  const menuItems = await db.collection('menu').find().toArray();
  
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});