"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Barcelona",
  players: [
    [
      "Neuer", // Goalkeeper
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Muller",
      "Gnabry",
      "Lewandowski",
      "Coman",
    ],
    [
      "Ter Stegen", // Goalkeeper
      "Semedo",
      "Pique",
      "Lenglet",
      "Alba",
      "Busquets",
      "De Jong",
      "Vidal",
      "Messi",
      "Suarez",
      "Griezmann",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnabry", "Lewandowski", "Muller"],
  date: "Nov 1st, 2025",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// to list the name of the players who scored goals using for of loop
for (const [index, players] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${players}`);
}

//  now to calculate the average of odds
let average = 0;
const odds = Object.values(game.odds);
// after the completion of all of tis we also did some sort of refactoring in this code
for (const odd of odds) {
  console.log(odd);
  average += odd;
  console.log(average);
}
average /= odds.length;
console.log(average);

// now to print the odds of winning teams
for (const [team, odds] of Object.entries(game.odds)) {
  //   console.log(team);
  //   console.log(odds);
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odds} `);
}

const scorers = {
  Lewandowski: 2,
  Gnabry: 1,
  Muller: 1,
};

for (const [players, goals] of Object.entries(scorers)) {
  console.log(`${players} scored ${goals} goals`);
}
