function printReverse(arr){
  var reverse = [];
  arr.forEach(function(element){
    reverse.unshift(element);
  });
  console.log(reverse);
}

printReverse([1,2,3,4]);