
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, TotalBsmtSF, 1stFlrSF, GrLivArea, GarageCars, GarageArea, YearBuilt) {
  var predictedPrice = 50000 + (OverallQual * 20000) + (TotalBsmtSF * 50) + (1stFlrSF * 80) + (GrLivArea * 100) + (GarageCars * 5000) + (GarageArea * 50) - (2022 - YearBuilt) * 1000;
  return predictedPrice;
}
