import {GameBoard} from './GameBoard.js'

var AI;
var playerOneToken = "w";
var playerTwoToken = "b";
var Game = GameBoard;
var turn = 0;

document.getElementById("GameBoardDisplay").innerHTML = Game.toString();  

document.getElementById("start").onclick = function Initialize() {
    AI = document.getElementById("AI").value;
    document.getElementById("playerTurn").innerHTML = "Player " + (turn + 1) + "'s turn";
}

document.getElementById("move").onclick = function move() {
    if (Game.bWon || Game.wWon){
        document.getElementById("playerTurn").innerHTML = "Game Over!";
        return;
    }
    var pos = document.getElementById("position").value;
    var rot = document.getElementById("rotation").value;
    var token = (turn == 0) ? playerOneToken : playerTwoToken;
    turn = (turn + 1) % 2;
    Game.insertToken(token, pos);
    Game.checkWinner();
    Game.rotate(rot);
    Game.checkWinner();
    document.getElementById("GameBoardDisplay").innerHTML = Game.toString();
    document.getElementById("playerTurn").innerHTML = "Player " + (turn + 1) + "'s turn";
}
