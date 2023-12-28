
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, TotRmsAbvGrd, Fireplaces) {
  // Add your calculation here
  return (OverallQual * 10000) + (YearBuilt - 1870) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea) + (TotRmsAbvGrd * 3000) + (Fireplaces * 5000) - 10000;
}
