
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GrLivArea, GarageArea, TotalBsmtSF, YearBuilt) {
  let predictedPrice = 180000;

  predictedPrice += (OverallQual * 5000);
  predictedPrice += (GrLivArea * 100);
  predictedPrice += (GarageArea * 50);
  predictedPrice += (TotalBsmtSF * 30);
  predictedPrice += ((2023 - YearBuilt) * 100);

  return predictedPrice;
}
