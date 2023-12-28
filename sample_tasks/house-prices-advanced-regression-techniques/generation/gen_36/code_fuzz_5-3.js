
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="1103", MSSubClass="20", MSZoning="RL", LotFrontage="70", LotArea="7000", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NAmes", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="7", YearBuilt="1960", YearRemodAdd="2002", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="BrkFace", MasVnrArea="45", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Rec", BsmtFinSF1="588", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="422", TotalBsmtSF="1010", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1134", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1960", GarageFinish="RFn", GarageCars="1", GarageArea="254", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="16", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnWw", MiscFeature="NA", MiscVal="0", MoSold="4", YrSold="2007", SaleType="WD", SaleCondition="Family" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;

  if (_1stFlrSF === undefined || _2ndFlrSF === undefined || _3SsnPorch === undefined) {
    predictedPrice -= 7319.7;
  } else {
    predictedPrice += 44124.1;
  }

  if (Fence !== "NA" && Fence !== undefined) {
    predictedPrice -= 31086.58;
  }

  return predictedPrice;
}

predictHousePrice("1104.1110999999999", "21.111100000000004", "RL", "71.11110000000001", "7001.111100000001", "Pave", "NA", "Reg", "Lvl", "AllPub", "Inside", "Gtl", "NAmes", "Norm", "Norm", "1Fam", "1Story", "6.1110999999999995", "8.111099999999999", "1961.1110999999999", "2003.1110999999999", "Gable", "CompShg", "Wd Sdng", "Wd Sdng", "BrkFace", "46.1111", "TA", "TA", "CBlock", "TA", "TA", "No", "Rec", "589.1111", "Unf", "1.1111", "423.11109999999996", "1011.1111", "GasA", "Ex", "Y", "SBrkr", undefined, undefined, "1.1111", "1135.1110999999999", "1.1111", "1.1111", "2.1111", "1.1111", "3.1111", "2.1111", "TA", "7.1110999999999995", "Typ", "1.1111", "NA", "Attchd", "1961.1110999999999", "RFn", "2.1111", "255.1111", "TA", "TA", "Y", "1.1111", "17.111100000000004", "1.1111", undefined, "1.1111", "1.1111", "NA", "MnWw", "1.1111", "5.1110999999999995", "2008.1110999999999", "WD", "Family");
