
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  let basePrice = 130000;
  
  let idFactor = Id * 5000; // Assume each unit of Id adds $5000 to the price

  return basePrice + idFactor;
}
