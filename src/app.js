// Importar paquetes requeridos
const express = require("express");
const mongoose = require("mongoose");
const cors =require("cors");
const app = express();

// Habilitar Cross-Origin Resource Sharing
app.use(cors());

// Importar rutas
const productRoutes = require("./routes/product.routes");
const salesRoutes = require("./routes/sale.routes");
const customerSuscriptionRoutes = require("./routes/customers.routes");
require("dotenv").config();

// Conectar a MongoDB
mongoose
  .connect(process.env.DB_URL)
  .then((db) => console.log("Conectado a la base de datos"))
  .catch((err) => console.log(err));

// Configurar middleware
app.use(express.urlencoded({ extended: false }));

// Configurar rutas
/**
 * @route GET /
 * @group Raíz - Endpoint raíz
 * @returns {string} 200 - "Hola desde Vercel"
 */
app.get("/", function (req, res) {
  res.send("Hola desde Vercel");
});
app.use("/products", productRoutes);
app.use("/sales", salesRoutes);
app.use("/customers", customerSuscriptionRoutes);

// Iniciar el servidor
/**
 * Función de callback para cuando el servidor empieza a escuchar.
 * @returns {void}
 */
app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
