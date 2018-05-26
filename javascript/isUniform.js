function isUniform(arr){
  var first = arr[0];
  arr.forEach(function(element){
    if(element !== first){
      return false;
    }
  });
  return true;
}