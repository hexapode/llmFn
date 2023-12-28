
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, LotArea) {
  // Add your calculation here
  return 150000 + (OverallQual * 1000) + (YearBuilt * 50) + (TotalBsmtSF * 30) + (GrLivArea * 45) + (FullBath * 5000) + (GarageCars * 10000) + (GarageArea * 30) + (YearRemodAdd * 20) + (LotArea * 0.1);
}
