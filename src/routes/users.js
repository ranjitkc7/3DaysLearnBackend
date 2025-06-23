import express from "express";
import { getAllUsers, createUser } from "../controller/users.js";

const router = express.Router();
// router.get("/", function (req, res) {
//   res.send("Users Route");
// });
router.get("/", getAllUsers);
router.post("/", createUser);

export default router;
