const cart = [];

function addToCart(price) {
  cart.push(price);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartList = document.querySelector("#cart ul");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(function(price, index) {
    const item = document.createElement("li");
    item.textContent = "$" + price;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function() {
      removeFromCart(index);
    });
    item.appendChild(deleteButton);
    cartList.appendChild(item);
    total += price;
  });

  document.querySelector("#cart p").textContent = "Total: $" + total.toFixed(2);
}

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function(button) {

  button.addEventListener("click", function() {
    const price = parseFloat(button.getAttribute("data-price"));
    addToCart(price);
    
  });
});
