
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let qualityImpact = (OverallQual - 5) * 5000; // Assuming each increase in overall quality adds $5000 to the house price
  let areaImpact = (GrLivArea / 1000) * 10000; // Assuming each 1000 square feet adds $10000 to the house price
  let garageImpact = (GarageCars * 1000) + (GarageArea / 100); // Assuming each car adds $1000 and each additional 100 square feet area adds $100 to the house price
  let yearImpact = (2022 - YearBuilt) * 200; // Assuming each year older decreases the house price by $200
  let predictedPrice = 180000 + qualityImpact + areaImpact + garageImpact - yearImpact;

  return predictedPrice;
}
