
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  let predictedPrice = 180000 + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 50) + (GarageCars * 5000) + (GarageArea * 50);
  return predictedPrice;
}
