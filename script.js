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
