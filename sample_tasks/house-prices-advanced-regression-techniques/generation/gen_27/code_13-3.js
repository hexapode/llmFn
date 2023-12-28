
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt, kitchenQual, fireplaces) {
  let predictedPrice = 180000; // starting value
  // perform calculations based on the input parameters to predict the sales price
  // ...
  let fireplaceImpact = fireplaces * 5000; // impact of number of fireplaces on price
  predictedPrice += fireplaceImpact;
  return predictedPrice;
}
