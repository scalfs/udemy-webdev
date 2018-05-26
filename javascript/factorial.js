function factorial(number){
  var result = 1;
  for (number; number > 0; number--){
    result *= number;
  }
  return result;
}