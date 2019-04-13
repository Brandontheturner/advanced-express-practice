let express = require("express");
const contactsRouter = require("./Router/contactsRouter");
const commentsRouter = require("./Router/commentsRouter");
const productsRouter = require("./Router/productsRouter");
const vehiclesRouter = require("./Router/vehiclesRouter");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(contactsRouter);
app.use(commentsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);
const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("Web server is now listening for messages on port", port);
});
