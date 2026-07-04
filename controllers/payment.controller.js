import razorpayIntance from '../config/roazorpay.intance.js'


export const createOrder = async (req, res) => {
    const { amount } = req.body

    const options = {
        amount: amount,
        currency: "INR",
        receipt: "reciept_01"
    }

    const order = await razorpayIntance.orders.create(options)
    res.status(201).json({ ...order, key: process.env.RAZORPAY_API_KEY })

}

