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

// question 3
// You are creating an online game comparison website.
// When provided with a list of games, these should be displayed to the user.

// Loop through the array below and add an li item to the ul element in the HTML
// containing the title and rating of each game only if the rating for the game is below 3.5.
// If a game is unrated, exclude it from the list.

/* The ul element should look similar to this after your code executes:
<ul>
 <li>Name of game: rating</li>
 <li>Name of game: rating</li>
</ul>
*/

var games = [
  {
    title: "Grand Theft Auto",
    rating: 4.48,
  },
  {
    title: "Portal 2",
    rating: 3.5,
  },
  {
    title: "Team Fortress",
    rating: null,
  },
  {
    title: "The Witcher",
    rating: 3.0,
  },
  {
    title: "The Elder Scrolls",
    rating: 2.9,
  },
];

function showGames(games) {
  var gameContainer = document.querySelector("ul");
  gameContainer.innerHTML = "";

  for (var i = 0; i < games.length; i++) {
    var rating = games[i].rating;
    var title = games[i].title;

    if (rating < 3.5) {
      gameContainer.innerHTML += "<li>" + title + ": " + rating + "</li>";
    }
  }
}

// question 4
// Create a function called whatIDontLike that accepts one argument.
// Choose a good name for the argument.
// Inside the function, check if the argument has a string value.
// If it doesn't log the message "Please send in a string".
// If the argument is a string value, log the message:
// "I don't like " together with the argument.
// Call the function and pass in a value of your choice.
// Example:
// If you pass in the value "giraffes", the function should log: "I don't like giraffes".

// Test your function by calling it with a value of each of these types:
// String
// Number
// Boolean
// Null

function whatIDontLike(dislikedThing) {
  var typeOfDislikedThing = typeof dislikedThing;

  if (typeOfDislikedThing === "string") {
    console.log("I don't like " + dislikedThing);
  } else {
    console.log("Please send in a string");
  }
}

whatIDontLike("brussels sprout");
whatIDontLike(25);
whatIDontLike(true);
whatIDontLike(null);

// question 5
// Create a function that accepts two arguments.
// Inside the function, try to convert the arguments to numbers.

// If either of the arguments cannot be converted to a number,
// return the value: "Invalid argument(s)".

// If both arguments are number values or can be converted to number values,
// subtract the second argument from the first and return the result from the function.

// Call the function, pass in to two values
// and assign the return value to be the innerHTML value of the element with the id subtraction.
// Test your function with the following value pairs: (1, 42), (200, 150),
// (10, "50"), ("100", "400"), ("Ten", "One Hundred"), (null, 123);

function subtraction(number1, number2) {
  var convertedNumber1 = parseFloat(number1);
  var convertedNumber2 = parseFloat(number2);
}
