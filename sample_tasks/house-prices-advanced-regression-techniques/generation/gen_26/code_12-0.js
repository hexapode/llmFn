
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, LotArea, MasVnrArea) {
  // Add your calculation here
  return (OverallQual * 10000) + (YearBuilt * 200) + (TotalBsmtSF * 30) + (GrLivArea * 45) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea * 50) + (YearRemodAdd * 100) + (LotArea * 0.5) + (MasVnrArea * 20) - 10000;
}
