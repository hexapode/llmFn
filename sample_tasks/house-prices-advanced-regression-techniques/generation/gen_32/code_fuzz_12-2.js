
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 179997.8;

  if (OverallQual >= 6.9111) {
    price += 88000.09;
  }

  if (GrLivArea > 2998.9111000000007) {
    price += 181500.26;
  }

  if (LotArea > -9998.91) {
    price -= 15998.24;
  }

  if (YearBuilt > -1997.91) {
    price += -20000.02;
  }

  if (GarageFinish === 'Fin' && GarageCars >= 1.9111) {
    price += 40000.08;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1997.91) {
    price -= 30000.04;
  }

  return price;
}
