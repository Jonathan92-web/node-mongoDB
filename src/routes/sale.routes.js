const Router = require("express").Router();
const Sale = require("../models/sale.model");
const salesController = require("../controllers/sales.controllers");

Router.get("/", salesController.list);
Router.post("/", salesController.create);

module.exports = Router;
