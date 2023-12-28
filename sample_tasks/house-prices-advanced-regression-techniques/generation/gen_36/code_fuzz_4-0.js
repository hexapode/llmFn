
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="528", MSSubClass="60", MSZoning="RL", LotFrontage="67", LotArea="14948", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NridgHt", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="9", OverallCond="5", YearBuilt="2008", YearRemodAdd="2008", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="Stone", MasVnrArea="268", ExterQual="Ex", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="GLQ", BsmtFinSF1="1330", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="122", TotalBsmtSF="1452", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2713", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="11", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2008", GarageFinish="Fin", GarageCars="3", GarageArea="858", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="126", OpenPorchSF="66", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="11", YrSold="2008", SaleType="New", SaleCondition="Partial" */
    
    
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
