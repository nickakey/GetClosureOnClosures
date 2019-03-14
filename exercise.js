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
