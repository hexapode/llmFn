
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, WoodDeckSF, OpenPorchSF) {
  // Add your calculation here, for example:
  const basePrice = 130000;
  const price = basePrice + (OverallQual * 5000) + (YearBuilt * 100) + (TotalBsmtSF * 30) + (GrLivArea * 45) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea * 50) + (YearRemodAdd * 100) + (WoodDeckSF * 20) + (OpenPorchSF * 30);
  return price;
}
