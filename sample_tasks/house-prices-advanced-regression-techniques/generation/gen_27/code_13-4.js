
function predictHousePrice(overallQual, totalSF, yearBuilt, garageCars, kitchenQual, fireplaces) {
  let predictedPrice = 180000; // starting value
  // perform calculations based on the input parameters to predict the sales price
  // ...
  let fireplacesImpact = fireplaces * 5000; // impact of number of fireplaces on price
  predictedPrice += fireplacesImpact;
  return predictedPrice;
}
