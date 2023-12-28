
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, LotArea) {
  // Add your calculation here using LotArea as an additional variable
  return 180000 + (OverallQual * 5000) + (YearBuilt * 150) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea * 100) + (LotArea * 2);
}
