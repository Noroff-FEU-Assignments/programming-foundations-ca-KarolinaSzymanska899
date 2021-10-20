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

  for (var i = 0; i < games.length; i++) {
    if (games[i].rating < 3.5) {
      gameContainer +=
        "<li>" + games[i].title + ": " + games[i].rating + "</li>";
    }
  }
}
