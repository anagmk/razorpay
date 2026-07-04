import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import router from "./routes/payment.route.js";
import path from 'path'

dotenv.config();

const app = express();
app.use(express.static(path.join('public')))
const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/api/payment',router)

app.listen(PORT , () => {
    console.log("server running")
})