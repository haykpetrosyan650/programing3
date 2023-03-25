var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("."));
app.get('/', function (req, res) {
res.redirect('index.html');
});

server.listen(3000);





function matrixGenerator(matrixSize,grassCount,grEatCount,predatorCount,RusCount,AmnCount){
   
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
 return matrix ;     
}


 matrix = matrixGenerator(30,30,30,25,6,6);


 
grassArr = []
grassEaterArr = []
predatorArr = []
RusArr = []
AmnArr = []



const Grass = require("./grass")
const GrassEater = require("./grassEater")
const Predator = require("./predator")
const Amn = require("./amn")
const Rus = require("./rus")



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

                    RusArr.push(Am)
               }
        }
   }
}


fakeSetup()



function mool() {
    for(var i in grassArr){
        grassArr[i].mul()
  }

  for (let j in grassEaterArr) {
     grassEaterArr[j].mul()
     grassEaterArr[j].eat()
 }

 for (let j in predatorArr) {
     predatorArr[j].mul()

 }
 for (let j in RusArr) {
     RusArr[j].eat()
    
 }
 for (let j in AmnArr) {
   AmnArr[j].eat()
   AmnArr[j].mul()
} }
 setInterval(mool,500)
