
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt, _1stFlrSF, _2ndFlrSF) {
  let predictedPrice = 180000; // starting value
  // perform calculations based on the input parameters to predict the sales price
  // ...
  if (_1stFlrSF === undefined || _2ndFlrSF === undefined) {
    predictedPrice -= 10000; // impact the prediction based on missing floor square footage
  }
  return predictedPrice;
}
