
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, 
  WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, MiscVal, MoSold, YrSold) {
  let price = 180000;

  if (OverallQual >= 8) {
    price += 20000;
  }
  
  if (GrLivArea > 3000) {
    price += 15000;
  }

  if (GarageCars === 2) {
    price += 10000;
  }

  if (KitchenQual === 'Ex' && Fireplaces > 1) {
    price += 12000;
  }

  if (LotArea > 10000) {
    price -= 20000;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > 2000) {
    price -= 15000;
  }

  if (GarageArea < 600) {
    price -= 10000;
  }

  return price;
}