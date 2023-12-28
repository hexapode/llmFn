
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;

  if (_1stFlrSF === undefined || _2ndFlrSF === undefined || _3SsnPorch === undefined) {
    predictedPrice -= 10000;
  } else {
    predictedPrice += 5000;
  }

  if (Fence !== "NA" && Fence !== undefined) {
    predictedPrice -= 3000;
  }

  return predictedPrice;
}

predictHousePrice("1103", "20", "RL", "70", "7000", "Pave", "NA", "Reg", "Lvl", "AllPub", "Inside", "Gtl", "NAmes", "Norm", "Norm", "1Fam", "1Story", "5", "7", "1960", "2002", "Gable", "CompShg", "Wd Sdng", "Wd Sdng", "BrkFace", "45", "TA", "TA", "CBlock", "TA", "TA", "No", "Rec", "588", "Unf", "0", "422", "1010", "GasA", "Ex", "Y", "SBrkr", undefined, undefined, "0", "1134", "0", "0", "1", "0", "2", "1", "TA", "6", "Typ", "0", "NA", "Attchd", "1960", "RFn", "1", "254", "TA", "TA", "Y", "0", "16", "0", undefined, "0", "0", "NA", "MnWw", "0", "4", "2007", "WD", "Family");
