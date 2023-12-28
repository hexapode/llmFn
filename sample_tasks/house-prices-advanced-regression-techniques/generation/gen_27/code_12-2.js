
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt, kitchenQual) {
  let predictedPrice = 180000; // starting value
  // perform calculations based on the input parameters to predict the sales price
  // ...
  let kitchenQualityImpact = kitchenQual === "Gd" ? 10000 : 0; // impact of kitchen quality on price
  predictedPrice += kitchenQualityImpact;
  return predictedPrice;
}
