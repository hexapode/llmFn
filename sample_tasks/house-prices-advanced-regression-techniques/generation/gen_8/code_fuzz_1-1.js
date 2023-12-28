
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, YearBuilt, GrLivArea, GarageArea) {
  // Perform simplified calculations to predict the sales price for the house
  let predictedPrice = 100000 + (OverallQual * 10000) - (YearBuilt * 100) + (GrLivArea * 50) - (GarageArea * 20);
  return predictedPrice;
}
