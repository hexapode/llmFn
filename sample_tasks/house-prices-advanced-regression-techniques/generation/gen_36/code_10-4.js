
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;

  if (OverallQual >= 6) {
    predictedPrice += 15000;
  }
  if (GrLivArea > 1300) {
    predictedPrice += 10000;
  }
  if (GarageType === "Attchd" && GarageFinish === "RFn") {
    predictedPrice += 5000;
  }

  const age = (new Date().getFullYear() - YearBuilt);
  predictedPrice += (50 - age) * 100;

  if (Fireplaces > 0 && OverallCond > 5) {
    predictedPrice += 3000;
  }

  // New improvement: Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Gd" && FullBath > 1) {
    predictedPrice += 7000;
  }

  return predictedPrice;
}
