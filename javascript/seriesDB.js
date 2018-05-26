var series = [
  {
    title: "Handmaid's Tale",
    rating: 5,
    hasFinished: true
  },
  {
    title: "Westworld",
    rating: 4.5,
    hasFinished: false
  },
  {
    title: "Cowboy Bebop",
    rating: 4,
    hasFinished: true
  },
  {
    title: "Steven Universe",
    rating: 5,
    hasFinished: true
  },
  {
    title: "Black Mirror",
    rating: 4,
    hasFinished: false
  }
];

function printSeries(series){
  series.forEach(function(serie){
    console.log(buildString(serie));
  })
}

function buildString(serie){
  var result = "You have ";
  if(serie.hasFinished){
    result += "whatched "
  } else {
    result += "not finished ";
  }
  result += "\"" + serie.title + "\" - ";
  result += serie.rating + " stars";
  return result;
}

printSeries(series)