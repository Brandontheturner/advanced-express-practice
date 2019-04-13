const express = require("express");
const router = express.Router();
const controller = require('../Controllers/vehiclesController');

router.get('/vehicles', (req, res) => res.json(controller.list()));

router.get('/vehicles/:id', (req, res) => )

module.exports = router;
