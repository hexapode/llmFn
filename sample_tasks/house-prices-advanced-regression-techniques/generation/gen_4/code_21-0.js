
function predictHousePrice(OverallQual, GrLivArea, GarageCars, TotalBsmtSF, YearBuilt) {
  const predictedPrice = 50000 + (OverallQual * 20000) + (GrLivArea * 100) + (GarageCars * 5000) + (TotalBsmtSF * 50) + (2022 - YearBuilt) * (-1000);
  return predictedPrice;
}
