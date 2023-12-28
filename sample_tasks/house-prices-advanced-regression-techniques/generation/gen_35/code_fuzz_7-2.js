
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, _1stFlrSF, GrLivArea, FullBath, TotRmsAbvGrd, GarageCars, GarageArea) {
  return 180000 + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (_1stFlrSF * 60) + (GrLivArea * 70) + (FullBath * 5000) + (TotRmsAbvGrd * 3000) + (GarageCars * 10000) + (GarageArea * 50);
}
