import {GameBoard} from './GameBoard.js'

document.getElementById("start").onclick = function(){
    var playerOne = document.getElementById("playerOne").value;
    var playerTwo = document.getElementById("playerTwo").value;
    var AI = document.getElementById("AI").value;
    var playerOneToken = document.getElementById("playerOneToken").value.toLowerCase();
    var playerTwoToken = (playerOneToken == "w") ? "b" : "w";
    //alert("text " + playerTwo + playerOne + AI + playerOneToken + playerTwoToken);
    var Game = GameBoard;
    //Game.rotate("4R");
    alert(Game.checkWinner());
    //alert(Game.bWon + "\n" + Game.wWon);
    document.getElementById("GameBoardDisplay").innerHTML = Game.toString();  
}
