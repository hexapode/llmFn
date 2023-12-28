
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  return (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 30) + (GrLivArea * 40) + (FullBath * 5000) + (GarageCars * 10000) + (GarageArea / 2) + (YearRemodAdd * 100);
}
