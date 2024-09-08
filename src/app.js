const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

//importar rutas
const productRoutes = require("./routes/product.routes");
const salesRoutes = require("./routes/sale.routes");
const customerSuscriptionRoutes = require("./routes/customers.routes");
require("dotenv").config();

//conectarnos a mongoose
mongoose
  .connect(process.env.DB_URL)
  .then((db) => console.log("Conectado a la base de datos"))
  .catch((err) => console.log(err));

//configuraciones
app.use(express.urlencoded({ extended: false }));

//configurar rutas
app.get("/", function (req, res) {
  res.send("Hola desde Vercel");
});
app.use("/products", productRoutes);
app.use("/sales", salesRoutes);
app.use("/customers", customerSuscriptionRoutes);

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
