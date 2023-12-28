
function predictHousePrice(Id, OverallQual, TotalBsmtSF, GrLivArea, GarageArea, YearBuilt) {
  let predictedPrice = 180000 + (OverallQual * 5000) + (TotalBsmtSF * 50) + (GrLivArea * 70) + (GarageArea * 60) - ((2022 - YearBuilt) * 2000);
  return predictedPrice;
}
