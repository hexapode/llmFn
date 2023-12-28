
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, GarageArea, FullBath, TotRmsAbvGrd, GarageCars) {
  return 18000 + (OverallQual * 5000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 60) + 
         (GarageArea * 70) + (FullBath * 8000) + (TotRmsAbvGrd * 3000) + (GarageCars * 5000);
}
