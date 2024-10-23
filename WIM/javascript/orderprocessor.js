function processOrder() {
    const orderData = {
        item: document.getElementById('item').value,
        quantity: document.getElementById('quantity').value,
        email: document.getElementById('email').value,
        payment: {
            cardNumber: document.getElementById('cardNumber').value,
            expiryDate: document.getElementById('expiryDate').value,
            cvv: document.getElementById('cvv').value,
            billingAddress: document.getElementById('billingAddress').value
        }
    };

    // Simulate processing the order
    setTimeout(() => {
        document.getElementById('order-status').innerText = 'Order and Payment Successful!';
        sendConfirmationEmail(orderData);
    }, 2000);
}

function sendConfirmationEmail(orderData) {
    const emailParams = {
        to_email: orderData.email,
        item: orderData.item,
        quantity: orderData.quantity,
        card_number: orderData.payment.cardNumber
    };

    emailjs.send('service_ldiw3l9', 'template_8g0cg4g', emailParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}
