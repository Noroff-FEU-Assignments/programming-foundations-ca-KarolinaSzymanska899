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

// question 5 NOT WORKING
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

/* function subtraction(number1, number2) {
  var container = document.querySelector("#subtraction");
  var result = container.innerHTML;
  var convertedNumer1 = parseFloat(number1);
  var convertedNumer2 = parseFloat(number2);

  var typeOfConvertedNumber1 = typeof convertedNumer1;
  var typeOfConvertedNumber2 = typeof convertedNumer2;

  if (
    typeOfConvertedNumber1 === "number" &&
    typeOfConvertedNumber2 === "number"
  ) {
    return result;
  } else {
    result = "Invalid argument(s)";
    return result;
  }
}

subtraction(1, 5);
*/

// question 6
// +Select the button with the class page.
// When the button is clicked do the following:
// Change the title of the page (the value of the title element in the head) to "Updated title".
// Change the background colour of the whole page to "yellow".
// Change the color of the h1 element to "green".
// Change the h1 element's font to "impact".
// Change the value of the h1 element to be a link.
// Remove the list style and padding from the ul element.
// The h1 element should look like this after the click event:
// <h1><a href="#">Programming Foundations Course Assignment</a></h1>

var buttonPage = document.querySelector(".page");
var heading = document.querySelector("h1");
var list = document.querySelector("ul");

buttonPage.onclick = function pageStyleUpdate() {
  document.title = "Updated title";
  document.body.style.backgroundColor = "yellow";
  heading.style.color = "green";
  heading.style.fontFamily = "impact";
  heading.innerHTML = "";
  heading.innerHTML +=
    "<a href=#>" + "Programming Foundations Course Assignment" + "</a>";
  list.style.listStyleType = "none";
  list.style.padding = "0";
};

// question 7
// Select the button with the class price.
// When the button is clicked, loop through the array below, add all the prices
// and assign the total to be the innerHTML value of the element with the id total:

var toys = [
  {
    name: "Lego",
    price: 15.6,
  },
  {
    name: "Master of the Universe",
    price: "28.3",
  },
  {
    name: "Barbie",
    price: null,
  },
  {
    name: "Mr Potato Head",
    price: 89.99,
  },
];
ew;
