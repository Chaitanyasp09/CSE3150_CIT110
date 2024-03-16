var totalPrice = 0;

function addToCart(itemName, price) {
    // Create a new list item with the item name and price
    var listItem = document.createElement("li");
    listItem.textContent = itemName + ' - Rs  ' + price.toFixed(2);

    // Append the list item to the cart
    document.getElementById("cart-items").appendChild(listItem);

    // Update total price
    totalPrice += price;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);

    // Scroll to the cart section
    document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
}

function proceedToCheckout() {
    // You can implement the checkout logic here, such as redirecting to a checkout page
    alert("Redirecting to checkout page. Total: Rs" + totalPrice.toFixed(2));
}
