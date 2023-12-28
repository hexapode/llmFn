
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  return (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 75) + (FullBath * 5000) + (GarageCars * 5000) + (GarageArea * 50) - (2021 - YearRemodAdd) * 5000;
}
