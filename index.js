let express = require("express");
const app = express();
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
const port = process.env.PORT || 4001;
const bodyParser = require("body-parser");
const contactsRouter = require("./contactsRouter");

app.use(contactsRouter);

app.get("/vehicles", (req, res) => {
  res.json(vehicles);
});

app.get("/vehicles/:id", (req, res) => {
  const userId = vehicles.findIndex(vehicles => {
    return vehicles._id == req.params.id;
  });
  res.json(vehicles[userId]);
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/comments/:id", (req, res) => {
  const userId = comments.findIndex(comments => {
    return comments._id == req.params.id;
  });
  res.json(comments[userId]);
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const userId = products.findIndex(products => {
    return products._id == req.params.id;
  });
  res.json(products[userId]);
});

app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});
