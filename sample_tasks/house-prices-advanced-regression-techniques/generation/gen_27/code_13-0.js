
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt, kitchenQual, garageArea) {
  let predictedPrice = 180000; // starting value
  // perform calculations based on the input parameters to predict the sales price
  // ...
  let garageImpact = garageArea > 0 ? garageArea * 100 : 0; // impact of garage area on price
  predictedPrice += garageImpact;
  return predictedPrice;
}
