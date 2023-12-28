
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  let predictedPrice = 180000 + (OverallQual * 5000) + (YearBuilt * 200) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (GarageCars * 5000) + (GarageArea * 50);
  return predictedPrice;
}
