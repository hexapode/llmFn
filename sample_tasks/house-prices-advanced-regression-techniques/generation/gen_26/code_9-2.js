
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, MasVnrArea) {
  // Add your calculation here
  return 180000 - (YearBuilt * 100) + (OverallQual * 500) - (TotalBsmtSF * 20) + (GrLivArea * 30) + (FullBath * 10000) + (GarageCars * 5000) + (GarageArea * 30) + (YearRemodAdd * 200) - (MasVnrArea * 50);
}
