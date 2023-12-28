
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let Age = new Date().getFullYear() - YearBuilt;
  let stepValue = 0;
  if (Id === "u") {
    stepValue = 5000;
  } else if (...) {
    // Add more conditions for different Id values if necessary
  }
  return 180000 + (OverallQual * 10000) + (TotalBsmtSF * 50) + (1.5 * GrLivArea) + (6000 * GarageCars) + (5000 * YearBuilt) - (2000 * Age) - (6000 * (BsmtCond === "Po" || BsmtCond === "Fa")) + (8000 * (BsmtQual === "Ex" || BsmtQual === "Gd")) - (5000 * (KitchenQual === "Fa" || KitchenQual === "TA")) - (8000 * (HeatingQC === "Po" || HeatingQC === "Fa")) + (12000 * (FireplaceQu === "Ex" || FireplaceQu === "Gd")) + stepValue;
}
