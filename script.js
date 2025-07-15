function buyNow(productName) {
  alert("Thank you for showing interest in " + productName + "! We’ll add payment soon.");
}
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}
