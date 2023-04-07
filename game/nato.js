let LivingCreature = require("./LivingCreature")

module.exports = class Nato extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        // this.multiply = 0;

        // this.directions = [
        //     [this.x - 1, this.y - 1],
        //     [this.x, this.y - 1],
        //     [this.x + 1, this.y - 1],
        //     [this.x - 1, this.y],
        //     [this.x + 1, this.y],
        //     [this.x - 1, this.y + 1],
        //     [this.x, this.y + 1],
        //     [this.x + 1, this.y + 1],
        // ]
    }



    random(ch, ch1, ch2) {
        let found = this.chooseCell(ch);
        let found1 = this.chooseCell(ch1);
        let found2 = this.chooseCell(ch2);
        let finalfound = found.concat(found1, found2)
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }


    mul() {
        this.multiply++
        // var emptyCell = this.chooseCell(0);
        var newCell = this.random(0)

        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = 7;

            var nt = 5;

            // natoArr.push(nt);

            this.energy = 10

        }
    }

    // getNewCoordinates() {
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1],
    //         [this.x + 1, this.y + 1],
    //     ];
    // }

    chooseCell(char) {
        // this.getNewCoordinates() 
        return super.chooseCell(char)
    }


    move() {
        this.energy--
        // var emptyCell = this.chooseCell(0)
        var newCell = this.random(0)

        if (newCell && this.energy >= 0) {
            var newX = newCell[0]
            var newY = newCell[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
        else {
            if (this.energy < 0) {
                this.die()
            }
        }
    }


    eat() {


        // var emptyCell = this.chooseCell(1)
        var newCell = this.random(1)
        // var newCell = this.random(2)
        var newCell = this.random(3)

        // if (newCell) {
        //     this.energy++
        //     var newX = newCell[0]
        //     var newY = newCell[1]

        //     matrix[newY][newX] = matrix[this.y][this.x]
        //     matrix[this.y][this.x] = 0
        //     this.x = newX
        //     this.y = newY
        //     for (var i in grassArr) {
        //         if (newX == grassArr[i].x && newY == grassArr[i].y) {
        //             grassArr.splice(i, 1)
        //             break;
        //         }
        //     }
        //     if (this.energy >= 15) {
        //         this.mul()
        //     }

        //     for (var i in grassEaterArr) {
        //         if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
        //             grassEaterArr.splice(i, 1);
        //             break;
        //         }

        //     }
        // }
         if (newCell1) {
            this.energy++
            let newX = newCell1[0]
            let newY = newCell1[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            if (this.energy >= 25) {
                this.mul()
            }
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (newCell2) {
            this.energy++
            let newX = newCell2[0]
            let newY = newCell2[1]
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 7
            this.x = newX
            this.y = newY
            if (this.energy >= 25) {
                this.mul()
            }
            for (var i in grassArr) {
                if (newX == AmnArr[i].x && newY == AmnArr[i].y) {
                    AmnArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move()
        }
    }
    // die() {
    //     matrix[this.y][this.x] = 0
    //     for (var i in natoArr) {
    //         if (this.x == natoArr[i].x && this.y == natoArr[i].y) {
    //             natoArr.splice(i, 1);
    //             break;
    //         }
    //     }
    // }
}

