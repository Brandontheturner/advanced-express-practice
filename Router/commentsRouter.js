const express = require("express");
const router = express.Router();
const controller = require("../Controllers/commentsController");

router.get("/comments", controller.list);

router.get("/comments/:id", controller.show);

router.post("/comments", controller.create);

module.exports = router;
