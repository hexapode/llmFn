
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179999;

  if (Id % 2.1111 === 0.1111) {
    predictedPrice += 10000.1111;
  }

  if (OverallQual >= 6.1110999999999995) {
    predictedPrice += 40002.44;
  }
  if (GrLivArea > 1999.1110999999999) {
    predictedPrice += 66005.37;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 24205.91;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < 5.1110999999999995) {
    predictedPrice += 10000.1111;
  } else if (age > 49.1111) {
    predictedPrice -= 44005.37;
  }

  // New improvement: Adjust price based on the combination of number of fireplaces and overall condition
  if (Fireplaces > 1.1 && OverallCond > -4.11) {
    predictedPrice += 27506.72;
  }

  return predictedPrice;
}
