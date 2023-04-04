function alldatas() {
    countd = {
        grass: grassArr.length,
        grassEater: grassEaterArr.length,
        predator: predatorArr.length,
        amn: RusArr.length,
        rus:RusArr.length

    }
    fs.writeFile("stat.json", JSON.stringify(countd), function () {
        io.emit("send datas", countd)
    })

}

function addChar(n) {


    let x = Math.floor(Math.random() * 30)
    let y = Math.floor(Math.random() * 30)
    matrix[y][x] = n
    if (n == 1) {
        var gr = new Grass(x, y)
        grassArr.push(gr)
    }
    else if (n == 2) {
        var grEat = new GrassEater(x, y)
        grassEaterArr.push(grEat)
    }
    else if (n == 3) {
        var pred = new Predator(x, y)
        predatorArr.push(pred)
    }else if (n == 4) {

        var jur = new Jur(x, y)
                jurArr.push(jur)

    }else if (n == 5) {
        var amn = new Amn(x, y)
        AmnArr.push(amn)
    }
    else if (n == 7) {
        var rus = new Rus(x, y)
        RusArr.push(rus)
    }
}
io.on('connection', function (socket) {

        socket.on("send button", addChar);
    })

setInterval(alldatas, 300);