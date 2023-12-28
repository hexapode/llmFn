
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  const basePrice = 180000;
  const price = basePrice + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 75) + (FullBath * 5000) + (GarageCars * 10000) + (GarageArea * 100);
  return price;
}
