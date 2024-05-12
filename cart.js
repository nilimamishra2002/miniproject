// cart.js
let cart = [];

function addToCart(item, price) {
    cart.push({ item: item, price: price, quantity: 1 });
}

function updateQuantity(item, quantity) {
    const cartItem = cart.find((cartItem) => cartItem.item === item);
    if (cartItem) {
        cartItem.quantity = quantity;
    }
}

function calculateTotal() {
    let total = 0;
    cart.forEach((cartItem) => {
        total += cartItem.price * cartItem.quantity;
    });
    return total;
}
