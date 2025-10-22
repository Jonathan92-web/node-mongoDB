const Router = require("express").Router();
const Sale = require("../models/sale.model");
const salesController = require("../controllers/sales.controllers");

/**
 * @route GET /sales
 * @group Sales - Operations about sales
 * @returns {Array.<Sale>} 200 - An array of sales.
 * @returns {string} 500 - "error"
 */
Router.get("/", salesController.list);
/**
 * @route POST /sales
 * @group Sales - Operations about sales
 * @param {Sale.model} sale.body.required - The sale to create.
 * @returns {Sale.model} 200 - The created sale.
 * @returns {string} 500 - "error"
 */
Router.post("/", salesController.create);

module.exports = Router;
