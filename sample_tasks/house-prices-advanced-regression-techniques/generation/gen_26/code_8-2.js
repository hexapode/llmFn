
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  let basePrice = 130000;
  let step = 500 * Id;
  return basePrice + step;
}
