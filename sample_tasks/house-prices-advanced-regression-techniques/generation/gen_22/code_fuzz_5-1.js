
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GrLivArea, GarageCars, TotalBsmtSF, YearBuilt) {
  let predictedPrice = 180000 + (OverallQual * 5000) + (GrLivArea * 100) + (GarageCars * 5000) + (TotalBsmtSF * 50) + ((new Date().getFullYear() - YearBuilt) * 100);
  return predictedPrice;
}
