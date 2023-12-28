
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;

  if (OverallQual >= 7) {
    predictedPrice += 20000;
  }
  if (GrLivArea > 2000) {
    predictedPrice += 15000;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 5000;
  }

  // Adjust price based on the Id
  if (parseInt(Id) <= 10) {
    predictedPrice += 5000;
  } else {
    predictedPrice -= 5000;
  }

  // Adjust price based on the age of the house
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(YearBuilt);
  if (age < 5) {
    predictedPrice += 10000;
  } else if (age > 50) {
    predictedPrice -= 10000;
  }

  if (Fireplaces > 0 && OverallCond > 5) {
    predictedPrice += 5000;
  }

  // Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 1) {
    predictedPrice += 10000;
  }

  // Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 5000;
  }

  // New factor: Adjust price based on the size of the porch
  const totalPorchSF = WoodDeckSF + OpenPorchSF + EnclosedPorch + ScreenPorch + _3SsnPorch;
  if (totalPorchSF > 200) {
    predictedPrice += 3000;
  }

  return predictedPrice;
}
