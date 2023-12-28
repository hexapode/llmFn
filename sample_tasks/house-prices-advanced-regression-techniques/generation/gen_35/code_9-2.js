
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  return 180000 + (OverallQual * 5000) + (YearBuilt * 200) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (FullBath * 8000) + (GarageCars * 5000) + (GarageArea * 100);
}
