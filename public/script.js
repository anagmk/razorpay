import { response } from "express"

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
        body: JSON.stringify({ key: 'value' })

    })

        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

        
})