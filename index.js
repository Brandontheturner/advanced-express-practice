let express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const bodyParser = require("body-parser");
const contacts = require("./contacts");
const comments = require("./comments");
const products = require("./products");
const vehicles = require("./vehicles");
const contactsRouter = require("./Router/contactsRouter");
const commentsRouter = require("./Router/commentsRouter");
const productsRouter = require("./Router/productsRouter");
const vehiclesRouter = require("./Router/vehiclesRouter");

app.get("/contacts/", (req, res) => {
  res.send(contacts);
});
app.get("/comments/", (req, res) => {
  res.send(comments);
});
app.get("/products/", (req, res) => {
  res.send(products);
});
app.get("/vehicles/", (req, res) => {
  res.send(vehicles);
});
app.use(contactsRouter);
app.use(commentsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});
