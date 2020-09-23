var GameBoard = {
    wWon: false,
    bWon: false,
    blocks:[[".", "w", ".", ".", "w", ".", ".", "w", "."],
    [".", ".", "w", ".", "w", ".", "w", ".", "."],
    [".", ".", "w", ".", "w", ".", "w", ".", "."],
    ["w", ".", ".", ".", "w", ".", ".", ".", "w"]],
    insertToken: function(token, move) {
        var valid = false;
        
        var block = Number(move.charAt(0)) - 1;
        var index = Number(move.charAt(2)) - 1;
        if (0 <= block && block < 4 
        && 0 <= index && index < 9 
        && this.blocks[block][index] == ".") {
            this .blocks[block][index] = token;
            valid = true;
        }
        return valid;
    },
    toString: function() {
        var s = "+-------+-------+<br>" + 
            "| " + this.blocks[0][0] + " " + this.blocks[0][1] + " " + this.blocks[0][2] +
            " | " + this.blocks[1][0] + " " + this.blocks[1][1] + " " + this.blocks[1][2] + " |<br>" +
            "| " + this.blocks[0][3] + " " + this.blocks[0][4] + " " + this.blocks[0][5] + 
            " | " + this.blocks[1][3] + " " + this.blocks[1][4] + " " + this.blocks[1][5] + " |<br>" +
            "| " + this.blocks[0][6] + " " + this.blocks[0][7] + " " + this.blocks[0][8] +
            " | " + this.blocks[1][6] + " " + this.blocks[1][7] + " " + this.blocks[1][8] + " |<br>" +
            "+-------+-------+<br>" +
            "| " + this.blocks[2][0] + " " + this.blocks[2][1] + " " + this.blocks[2][2] +
            " | " + this.blocks[3][0] + " " + this.blocks[3][1] + " " + this.blocks[3][2] + " |<br>" +
            "| " + this.blocks[2][3] + " " + this.blocks[2][4] + " " + this.blocks[2][5] +
            " | " + this.blocks[3][3] + " " + this.blocks[3][4] + " " + this.blocks[3][5] + " |<br>" +
            "| " + this.blocks[2][6] + " " + this.blocks[2][7] + " " + this.blocks[2][8] +
            " | " + this.blocks[3][6] + " " + this.blocks[3][7] + " " + this.blocks[3][8] + " |<br>" +
            "+-------+-------+";
        return s;
    },
    rotate: function(move) {
        
        var block = Number(move.charAt(0)) - 1;

        (move.charAt(1).toLowerCase() == 'l') ? this.rotateLeft(block) : this.rotateRight(block);
    },
    rotateLeft: function(block) {
        var tempBlock = [...this.blocks[block]];
        this.blocks[block][0] = tempBlock[2];
        this.blocks[block][1] = tempBlock[5];
        this.blocks[block][2] = tempBlock[8];
        this.blocks[block][3] = tempBlock[1];
        this.blocks[block][5] = tempBlock[7];
        this.blocks[block][6] = tempBlock[0];
        this.blocks[block][7] = tempBlock[3];
        this.blocks[block][8] = tempBlock[6];
    },
    rotateRight: function(block) {
        var tempBlock = [...this.blocks[block]];
        this.blocks[block][0] = tempBlock[6];
        this.blocks[block][1] = tempBlock[3];
        this.blocks[block][2] = tempBlock[0];
        this.blocks[block][3] = tempBlock[7];
        this.blocks[block][5] = tempBlock[1];
        this.blocks[block][6] = tempBlock[8];
        this.blocks[block][7] = tempBlock[5];
        this.blocks[block][8] = tempBlock[2];
    },
    checkFullBoard: function() {
        if  (!(this.blocks[0].includes(".") 
            || this.blocks[1].includes(".") 
            || this.blocks[2].includes(".") 
            || this.blocks[3].includes("."))) {
            this.wWon = true;
            this.bWon = true;
        }
    },
    checkWinner: function() {
        var strings = this.toString().replaceAll(/[->|< +]/g, "").split("br")
                                .filter(line => line.length != 0);
                               
        //check horizontal victory
        for(var row = 0; row < 6; row++){
            for(var start = 0; start < 2; start++){
                var line = strings[row].substring(start, start + 5);
                if ("wwwww" === line)
                    this.wWon = true;
                else if ("bbbbb" === line)
                    this.bWon = true;
            }
        }
        //check vertical victory
        for(var column = 0; column < 6; column++) {
            for(var start = 0; start < 2; start++) {
                var line = strings[start].charAt(column)
                         + strings[start + 1].charAt(column)
                         + strings[start + 2].charAt(column)
                         + strings[start + 3 ].charAt(column)
                         + strings[start + 4].charAt(column);
                if ("wwwww" === line)
                    this.wWon = true;
                else if ("bbbbb" === line)
                    this.bWon = true;
            }
        }
        //check diagonal (\) victory
        for(var row = 0; row < 2; row++) {
            for(var column = 0; column < 2; column++) {
                var line = strings[row].charAt(column)
                         + strings[row + 1].charAt(column + 1)
                         + strings[row + 2].charAt(column + 2)
                         + strings[row + 3 ].charAt(column + 3)
                         + strings[row + 4].charAt(column + 4);
                if ("wwwww" === line)
                    this.wWon = true;
                else if ("bbbbb" === line)
                    this.bWon = true;
            }
        }
        //check diagonal (/) victory
        for(var row = 0; row < 2; row++) {
            for(var column = 5; column > 3; column--) {
                var line = strings[row].charAt(column)
                         + strings[row + 1].charAt(column - 1)
                         + strings[row + 2].charAt(column - 2)
                         + strings[row + 3 ].charAt(column - 3)
                         + strings[row + 4].charAt(column - 4);
                if ("wwwww" === line)
                    this.wWon = true;
                else if ("bbbbb" === line)
                    this.bWon = true;
            }
        }
        return this.bWon || this.wWon;
    }
 }

export {GameBoard};