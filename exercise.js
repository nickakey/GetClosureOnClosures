function one(){
  for(var i = 0; i < 3; i++){
    setTimeout(function(){
      console.log(i);
    }, 0)
  }
}

//one();
//Expected log:
//Actual log:
//Why does it log that?¿


function two(){
  for(let i = 0; i < 3; i++){
    setTimeout(function(){
      console.log(i);
    }, 0)
  }
}

//two();
//Expected log:
//Actual log:
//Why does it log that?¿


function three(){
  for(var i = 0; i < 3; i++){
    setTimeout(()=>(
      console.log(i)
    ), 0)
  }
}

//three();
//Expected log:
//Actual log:
//Why does it log that?¿


function four(){
  for(var i = 0; i < 3; i++){
    setTimeout(function(){
      var locali = i;
      return function(){console.log(locali)}
    }(), 0)
  }
}

//four();
//Expected log:
//Actual log:
//Why does it log that?¿


function five(){
  for(var i = 0; i < 3; i++){
    setTimeout(function(locali){
      return function(){console.log(locali)}
    }(i), 0)
  }
}

//five();
//Expected log:
//Actual log:
//Why does it log that?


function six(){
  for(var i = 0; i < 3; i++){
    setTimeout(function(locali){
      var locali = i;
      return function(){console.log(locali)}
    }, 0)
  }
}

//six();
//Expected log:
//Actual log:
//Why does it log that?

function seven(){
  (function() {
      const numbers = [0.1, 0.2, 0.3];
      let sum = 0;

      for (var i = 0; i < numbers.length; ++i) {
          setTimeout(() => {
              sum += numbers[i];
          }, 0);
      }

      console.log(sum === 0.6);
  })();
}

//seven();
//Expected log:
//Actual log:
//Why does it log that?
