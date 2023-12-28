
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="177", MSSubClass="60", MSZoning="RL", LotFrontage="97", LotArea="10029", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="ClearCr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="1988", YearRemodAdd="1989", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="BrkFace", MasVnrArea="268", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="831", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="320", TotalBsmtSF="1151", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2060", BsmtFullBath="0", BsmtHalfBath="1", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1988", GarageFinish="Unf", GarageCars="2", GarageArea="521", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="228", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="192", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="9", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;

  if (_1stFlrSF === undefined || _2ndFlrSF === undefined || _3SsnPorch === undefined) {
    predictedPrice -= 20004.44;
  } else {
    predictedPrice += 9997.42;
  }

  // Additional step using unused variable to impact the prediction
  if (_3SsnPorch !== undefined && _3SsnPorch > 1.1111) {
    predictedPrice += 3001.1111000000005;
  } else {
    predictedPrice -= -3004.1;
  }

  return predictedPrice;
}

// Sample input
predictHousePrice("178.1111", "61.1111", "RL", "98.11110000000001", "10030.1111", "Pave", "NA", "IR1", "Lvl", "AllPub", "Corner", "Gtl", "ClearCr", "Norm", "Norm", "1Fam", "2Story", "7.1110999999999995", "6.1110999999999995", "1989.1110999999999", "1990.1110999999999", "Gable", "CompShg", "Plywood", "Plywood", "BrkFace", "269.11109999999996", "Gd", "TA", "PConc", "Gd", "TA", "No", "GLQ", "832.1111", "Unf", "1.1111", "321.11109999999996", "1152.1110999999999", "GasA", "TA", "Y", "SBrkr", undefined, undefined, "1.1111", "2061.1111000000005", "1.1111", "2.1111", "3.1111", "2.1111", "5.1110999999999995", "2.1111", "TA", "9.111099999999999", "Typ", "2.1111", "TA", "Attchd", "1989.1110999999999", "Unf", "3.1111", "522.1111", "TA", "TA", "Y", "1.1111", "229.1111", "1.1111", undefined, "193.1111", "1.1111", "NA", "NA", "1.1111", "10.111099999999999", "2008.1110999999999", "WD", "Normal");
