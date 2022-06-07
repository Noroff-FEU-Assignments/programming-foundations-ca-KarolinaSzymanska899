/*
// question 1
// You are creating an ecommerce application selling products online.
// Some of the products are no longer in stock, and the user must be made aware of this.
// Create a variable called outOfStock and assign it a boolean value.
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

const outOfStock = false;

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

The ul element should look similar to this after your code executes:
<ul>
 <li>Name of game: rating</li>
 <li>Name of game: rating</li>
</ul>

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

console.log(games);

function showGames(games) {
  const gamesContainer = document.querySelector("ul");
  gamesContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    const rating = games[i].rating;
    const title = games[i].title;

    // If rating is missing then there is no point doing the rest of the code
    // that's why you need to check for it first:
    if (rating === null) {
      continue;
    }
    if (rating < 3.5) {
      gamesContainer.innerHTML += `<li> <h2>${title}: ${rating}</h2></li>`;
    }
  }
}

showGames(games);

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
*/

// question 5

function subtraction(number1, number2) {
  const convertedNumber1 = parseFloat(number1);
  const convertedNumber2 = parseFloat(number2);
  const subtractionContainer = document.querySelector("#subtraction");

  if (isNaN(convertedNumber1) || isNaN(convertedNumber2)) {
    subtractionContainer.innerHTML += "Invalid argument(s)";
  } else {
    const result = convertedNumber1 - convertedNumber2;
    subtractionContainer.innerHTML = result;
    return result;
  }
}

subtraction(100, "90");

/*
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

// corrected the function on my own

const buttonCalculatePrice = document.querySelector(".price");
const totalContainer = document.querySelector("#total");

buttonCalculatePrice.onclick = function calculatePrice() {
  let total = 0;

  for (let i = 0; i < toys.length; i++) {
    const price = toys[i].price;
    const convertedPrice = parseFloat(price);

    if (isNaN(convertedPrice)) {
      continue;
    } else {
      total += convertedPrice;
      totalContainer.innerHTML = total;
      console.log(total);
    }
  }
};

/* var buttonCalculatePrice = document.querySelector(".price");

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
