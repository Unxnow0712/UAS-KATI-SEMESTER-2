document.getElementById("checkout-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const harga = document.getElementById("harga").innerText;
  const product = document.getElementById("product").innerText;
  localStorage.setItem("harga", harga);
  localStorage.setItem("product", product);
  data.harga = harga;
  data.product = product;

  const confirmationPage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Receipt</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <div class="container2">
                <h1>Your receipt</h1>
                <p>Thank you for your purchase, <strong>${data.name}</strong>!</p>
                <p>Your order has been received and will be processed shortly.</p>
                <h2>Order Details</h2>
                <p><strong>Product:</strong> ${data.product}</p>
                <p><strong>Color:</strong> ${data.color}</p>
                <p><strong>Size:</strong> ${data.size}</p>
                <p><strong>Price:</strong> ${data.harga}</p>
                <h3>Shipping Address</h3>
                <p>${data.name}</p>
                <p>${data.address}</p>
                <p>${data.apartment}</p>
                <p>${data.city}, ${data.country} ${data.zip}</p>
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone Number:</strong> ${data.phone}</p>
                <h3>Delivery</h3>
                <p><strong>Delivery Type:</strong> ${data["delivery-type"]}</p>
                <p><strong>Delivery Service:</strong> ${data["delivery-service"]}</p>
                <h3>Payment</h3>
                <p><strong>Card Number:</strong> **** **** **** ${data["card-number"].slice(-4)}</p>
                <h3>Total</h3>
                <p style="color:red; font-size: 12px;">*Free shipping worldwide</p>
                <h2 style="margin-top: 0.1px">${data.harga}</h2>
                <button onclick="window.print()">Print Receipt</button>
            </div>
        </body>
        </html>
    `;

  const newWindow = window.open();
  newWindow.document.write(confirmationPage);
  newWindow.document.close();
});
