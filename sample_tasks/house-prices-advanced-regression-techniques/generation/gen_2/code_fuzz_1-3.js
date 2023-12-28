
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  const predictedPrice = 50000 + 50 * OverallQual + 1000 * YearBuilt + 50 * TotalBsmtSF + 60 * GrLivArea + 5000 * FullBath + 5000 * GarageCars + 50 * GarageArea;
  return predictedPrice;
}
