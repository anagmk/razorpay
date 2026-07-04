const payButton = document.getElementById('pay-button')
const amount = document.getElementById('amount')
const name = document.getElementById('name')
const email = document.getElementById('email')
const contact = document.getElementById('contact')
const status = document.getElementById('status')

payButton.addEventListener('click', () => {
    fetch('http://localhost:3000/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amount.value })

    })

        .then(response => response.json())
        .then(data => {

            const options = {
                key: data.key,
                amount: data.amount,
                currency: data.currency,
                name: "Practice Payment",
                description: "Razorpay Practice",
                order_id: data.id,

                prefill: {
                    name: name.value,
                    email: email.value,
                    contact: contact.value
                },

                handler: function (response) {
                    console.log("Payment Success");
                    console.log(response);
                },
                modal: {
                    ondismiss: function () {
                        console.log("Payment window closed");
                    }
                }
            };

            const rzp = new Razorpay(options);
            rzp.open();

        })
        .catch (error => console.error('Error:', error));


})