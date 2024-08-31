document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
});

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    
    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalContainer.innerHTML = '';
    } else {
        // Display each item in the cart with a remove button
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-img">
                <div class="cart-item-details">
                    <h2>${item.name}</h2>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: LKR${item.price.toFixed(2)}</p>
                    <p>Total: LKR${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `).join('');

        // Calculate and display the total price
        const totalPrice = calculateTotalPrice(cart);
        cartTotalContainer.innerHTML = `<p>Total: LKR${totalPrice.toFixed(2)}</p>`;
    }
}

function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove the item at the specified index
    cart.splice(index, 1);
    
    // Update localStorage with the new cart data
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Re-render the cart items
    displayCartItems();
}
