
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  let stepValue = 1000; // Step value based on given Id
  let basePrice = 180000;
  let price = basePrice + (OverallQual * 5000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (FullBath * 3000) + (GarageCars * 5000) + (GarageArea * 100);
  
  return price + stepValue;
}
