import { ShoppingCart } from "./shopping-cart";

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({name: 'Camiseta', price: 49.91});
shoppingCart.addItem({name: 'Caderno', price: 9});
shoppingCart.addItem({name: 'Lápis', price: 1.59});

console.log(shoppingCart.items);
console.log(shoppingCart.total());
shoppingCart.checkout();
