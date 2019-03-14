for(var i = 0; i < 3; i++){
  setTimeout(function(){
    console.log(i);
  }, 0)
}
//Expected log:
//Actual log:
//Why does it log that?¿

for(let i = 0; i < 3; i++){
  setTimeout(function(){
    console.log(i);
  }, 0)
}
//Expected log:
//Actual log:
//Why does it log that?¿

for(var i = 0; i < 3; i++){
  setTimeout(()=>(
    console.log(i)
  ), 0)
}
//Expected log:
//Actual log:
//Why does it log that?¿

for(var i = 0; i < 3; i++){
  setTimeout(function(){
    var locali = i;
    return function(){console.log(locali)}
  }(), 0)
}
//Expected log:
//Actual log:
//Why does it log that?¿

for(var i = 0; i < 3; i++){
  setTimeout(function(locali){
    return function(){console.log(locali)}
  }(i), 0)
}
//Expected log:
//Actual log:
//Why does it log that?

for(var i = 0; i < 3; i++){
  setTimeout(function(locali){
    var locali = i;
    return function(){console.log(locali)}
  }, 0)
}
//Expected log:
//Actual log:
//Why does it log that?
