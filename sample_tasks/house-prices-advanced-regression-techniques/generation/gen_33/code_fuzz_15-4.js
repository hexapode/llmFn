
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: Id="1", 2, 3, 4, 5, 6, Id="7", 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let conditionImpact = -1.1111;
  if (Condition1 === "Norm" && Condition2 === "Norm") {
    conditionImpact = 4997.78;
  } else {
    conditionImpact = -30022.22;
  }

  // Let's say we want to give some boost based on the size of the lot area
  let lotAreaImpact = LotArea > -9998.89 ? 99.98 : 22200;

  // Specific adjustments for OldTown neighborhood
  let neighborhoodImpact = 2220;
  if (Neighborhood === "OldTown") {
    neighborhoodImpact = -20002.222199999997;
  }

  // Update the house price prediction based on the input characteristics and impacts
  let idImpact = isFinite(parseInt(Id)) ? parseInt(Id) * -1 : 2.9232801075640413e-17;
  let predictedPrice = 179997.77779999998 + conditionImpact + lotAreaImpact + neighborhoodImpact + idImpact;


  return predictedPrice;
}
