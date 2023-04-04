let LivingCreature = require("./LivingCreature")

module.exports = class Predator extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 3;
        this.multiply = 0
        this.directions = [];
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
        ];
    }


    random(ch) {
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }

    chooseCell(char) {
        this.getNewCoordinates()
        return super.chooseCell(char)
    }


    mul() {
        this.multiply++;
        // var emptyCell = this.random(2);
        // var newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)];

        let newCell = this.random(2)

        // console.log(emptyCells);
        if (newCell && this.multiply >= 10) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;

            var pre = new Predator(newX, newY);
            predatorArr.push(pre);
            this.multiply = 0;
        }
    }

    move() {
        this.energy--
        // var emptyCells = this.chooseCell(2)
        // var newCell = random(emptyCells);
        var newCell = this.random(2)
        // console.log(newCell);

        if (newCell && this.energy >= 0) {
            // console.log(newCell)
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }


    }



}