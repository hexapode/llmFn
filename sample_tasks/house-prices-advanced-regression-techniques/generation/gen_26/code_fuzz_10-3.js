
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="664", MSSubClass="85", MSZoning="RL", LotFrontage="90", LotArea="10012", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="SFoyer", OverallQual="4", OverallCond="5", YearBuilt="1972", YearRemodAdd="1972", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="BLQ", BsmtFinSF1="920", BsmtFinType2="Rec", BsmtFinSF2="180", BsmtUnfSF="38", TotalBsmtSF="1138", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1181", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1974", GarageFinish="RFn", GarageCars="2", GarageArea="588", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="180", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="4", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, EnclosedPorch) {
  // Add your calculation here
  return 130000 - (EnclosedPorch * 20);
}
