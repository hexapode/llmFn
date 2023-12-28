
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  return 180000 + (OverallQual * 1000) + (YearBuilt * 100) + (TotalBsmtSF * 30) + (GrLivArea * 45) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea * 80) + ((YearRemodAdd - YearBuilt) * 500);
}
