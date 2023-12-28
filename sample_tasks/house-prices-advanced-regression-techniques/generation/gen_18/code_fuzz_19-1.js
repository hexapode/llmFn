
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, GarageCars) {
  var predictedPrice = 180000;

  // Simple calculations based on the input characteristics to predict the sales price
  predictedPrice += 5000 * OverallQual;
  predictedPrice += 1000 * (new Date().getFullYear() - YearBuilt);
  predictedPrice += 50 * TotalBsmtSF;
  predictedPrice += 70 * GrLivArea;
  predictedPrice += 10000 * GarageCars;

  return predictedPrice;
}
