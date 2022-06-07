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
}; */
