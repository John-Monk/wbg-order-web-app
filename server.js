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

const diningLocations = ['table-1', 'table-2', 'table-3', 'table-4', 'table-5', 'table-7', 'table-8', 'table-9', 'table-10', 'bar', 'to-go'];

app.get('/order/:id', async (req, res) => {
  const menuItems = await db.collection('menu').find().toArray();
  const locationId = req.params.id;
  if(!diningLocations.includes(locationId)){
    return res.status(403).send('Invalid dining area.')
  }
  res.render('order.ejs', { items: menuItems, location: locationId })
})

app.post('/order', async (req, res) => {
  // db.collection('orders').insertOne({item: req.body.menuItem})
  console.log(req.body)
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});