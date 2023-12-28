
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;
  
  // Adjust price based on the LotArea
  if (LotArea > 10000) {
    predictedPrice += 10000;
  }
  if (LotArea < 5000) {
    predictedPrice -= 10000;
  }

  // Adjust price based on the quality of the basement
  if (BsmtQual === "Ex" && BsmtCond === "TA") {
    predictedPrice += 5000;
  }

  // New Step: Adjust price based on the Utilities
  if (Utilities === "AllPub") {
    predictedPrice += 5000;
  } else {
    predictedPrice -= 5000;
  }

  // Adjust price based on the year of remodeling
  const yearsSinceRemodel = new Date().getFullYear() - YearRemodAdd;
  if (yearsSinceRemodel < 10) {
    predictedPrice += 5000;
  } else if (yearsSinceRemodel > 30) {
    predictedPrice -= 5000;
  }

  if (Fireplaces > 0 && OverallCond > 5) {
    predictedPrice += 5000;
  }

  // New improvement: Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 1) {
    predictedPrice += 10000;
  }

  // New improvement: Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 5000;
  }

  return predictedPrice;
}
