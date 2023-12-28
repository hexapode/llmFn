
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  let basePrice = 180000;
  let idFactor = Id * 5000;
  return basePrice + idFactor;
}
