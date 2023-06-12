var today = new Date();
var hourNow = today.getHours();
var greetings;
if (hourNow >=18) {
    greeting = 'Good evening!';
} else if (hourNow >= 12) {
    greeting ='Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!'
}
document.write(greeting);

//Create Three variables to store the information needed.
var price;
var quantity;
var total;

//Assign values to the price and quantity variables.
price = 5;
quantity = 14;
//Calculate the total by multiplying the price by quantity.
total = price * quantity;

//get the element with an id of cost.

var el = document.getElementById('cost');
el.textContent = '$' + total;
