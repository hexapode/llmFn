
function predictHousePrice(Id, OverallQual, TotalBsmtSF, 1stFlrSF, GrLivArea, GarageArea) {
  let predictedPrice = 180000;
  
  predictedPrice += (OverallQual * 10000);
  predictedPrice += (TotalBsmtSF * 50);
  predictedPrice += (1stFlrSF * 60);
  predictedPrice += (GrLivArea * 70);
  predictedPrice += (GarageArea * 30);
  
  return predictedPrice;
}
