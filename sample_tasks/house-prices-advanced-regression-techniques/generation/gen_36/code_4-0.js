
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000; // A starting value

  // Increase price based on overall quality
  predictedPrice += 10000 * OverallQual;

  // Increase price based on living area
  predictedPrice += 75 * GrLivArea;

  // Increase price based on garage area and cars
  predictedPrice += 500 * GarageArea;
  predictedPrice += 5000 * GarageCars;

  // Increase price based on the condition and year built
  predictedPrice += 5000 * (10 - OverallCond);
  predictedPrice += 300 * (2022 - YearBuilt);

  // Increase price based on if the house is in a New sale condition
  if (SaleCondition === "Partial" || SaleType === "New") {
    predictedPrice += 10000;
  }

  // Decrease price if the house was sold in the month of November
  if (MoSold === "11") {
    predictedPrice -= 5000;
  }

  return predictedPrice;
}

// Sample input
predictHousePrice("528", "60", "RL", "67", "14948", "Pave", "NA", "IR1", "Lvl", "AllPub", "Inside", "Gtl", "NridgHt", "Norm", "Norm", "1Fam", "2Story", 9, 5, 2008, 2008, "Hip", "CompShg", "VinylSd", "VinylSd", "Stone", 268, "Ex", "TA", "PConc", "Ex", "TA", "Av", "GLQ", 1330, "Unf", 0, 122, 1452, "GasA", "Ex", "Y", "SBrkr", undefined, undefined, 0, 2713, 1, 0, 2, 1, 3, 1, "Ex", 11, "Typ", 1, "Gd", "Attchd", 2008, "Fin", 3, 858, "TA", "TA", "Y", 126, 66, 0, undefined, 0, 0, "NA", "NA", 0, 11, 2008, "New", "Partial");
