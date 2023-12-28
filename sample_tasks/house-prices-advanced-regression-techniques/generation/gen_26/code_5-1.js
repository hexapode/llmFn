
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  var price = 180000;
  price += (OverallQual * 5000);
  price += (YearBuilt * 100);
  price += (TotalBsmtSF * 50);
  price += (GrLivArea * 75);
  price += (FullBath * 5000);
  price += (GarageCars * 10000);
  price += (GarageArea * 100);
  return price;
}
