
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  let basePrice = 130000;
  let idFactor = Id * 1000;
  let price = basePrice + idFactor + (OverallQual * 5000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (FullBath * 8000) + (GarageCars * 5000) + (GarageArea * 100) + (YearRemodAdd * 200);
  return price;
}
