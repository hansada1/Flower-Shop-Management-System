// Example function to add items to the cart
function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex >= 0) {
        // If the item already exists, update the quantity
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // Otherwise, add the new item
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

// Example usage of addToCart
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = {
            name: 'Red Roses',   // Replace with dynamic data
            quantity: 1,         // Replace with dynamic data
            price: 1500.00,      // Replace with dynamic data
            image: 'images/red-roses.jpg'  // Replace with dynamic data
        };
        addToCart(item);
    });
});

