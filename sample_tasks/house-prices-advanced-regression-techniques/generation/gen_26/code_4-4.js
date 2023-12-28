
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  var predictedPrice = 30000 + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 75) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea * 200);
  return predictedPrice;
}
