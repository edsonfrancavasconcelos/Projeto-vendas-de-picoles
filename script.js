


const buttons = document.querySelectorAll('button');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
let cart = [];

buttons.forEach(button => {
	button.addEventListener('click', () => {		
	});
});
// Adiciona produto ao carrinho
function addToCart(item) {
  const product = {
    name: item.querySelector('h3').innerText,
    price: parseFloat(item.querySelector('p').innerText.replace('R$ ', '')),
    quantity: 1
  };

  const existingProduct = cart.find(p => p.name === product.name);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push(product);
  }

  showCart();
}

// Mostra os itens no carrinho
function showCart() {
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>R$ ${item.price.toFixed(2)}</span>
      <span>${item.quantity}</span>
    `;
    cartItems.appendChild(cartItem);
  });

  cartTotal.innerText = `Total: R$ ${getCartTotal().toFixed(2)}`;
}

// Calcula o total do carrinho
function getCartTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Adiciona evento de clique aos botões "Comprar"
buttons.forEach(button => {
  button.addEventListener('click', () => {
    addToCart(button.parentElement);
  });
});
