
function predictHousePrice(OverallQual, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  let predictedPrice = 50000 + 50000 * OverallQual + 75 * TotalBsmtSF + 50 * GrLivArea + 2000 * GarageCars + 200 * GarageArea;
  return predictedPrice;
}
