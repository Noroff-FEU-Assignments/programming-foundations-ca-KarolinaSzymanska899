// question 1
// You are creating an ecommerce application selling products online.
// Some of the products are no longer in stock, and the user must be made aware of this.
// Create a variable called outOfStock and assign it a boolean value.
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = false;

if (outOfStock) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 2
// Create a for loop that counts from 15 to 25.
// Console log the value of the counter variable inside the loop only if it's
// equal to 17 or 20.

for (var i = 15; i <= 25; i++) {
  if (i === 17 || i === 20) {
    console.log(i);
  }
}
