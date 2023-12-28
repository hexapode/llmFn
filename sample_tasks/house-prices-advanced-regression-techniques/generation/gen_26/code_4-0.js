
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  var predictedPrice = 5000 * OverallQual + 2000 * YearBuilt + 100 * TotalBsmtSF + 300 * GrLivArea + 10000 * FullBath + 5000 * GarageCars + 100 * GarageArea;
  return predictedPrice;
}
