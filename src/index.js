import express from "express";
import users from "./routes/users.js";
import products from "./routes/products.js";
import pay from "./routes/pay.js";
import { db } from "./db/db.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World... K xa ");
});
app.use("/users", users);
app.use("/products", products);
app.use("/pay", pay);

app.listen(1111, () => {
  console.log("Running at the port 1111");
});

export default app;
