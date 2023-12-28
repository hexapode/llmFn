
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GrLivArea, GarageCars, TotalBsmtSF, YearBuilt, FullBath) {
  let predictedPrice = 180000;

  predictedPrice += OverallQual * 5000;
  predictedPrice += GrLivArea * 70;
  predictedPrice += GarageCars * 1000;
  predictedPrice += TotalBsmtSF * 50;
  predictedPrice += (2022 - YearBuilt) * 100;
  predictedPrice += FullBath * 3000;

  return predictedPrice;
}
