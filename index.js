import {GameBoard} from './GameBoard.js'

var playerOne;
var playerTwo;
var AI;
var playerOneToken;
var playerTwoToken;
var Game = GameBoard;
var turn = 0;
document.getElementById("start").onclick = function Initialize() {
    playerOne = document.getElementById("playerOne").value;
    playerTwo = document.getElementById("playerTwo").value;
    AI = document.getElementById("AI").value;
    playerOneToken = document.getElementById("playerOneToken").value.toLowerCase();
    playerTwoToken = (playerOneToken == "w") ? "b" : "w";
    //alert("text " + playerTwo + playerOne + AI + playerOneToken + playerTwoToken);
    //alert(Game.checkWinner());
    document.getElementById("GameBoardDisplay").innerHTML = Game.toString();  
}

document.getElementById("move").onclick = function move() {
    var pos = document.getElementById("position").value;
    var rot = document.getElementById("rotation").value;
    var token = (turn == 0) ? playerOneToken : playerTwoToken;
    turn = (turn + 1) % 2;
    Game.insertToken(token, pos);
    Game.checkWinner();
    Game.rotate(rot);
    Game.checkWinner();
    document.getElementById("GameBoardDisplay").innerHTML = Game.toString();
}
