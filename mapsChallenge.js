"use strict";

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = gameEvents.values();
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened on average after every ${90 / gameEvents.size} minutes`
);

// another way of doing this third task is this

const injuryTime = [...gameEvents.keys()].pop();
console.log(injuryTime);

console.log(
  `An event happened on average after every ${
    injuryTime / gameEvents.size
  } minutes`
);

// for (const [minute, event] of gameEvents) {
//   if (minute <= 45) {
//     console.log(`[FIRST HALF] ${minute}: ${event}`);
//   } else {
//     console.log(`[SECOND HALF] ${minute}: ${event}`);
//   }
// }

// another way of doing which really is is an refactoring of the code
for (const [minute, event] of gameEvents) {
  let half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
  console.log(`${half} ${minute}: ${event}`);
}
