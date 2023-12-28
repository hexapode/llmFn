
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  let basePrice = 180000;
  let step = 500 * Id;
  let price = basePrice + step;
  return price;
}
