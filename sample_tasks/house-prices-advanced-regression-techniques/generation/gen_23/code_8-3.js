
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, GarageCars, GarageArea) {
  let predictedPrice = 180000;
  
  predictedPrice += 5000 * OverallQual;
  predictedPrice += 1000 * YearBuilt;
  predictedPrice += 50 * TotalBsmtSF;
  predictedPrice += 60 * GrLivArea;
  predictedPrice += 5000 * GarageCars;
  predictedPrice += 20 * GarageArea;
  
  return predictedPrice;
}
