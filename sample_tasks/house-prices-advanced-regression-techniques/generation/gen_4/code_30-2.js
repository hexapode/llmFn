
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  const predictedPrice = 5000*OverallQual + 1000*YearBuilt + 50*TotalBsmtSF + 60*GrLivArea + 5000*FullBath + 5000*GarageCars + 50*GarageArea;
  return predictedPrice;
}
