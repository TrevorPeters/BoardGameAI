var GameBoard = {
    wWon: false,
    bWon: false,
    blocks:[["w", "w", "w", "w", "w", "w", "w", "w", "w"],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["b", "b", "b", "b", "b", "b", "b", "b", "b"],
    [".", "w", "w", "b", "b", ".", ".", ".", "."]],
    Sting: function() {
        return "hello!";
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
    }
 }

export {GameBoard};