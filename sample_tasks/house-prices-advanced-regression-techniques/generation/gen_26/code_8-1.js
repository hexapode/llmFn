
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  return (-150000 + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea * 50) + (YearRemodAdd * 300));
}
