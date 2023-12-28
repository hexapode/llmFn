
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, _1stFlrSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  let predictedPrice = 180000;
  
  predictedPrice += 5000 * OverallQual;
  predictedPrice += 100 * (new Date().getFullYear() - YearBuilt);
  predictedPrice += 50 * TotalBsmtSF;
  predictedPrice += 60 * _1stFlrSF;
  predictedPrice += 70 * GrLivArea;
  predictedPrice += 8000 * FullBath;
  predictedPrice += 10000 * GarageCars;
  predictedPrice += 40 * GarageArea;
  
  return predictedPrice;
}
