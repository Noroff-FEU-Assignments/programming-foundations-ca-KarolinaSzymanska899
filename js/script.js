/*
// question 1

var outOfStock = false;

if (outOfStock) {
  console.log("Out of stock");
} else {
  console.log("In stock");
}

// question 2

for (var i = 15; i <= 25; i++) {
  if (i === 17 || i === 20) {
    console.log(i);
  }
}

// question 3
// You need to do an explicit "null" check here as well.
// "null <= 3.5" evaluates to true, so you will be printing out The title
// and null.

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

function subtraction(number1, number2) {
  var convertedNumber1 = parseFloat(number1);
  var convertedNumber2 = parseFloat(number2);

  var result = 0;
  var container = document.querySelector("#subtraction");
  container.innerHTML = "";

  if (
    typeof convertedNumber1 !== "number" ||
    typeof convertedNumber2 !== "number"
  ) {
    return "Invalid argument(s)";
  } else {
    result = convertedNumber1 - convertedNumber2;
    container.innerHTML = result;
    return result;
  }
}

// question 6

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

var buttonCalculatePrice = document.querySelector(".price");

buttonCalculatePrice.onclick = function calculatePrice() {
  var theTotal = 0;
  for (var i = 0; i < toys.length; i++) {
    var price = parseFloat(toys[i].price);
    if (isNaN(price)) {
      continue;
    } else {
      theTotal += price;
    }
  }
  var total = document.querySelector("#total");
  total.innerHTML = theTotal;
};
*/

// question 5:

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
  const convertedNumber1 = parseFloat(number1);
  const convertedNumber2 = parseFloat(number2);
  const subtractionContainer = document.querySelector("#subtraction");

  if (isNaN(convertedNumber1) || isNaN(convertedNumber2)) {
    subtractionContainer.innerHTML += "Invalid argument(s)";
    console.log("Invalid argument(s)");
  } else {
    const result = convertedNumber1 - convertedNumber2;
    subtractionContainer.innerHTML = result;
    return result;
  }
}

subtraction(100, "100");

// question 6
// Select the button with the class page.
// When the button is clicked do the following:
// Change the title of the page (the value of the title element in the head) to "Updated title".
// Change the background colour of the whole page to "yellow".
// Change the color of the h1 element to "green".
// Change the h1 element's font to "impact".
// Change the value of the h1 element to be a link.
// Remove the list style and padding from the ul element.
// The h1 element should look like this after the click event:
// <h1><a href="#">Programming Foundations Course Assignment</a></h1>

const buttonPage = document.querySelector(".page");
const heading = document.querySelector("h1");
const list = document.querySelector("ul");

buttonPage.onclick = function () {
  document.title = "Updated title";
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
