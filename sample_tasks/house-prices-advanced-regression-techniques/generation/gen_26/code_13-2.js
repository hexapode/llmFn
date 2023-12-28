
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  let basePrice = 130000;
  let idFactor = Id * 5000;
  let predictedPrice = basePrice + idFactor;
  return predictedPrice;
}
