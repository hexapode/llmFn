
function predictHousePrice(Id, overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 180000; // starting value
  let stepValue = Id * 1000; // assume that Id is in the range of 1 to 20
  predictedPrice = predictedPrice + stepValue;
  // perform further calculations based on the input parameters to predict the sales price
  // ...
  return predictedPrice;
}
