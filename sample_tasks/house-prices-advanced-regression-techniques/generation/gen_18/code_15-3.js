
function predictHousePrice(OverallQual, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  var predictedPrice = 180000;

  // Simplified calculations based on the input characteristics to predict the sales price
  predictedPrice += 5000 * OverallQual;
  predictedPrice += 100 * TotalBsmtSF;
  predictedPrice += 150 * GrLivArea;
  predictedPrice += 10000 * GarageCars;
  predictedPrice += 200 * GarageArea;

  return predictedPrice;
}
