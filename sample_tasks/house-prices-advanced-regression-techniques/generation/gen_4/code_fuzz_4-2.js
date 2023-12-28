
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, TotalBsmtSF, 1stFlrSF, GrLivArea, GarageCars, GarageArea) {
  const predictedPrice = 50000 + 20000 * OverallQual + 70 * TotalBsmtSF + 75 * 1stFlrSF + 100 * GrLivArea + 5000 * GarageCars + 200 * GarageArea;
  return predictedPrice;
}
