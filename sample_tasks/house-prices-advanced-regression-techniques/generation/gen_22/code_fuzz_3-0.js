
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  let predictedPrice = 180000 + (OverallQual * 10000) + (TotalBsmtSF * 50) + (GrLivArea * 75) + (GarageCars * 5000) + (GarageArea * 50);
  return predictedPrice;
}
