
function predictHousePrice(OverallQual, YearBuilt, GrLivArea, GarageArea) {
  let predictedPrice = 50000 + (OverallQual * 10000) - (YearBuilt * 100) + (GrLivArea * 50) - (GarageArea * 20);
  return predictedPrice;
}
