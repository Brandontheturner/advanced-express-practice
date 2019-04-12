let express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const bodyParser = require("body-parser");
const contactsRouter = require("./Router/contactsRouter");
const commentsRouter = require("./Router/commentsRouter");
const productsRouter = require("./Router/productsRouter");
const vehiclesRouter = require("./Router/vehiclesRouter");

app.use(contactsRouter);
app.use(commentsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});
