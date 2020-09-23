import {GameBoard} from './GameBoard.js'

document.getElementById("start").onclick = function(){
    var playerOne = document.getElementById("playerOne").value;
    var playerTwo = document.getElementById("playerTwo").value;
    var AI = document.getElementById("AI").value;
    var playerOneToken = document.getElementById("playerOneToken").value;
    //alert("\n text " + playerTwo + playerOne + AI + playerOneToken);
    var Game = GameBoard;
    Game.rotateRight(3);
    //var board = Game.toString();
    //alert(board);
    document.getElementById("GameBoardDisplay").innerHTML = Game.toString();  
}
