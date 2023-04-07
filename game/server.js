var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function ( req,res) {
res.redirect('index1.html');
});

server.listen(3000);





function matrixGenerator(matrixSize,grassCount,grEatCount,predatorCount,RusCount,AmnCount,natoCount){
   
    let matrix = [];

      for(let i = 0; i < matrixSize;i++){
              matrix[i] = []
          for(let j = 0; j < matrixSize; j++){
                  matrix[i][j] = 0;
          }
      }

      for(let i = 0 ; i < grassCount; i++ ){
            
           let x  = Math.floor(Math.random() * matrixSize)
           let y  = Math.floor(Math.random() * matrixSize)

                 if(matrix[y][x] == 0){
                     matrix[y][x] = 1;
                 }

      }

      for(let i = 0 ; i < grEatCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 2;
               }

    }
    for(let i = 0 ; i < predatorCount; i++ ){
            
         let x  = Math.floor(Math.random() * matrixSize)
         let y  = Math.floor(Math.random() * matrixSize)

               if(matrix[y][x] == 0){
                   matrix[y][x] = 3;
               }

    }

    for (var i = 0; i <RusCount; i++) {

      let x  = Math.floor(Math.random() * matrixSize)
      let y  = Math.floor(Math.random() * matrixSize)
       
              if (matrix[y][x] == 0) {
                  matrix[y][x] = 4
      
           }
    }
    for (var i = 0; i <AmnCount; i++) {

      let x  = Math.floor(Math.random() * matrixSize)
      let y  = Math.floor(Math.random() * matrixSize)
       
              if (matrix[y][x] == 0) {
                  matrix[y][x] = 5
      
           }
    }
    for (var i = 0; i <natoCount; i++) {

      let x  = Math.floor(Math.random() * matrixSize)
      let y  = Math.floor(Math.random() * matrixSize)
       
              if (matrix[y][x] == 0) {
                  matrix[y][x] = 7
      
           }
    }
     io.emit("send matrix",matrix)
     return matrix ; 
}


 matrix = matrixGenerator(30,80,80,25,9,9,1);


 
grassArr = []
grassEaterArr = []
predatorArr = []
RusArr = []
AmnArr = []
natoArr = []



const Grass = require("./Grass")
const GrassEater = require("./grassEater")
const Predator = require("./predator")
const Amn = require("./Amn")
const Rus = require("./rus")
const nato = require("./nato")



function fakeSetup() {
    for(var y = 0 ; y < matrix.length ;y++){
        for(var x = 0; x < matrix[y].length;x++){
                       if(matrix[y][x] == 1){
                       var gr = new Grass(x,y)

                            grassArr.push(gr)
                       }else  if(matrix[y][x] == 2){
                          var grEat = new GrassEater(x,y)

                          grassEaterArr.push(grEat)
                     }else  if(matrix[y][x] == 3){
                          var pre = new Predator(x,y)

                          predatorArr.push(pre)
                     }else  if(matrix[y][x] == 4){
                        var Ru = new Rus (x,y)

                        RusArr.push(Ru)
                   }else  if(matrix[y][x] == 5){
                    var Am = new Amn (x,y)
                    AmnArr.push(Am)

               }else  if(matrix[y][x] == 7){
                var nt = new nato (x,y)
                natoArr.push(nt)
           }
        }
   }
   io.emit("send matrix",matrix)


}


fakeSetup()



function mool() {
      for(var i in grassArr){
            grassArr[i].mul()
     }

     for (let j in grassEaterArr) {

       grassEaterArr[j].eat()
    }

     for (let j in predatorArr) {
       predatorArr[j].mul()
       predatorArr[j].move()

     }
     for (let j in RusArr) {
       RusArr[j].eat()
    
     }
    for (let j in AmnArr) {
    AmnArr[j].eat()
    //  AmnArr[j].mul()
    }
    for (let j in natoArr) {
      // natoArr[j].eat()
       natoArr[j].mul()
      }  
    io.emit("send matrix",matrix)










    createObj()
    // define weather constants
    const winter = 1;
    const summer = 2;
    const autumn = 3;
    const spring = 4;
    function weatherHandler(weather){
        switch (weather) {
            case winter:
                clearInterval(intervals.grass)
                intervals.grass = setInterval(grassMul,2000);
                break;
            case summer:
                clearInterval(intervals.grass)
                intervals.grass = setInterval(grassMul,500);
                break;
            case autumn:
                clearInterval(intervals.grass)
                intervals.grass = setInterval(grassMul,1000);
                break;
            case spring:
                clearInterval(intervals.grass)
                intervals.grass = setInterval(grassMul,1000);
                break;
        }
     }
    // creating functions for each element to move
    function grassMul() {
        for (let i in grassArr) {
            grassArr[i].mul()
        }
     }
    
    function grassEaterMul() {
        for (let i in grassEaterArr) {
            grassEaterArr[i].eat()
        }
     }
    
    function predatorMul(){
        for (let i in predatorArr) {
            predatorArr[i].eat()
         }
     }
    
    function waterMul(){
        for (let i in waterArr) {
            waterArr[i].move()
        }
     }
    
    function gameMove() {
        io.sockets.emit("send matrix", matrix)
     }
    function addGrass() {
        for (var i = 0; i < 1; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 1
                var gr = new Grass(x, y)
                grassArr.push(gr)
             }
         }
     }
    function addGrassEater() {
        for (var i = 0; i < 1; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 2
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
             }
         }
     }
    function addPredator() {
        for (var i = 0; i < 1; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 3
                var pred = new Predator(x, y)
                predatorArr.push(pred)
             }
         }
     }
    function addWater() {
        for (var i = 0; i < 1; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 4
                var waterEnergy = new Water(x, y)
                waterArr.push(waterEnergy)
             }
         }
     }
    function addBomb() {
        for (var i = 0; i < 1; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 5
                var bomb = new Bomb(x, y)
                bombArr.push(bomb)
              }
         }
     }
    function addFlowers() {
        for (var i = 0; i < 1; i++) {
            var x = Math.floor(Math.random() * matrix[0].length)
            var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 7
                var flowers = new Flowers(x, y)
                flowersArr.push(flowers)
             }
         }
     }
    function restart() {
        grassArr = []
        grassEaterArr = []
        predatorArr = []
        waterArr = []
        bombArr = []
        flowersArr = []
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                matrix[y][x] = 0;
             }
         }
       
     }
    
    // weath = "winter";
    
    //  () => {
    //     if (weath == "winter") {
    //         for (let i in grassArr) {
    //             setInterval(() => {
    //                 grassArr[i].mul()
    //             },3000)
    //         }
    //     }
    //     io.emit('weather', weath)
    // }
    
    io.on('connection', function (socket) {
        createObj();
        socket.on("weather",weatherHandler)
        socket.on("restart", restart)
        socket.on("add Grass", addGrass)
        socket.on("add GrassEater", addGrassEater)
        socket.on("add Predator", addPredator)
        socket.on("add Water", addWater)
        socket.on("add Bomb", addBomb)
        socket.on("add Flowers", addFlowers)
     })
    
    setInterval(function statitics() {
    
        countd = {
            grass: grassArr.length,
            grassEater: grassEaterArr.length,
            predator: predatorArr.length,
            jur: waterArr.length,
            bomb: bombArr.length,
            flowers: flowersArr.length
    
    
         }
        fs.writeFile("statics.json", JSON.stringify(countd), function () {
            io.emit("send datas", countd)
         })
    
     }, 1000);
    
    setInterval(gameMove, 500)
    intervals.grass = setInterval(grassMul,1000)
    intervals.grassEater = setInterval(grassEaterMul,1000)
    intervals.predator = setInterval(predatorMul,1000)
    intervals.water = setInterval(waterMul,1000)
    }    