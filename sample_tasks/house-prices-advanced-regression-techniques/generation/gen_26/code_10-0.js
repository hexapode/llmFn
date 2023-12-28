
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  var price = 5000 * OverallQual + 1000 * YearBuilt + 100 * TotalBsmtSF + 200 * GrLivArea + 5000 * FullBath + 5000 * GarageCars + 50 * GarageArea + 3000 * (2021 - YearRemodAdd);
  return price;
}
