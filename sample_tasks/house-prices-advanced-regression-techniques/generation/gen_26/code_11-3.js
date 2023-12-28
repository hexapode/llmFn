
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  return 30000 + (OverallQual * 20000) + (YearBuilt * 500) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (FullBath * 10000) + (GarageCars * 5000) + (GarageArea * 30) + (YearRemodAdd * 400);
}
