import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/appRouter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza con el origen de tu front-end
  }),
);

app.use(express.json());
app.use("/api", router);

// Ruta raiz
app.get("/", (req, res) => {
  console.log("Bienvenido al servidor de Master Star Barber Shop...");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>
    console.log("Contectado a la BD de Master Star Barber Shop en MongoDb"),
  )
  .catch((err) => console.error(err));

app.listen(port, () =>
  console.log(`Servidor en ejecución en http://localhost/${port}`),
);
