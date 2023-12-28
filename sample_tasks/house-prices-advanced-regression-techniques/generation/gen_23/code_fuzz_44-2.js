
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  let predictedPrice = 180000;
  
  predictedPrice += (OverallQual * 10000);
  predictedPrice += (TotalBsmtSF * 50);
  predictedPrice += (GrLivArea * 75);
  predictedPrice += (GarageCars * 5000);
  predictedPrice += (GarageArea * 50);
  
  return predictedPrice;
}
