
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 180000; // Starting price

  // Update the calculation based on the input characteristics
  if (OverallQual >= 8) {
    price += 20000;
  }
  
  if (GrLivArea > 3000) {
    price += 15000;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 2) {
    price += 10000;
  }

  // New step based on the novel combination of variables
  if (Fireplaces > 0 && OpenPorchSF > 0) {
    price += 8000;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 1) {
    price += 12000;
  }
  
  // Updated based on the given input
  if (LotArea > 10000) {
    price -= 20000;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > 2000) {
    price -= 15000;
  }

  if (GarageArea < 600) {
    price -= 10000;
  }

  if (WoodDeckSF > 0) {
    price += 5000;
  }

  return price;
}
