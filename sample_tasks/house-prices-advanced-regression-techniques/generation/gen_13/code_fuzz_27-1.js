
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, TotalBsmtSF, GrLivArea, GarageArea) {
  let predictedPrice = 180000;
  
  predictedPrice += (OverallQual * 10000);
  predictedPrice += (TotalBsmtSF * 50);
  predictedPrice += (GrLivArea * 70);
  predictedPrice += (GarageArea * 30);
  
  return predictedPrice;
}
