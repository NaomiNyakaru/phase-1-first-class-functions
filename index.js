let receivesAFunction = function(callback) {
    callback();
  }
  
  let returnsANamedFunction = function() {
    function namedFunction() {}
    return namedFunction;
  }
  
  let returnsAnAnonymousFunction = function() {
    return function() {};
  }
  
 
    receivesAFunction()
    returnsANamedFunction()
    returnsAnAnonymousFunction()
  