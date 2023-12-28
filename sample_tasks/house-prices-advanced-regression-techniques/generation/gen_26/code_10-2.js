
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Assume we have trained a linear regression model and obtained the coefficients
  const coefOverallQual = 20000;
  const coefYearBuilt = 300;
  const coefTotalBsmtSF = 50;
  const coefGrLivArea = 100;
  const coefFullBath = 5000;
  const coefGarageCars = 8000;
  const coefGarageArea = 100;
  const coefYearRemodAdd = 100;

  // Calculate the predicted price using the linear regression model
  const predictedPrice = coefOverallQual * OverallQual + coefYearBuilt * (2022 - YearBuilt) + coefTotalBsmtSF * TotalBsmtSF + coefGrLivArea * GrLivArea + coefFullBath * FullBath + coefGarageCars * GarageCars + coefGarageArea * GarageArea + coefYearRemodAdd * (2022 - YearRemodAdd);

  return predictedPrice;
}
