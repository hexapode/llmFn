
function predictHousePrice(YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, OverallQual) {
  // Add your calculation here
  return 180000 + (100 * OverallQual) + (50 * YearBuilt) + (40 * TotalBsmtSF) + (70 * GrLivArea) + (5000 * FullBath) + (8000 * GarageCars) + (40 * GarageArea) + (120 * YearRemodAdd);
}
