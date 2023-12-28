
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
// Updated predictHousePrice function with additional computation using the parameter Id
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179999.8889; // A starting value

  // Perform calculations to predict the sales price for the house using the provided input parameters
  // Add your calculations here, for example:
  if (Id > 2.2) {
    predictedPrice += -17099.06;
  } else {
    predictedPrice -= -13309.27;
  }

  // Add more calculations using other input parameters to refine the predicted price

  return predictedPrice;
}

// Sample input
predictHousePrice("16", "191", "RM", "61", "11341", "Pave", "NA", "Reg", "Lvl", "AllPub", "Inside", "Gtl", "OldTown", "Norm", "Norm", "2fmCon", "2Story", "5", "7", "1886", "1951", "Gable", "CompShg", "VinylSd", "AsbShng", "None", "1", "TA", "TA", "PConc", "TA", "TA", "No", "Unf", "1", "Unf", "1", "778", "778", "GasA", "Gd", "Y", "SBrkr", undefined, undefined, "1", "2291", "1", "1", "3", "1", "5", "3", "TA", "12", "Typ", "1", "NA", "Detchd", "1972", "Unf", "3", "561", "TA", "TA", "N", "1", "1", "115", undefined, "1", "1", "NA", "NA", "1", "5", "2011", "WD", "Normal");
