import razorpayIntance from '../config/roazorpay.intance.js'


export const createOrder = async (req, res) => {

    const options = {
        amount: 500,
        currency: "INR",
        receipt: "reciept_01"
    }

    const order = await razorpayIntance.orders.create(options)
    res.status(201).json(order)

}

