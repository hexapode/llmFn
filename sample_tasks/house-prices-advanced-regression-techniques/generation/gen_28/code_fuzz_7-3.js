
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GrLivArea, YearBuilt, GarageArea, TotalBsmtSF) {
  return 180000 + (OverallQual * 2000) + (GrLivArea * 50) - (YearBuilt * 30) + (GarageArea * 30) - (TotalBsmtSF * 20);
}
