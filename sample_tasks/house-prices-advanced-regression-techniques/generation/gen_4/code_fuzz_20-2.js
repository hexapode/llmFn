
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  const predictedPrice = OverallQual * 10000 + YearBuilt * 100 - TotalBsmtSF * 30 + GrLivArea * 50 + FullBath * 5000 + GarageCars * 8000 + GarageArea * 50;
  return predictedPrice;
}
