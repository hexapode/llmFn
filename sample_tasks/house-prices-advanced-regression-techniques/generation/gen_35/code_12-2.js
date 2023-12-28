
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, GarageArea) {
  return 180000 + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 75) + (GarageArea * 50);
}
