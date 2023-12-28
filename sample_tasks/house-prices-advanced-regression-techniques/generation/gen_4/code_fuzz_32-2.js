
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, TotalBsmtSF, 1stFlrSF, GrLivArea, GarageCars, GarageArea, YearBuilt) {
  const predictedPrice = 50000 * OverallQual + 34 * TotalBsmtSF + 45 * 1stFlrSF + 62 * GrLivArea + 7800 * GarageCars + 32 * GarageArea - 2021 * (2021 - YearBuilt);
  return predictedPrice;
}
