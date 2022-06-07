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

/*
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
<<<<<<< HEAD
=======
    console.log("Invalid argument(s)");
>>>>>>> 0f509d2eab18541eb23e90edbc69d7031f4d2688
  } else {
    const result = convertedNumber1 - convertedNumber2;
    subtractionContainer.innerHTML = result;
    return result;
  }
}

<<<<<<< HEAD
subtraction(100, "90");
=======
subtraction(100, "100");
>>>>>>> 0f509d2eab18541eb23e90edbc69d7031f4d2688

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
<<<<<<< HEAD
};
*/
=======
}; */
>>>>>>> 0f509d2eab18541eb23e90edbc69d7031f4d2688
