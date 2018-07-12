const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const hbs = require('hbs');

var {mongoose} = require('./db/mongoose');
var {Item} = require('./models/items');

var app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// routes

app.get('/', (req, res) => {
  Item.find().then((items) => {
    res.render('home.hbs', {
      items
    });
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/items/:id', (req, res) => {
  var id = req.params.id;
  Item.findById(id).then((item) => {
    if(!item) {
      return res.status(400).send();
    }
    // res.send({item: item});
    res.render('item.hbs', {
      item
    });
  }).catch((e) => {
    res.status(400).send();
  })
});

app.post('/items', (req, res) => {
  var item = new Item({
    name: req.body.name,
    purchasePrice: req.body.purchasePrice,
    salePrice: req.body.salePrice,
    description: req.body.description,
    category: req.body.category,
    // photos: req.body.photos,
    condition: req.body.condition,
    sold: req.body.sold
  });
  item.save().then((doc) => {
    res.send(doc);
    console.log(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.patch('/items/:id', (req, res) => {

});

app.delete('/items/:id', (req, res) => {

});


app.listen(port, () => {
  console.log('Starting server on port ' + port);
})
