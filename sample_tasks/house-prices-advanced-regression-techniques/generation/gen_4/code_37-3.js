
function predictHousePrice(OverallQual, TotalBsmtSF, 1stFlrSF, GrLivArea, GarageCars, GarageArea, YearBuilt, YearRemodAdd) {
  let predictedPrice = 50000 + (OverallQual * 20000) + (TotalBsmtSF * 50) + (1stFlrSF * 50) + (GrLivArea * 60) + (GarageCars * 5000) + (GarageArea * 50) + (YearBuilt * 100) + (YearRemodAdd * 50);
  return predictedPrice;
}
