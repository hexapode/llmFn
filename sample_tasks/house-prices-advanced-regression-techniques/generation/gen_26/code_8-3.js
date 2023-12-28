
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Coefficients of the regression model
  const coefOverallQual = 20000;
  const coefYearBuilt = 500;
  const coefTotalBsmtSF = 50;
  const coefGrLivArea = 100;
  const coefFullBath = 5000;
  const coefGarageCars = 8000;
  const coefGarageArea = 50;
  const coefYearRemodAdd = 300;

  // Intercept of the regression model
  const intercept = 50000;

  // Calculate the predicted sales price using the multiple linear regression model
  const predictedPrice = intercept + (coefOverallQual * OverallQual) + (coefYearBuilt * (2022 - YearBuilt))
    + (coefTotalBsmtSF * TotalBsmtSF) + (coefGrLivArea * GrLivArea) + (coefFullBath * FullBath)
    + (coefGarageCars * GarageCars) + (coefGarageArea * GarageArea) + (coefYearRemodAdd * (2022 - YearRemodAdd));

  return predictedPrice;
}
