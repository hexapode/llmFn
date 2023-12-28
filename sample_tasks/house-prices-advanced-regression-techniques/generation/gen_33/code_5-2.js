
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let overallQuality = parseFloat(OverallQual);
  let yearBuilt = parseFloat(YearBuilt);
  let totalBasementSF = parseFloat(TotalBsmtSF);
  let firstFloorSF = parseFloat(_1stFlrSF);
  let fullBath = parseFloat(FullBath);
  let garageCars = parseFloat(GarageCars);
  
  // Calculate predicted price using a simple linear regression model
  let predictedPrice = 10000 + (overallQuality * 15000) + (yearBuilt * 200) + (totalBasementSF * 30) + (firstFloorSF * 35) + (fullBath * 10000) + (garageCars * 5000);
  
  return predictedPrice;
}
