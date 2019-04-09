let express = require("express");
const app = express();
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

const thePort = 3001;

app.listen(thePort, () => {
  if (err) {
    return console.log("Error", err);
  }
  console.log(`Web server is listening on port ${thePort}!`);
});
