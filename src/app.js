/**
 * @file This file is the main entry point for the application.
 * It sets up the Express server, connects to the database, and configures the routes.
 * @author Jonathan
 * @version 1.0.0
 */

// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Import routes
const productRoutes = require("./routes/product.routes");
const salesRoutes = require("./routes/sale.routes");
const customerSuscriptionRoutes = require("./routes/customers.routes");
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then((db) => console.log("Connected to the database"))
  .catch((err) => console.log(err));

// Configure middleware
app.use(express.urlencoded({ extended: false }));

// Configure routes
/**
 * @route GET /
 * @group Root - Root endpoint
 * @returns {string} 200 - "Hello from Vercel"
 */
app.get("/", function (req, res) {
  res.send("Hello from Vercel");
});
app.use("/products", productRoutes);
app.use("/sales", salesRoutes);
app.use("/customers", customerSuscriptionRoutes);

// Start the server
/**
 * Callback function for when the server starts listening.
 * @returns {void}
 */
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
