
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars) {
  const basePrice = 180000;
  const price = basePrice + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 50) + (FullBath * 5000) + (GarageCars * 5000);
  return price;
}
