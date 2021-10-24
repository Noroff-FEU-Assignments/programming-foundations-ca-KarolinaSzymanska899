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

/*
PATTERN

const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);
*/

/*
MY OLD SOLUTION
var buttonCalculatePrice = document.querySelector(".price");
var price = toys[i].price;
var convertedPrice = parseFloat(price);

buttonCalculatePrice.onclick = function () {
  var theTotal = 0;

  for (var i = 0; i < toys.length; i++) {
    if (isNaN(convertedPrice)) {
      continue;
    } else {
      theTotal = +convertedPrice;
    }
  }

  var total = document.querySelector("#total");
  total.innerHTML = theTotal;
};
*/

var buttonCalculatePrice = document.querySelector(".price");
var total = 0;

buttonCalculatePrice.onclick = function calculatePrice() {
  for (var i = 0; i < toys.length; i++) {
    var price = parseFloat(toys[i].price);
    if (isNaN(price)) {
      continue;
    } else {
      total = total + price;
    }
  }
  console.log(total);
};

calculatePrice();
