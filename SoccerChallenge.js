'use strict';

// We're building a football betting app (soccer for my American friends )
//   Suppose we get data from a web service about a certain game ('game' variable on
//   next page). In this challenge we're gonna work with that data.

/*
Your tasks: 
1. Create one player array for each team (variables 'players1' and 
'players2') 
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players 
3. Create an array 'allPlayers' containing all players of both teams (22 
players) 
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic' 
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2') 
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in) 
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator. */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//2
const [team1gk, ...fieldPlayers] = game.players[0];

//3
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

//4
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...game.players[0]];
console.log(players1Final);

//5

const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

//6
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players[i]} scored a gol!!!🎉😍😛`);
  }
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//7
team1 < team2 && console.log(`team1 is more likly to win`);
team1 > team2 && console.log(`team2 is more likly to win`);

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goalNumber, playerName] of Object.entries(game.scored)) {
  console.log(`Goal ${goalNumber + 1} : ${playerName} 🎉🎉😍`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
let sum = 0;
for (const eachOdd of Object.values(game.odds)) {
  sum += Number(eachOdd);
}
const average = sum / Object.entries(game.odds).length;
console.log('average odd is ' + average);

// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names
// �
// �
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(
    `Odds of ${team === 'x' ? 'draw' : 'victory'} ${
      team != 'x' ? game[team] : ''
    }: ${odd}`
  );
}
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// }
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
const scores = {};
const arr = [];
for (const playerScored of game.scored) {
  arr.includes(playerScored)
    ? (scores[playerScored] += 1)
    : (scores[playerScored] = 1);
  arr.push(playerScored);
  console.log(arr);
}

console.log(scores);

// SET
const ordersSet = new Set(['pizza', 'lasania', 'bread', 'pizza', 'lasania']);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.add('ise cream'));
console.log(ordersSet.delete('pizza')); // returns true or false if the element was found and deleted or now
console.log(ordersSet.clear()); // remove all the elements from a set

// usecase for a set
const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

// MAP
const rest = new Map();
rest.set('name', 'Spirit Elefant');
rest.set(1, 'Spirit Elefant 1');
rest.set(2, 'Spirit Elefant 2').set(3, 'Alice&Friends'); // set method returns a map so we can apply set method again
console.log(rest);
console.log(rest.has(1));
console.log(rest.delete(1));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉🎉🎉'],
  [false, 'Try again!🤷‍♀️🤷‍♀️🤦‍♂️'],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('what would be your answer???'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

const arrayFromMap = [...question];
console.log(arrayFromMap);

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(
  `An event happened, on average, every ${90 / events.length} minutes`
);
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:
for (const [time, event] of gameEvents.entries()) {
  const gamePeriod = time <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${gamePeriod} HALF] ${time}: ${event}`);
}
