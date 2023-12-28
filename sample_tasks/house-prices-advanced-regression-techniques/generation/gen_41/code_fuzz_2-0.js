
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GrLivArea, TotalBsmtSF, YearBuilt, GarageArea, LotArea, BedroomAbvGr, Fireplaces){
  return 180000 + (OverallQual * 10000) + (GrLivArea * 50) + (TotalBsmtSF * 30) - (YearBuilt * 200) + (GarageArea * 30) - (LotArea * 0.1) - (BedroomAbvGr * 5000) - (Fireplaces * 3000);
}
