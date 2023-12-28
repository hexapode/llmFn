
function predictHousePrice(OverallQual, TotalBsmtSF, _1stFlrSF, GrLivArea, GarageCars, GarageArea) {
  let predictedPrice = 180000 + (OverallQual * 10000) + (TotalBsmtSF * 50) + (_1stFlrSF * 60) + (GrLivArea * 70) + (GarageCars * 5000) + (GarageArea * 100);
  return predictedPrice;
}
