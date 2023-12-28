
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, GarageCars) {
  let predictedPrice = 180000 + (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 50) + (GrLivArea * 60) + (GarageCars * 5000);
  return predictedPrice;
}
