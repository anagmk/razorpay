import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import router from "./routes/payment.route.js";
import path from 'path'
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT || 3000
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));


app.use(express.json());

app.use('/api/payment',router)

app.listen(PORT , () => {
    console.log("server running")
})