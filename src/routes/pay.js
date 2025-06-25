import express from "express";
import { esewaPayment } from "../controller/esewa.js";

const router = express.Router();

router.post("/esewa", esewaPayment);

export default router;
