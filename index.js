var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  let tempItem = [];

while (item >= 0) {
  if (!item) {
    return `That item is not in your cart.`;
  }
  tempItem.push(item.name)
}
return tempItem;
}

function placeOrder(cardNumber) {
  // write your code here
}
