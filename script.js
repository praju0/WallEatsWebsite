function printReceipt() {
  const receipt = document.getElementById("receipt");
  const receiptList = document.getElementById("receipt-items");
  const receiptTotal = document.getElementById("receipt-total");

  // Clear previous receipt
  receiptList.innerHTML = "";

  // If cart is empty, show message
  if (Object.keys(cart).length === 0) {
    alert("Your cart is empty. Please add items before printing.");
    return;
  }

  // Populate receipt
  for (let item in cart) {
    const li = document.createElement("li");
    li.textContent = `${item} x${cart[item].quantity} — ₹${cart[item].subtotal}`;
    receiptList.appendChild(li);
  }

  receiptTotal.textContent = total;

  // Temporarily show receipt section and print
  receipt.style.display = "block";

  // Hide everything else
  document.body.innerHTML = receipt.outerHTML;

  window.print();

  // Reload page after print to bring back original content
  location.reload();
}
function placeOrder(table, order) {
  fetch("https://script.google.com/macros/s/AKfycbxPxx8vIgWv0frjG5LIQ7eM__dVewNLXEbXC-BWOQzqZeawlWSHI47WS0anSupazoeTYw/exec", {
    method: "POST",
    body: JSON.stringify({ table: table, order: order })
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ Order placed! Row: " + data.row);
  })
  .catch(err => console.error(err));
}



