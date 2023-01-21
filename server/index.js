import express from "express";
import connection from "./database/db.js";
import cors from "cors";
import Routes from "./routes/route.js";

const app = express();

connection();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Routes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running Successfully on port ${PORT} `);
});
