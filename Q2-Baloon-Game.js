/*
Question - 2

A video game consists of two players floating using 100 helium balloons. 
The players shoot pellets at each other’s balloons and after 10 minutes the player with the most balloons left wins.

Create a class name Player
Write a game function balloonAttack that takes two Player instances, calculates the balloons left for each player after 10 minutes (using the hitsPerMinute property) and returns the name of the winner. 
If the result is a tie, return the string 'Tie'.
*/

// Answer

class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

// Function to select the winner
const balloonAttack = (player_1, player_2) => {
  let balloonLeftPlayer1 = player_1.balloonCount / player_2.hitsPerMinute;
  let balloonLeftPlayer2 = player_2.balloonCount / player_1.hitsPerMinute;

  if(balloonLeftPlayer1 > balloonLeftPlayer2) {
    player_1.balloonCount = balloonLeftPlayer1;
    player_2.balloonCount = balloonLeftPlayer2
    return (`Winner is ${player_1.name} 🎉`);

  } else if(balloonLeftPlayer1 < balloonLeftPlayer2) {
    player_2.balloonCount = balloonLeftPlayer2;
    player_1.balloonCount = balloonLeftPlayer1;
    return (`Winner is ${player_2.name} 🎉`);
  } 
  player_2.balloonCount = balloonLeftPlayer1;
  return 'Tie';
}

// Test
const player1 = new Player('Joe', 10);
const player2 = new Player('Matt', 5);

console.log(balloonAttack(player1, player2));

player1.status();
player2.status();
