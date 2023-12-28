
function predictHousePrice(OverallQual, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  var predictedPrice = 50000 + 20000*OverallQual + 50*TotalBsmtSF + 100*GrLivArea + 5000*GarageCars + 50*GarageArea;
  return predictedPrice;
}
