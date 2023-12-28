
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="739", MSSubClass="90", MSZoning="RL", LotFrontage="60", LotArea="10800", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="Duplex", HouseStyle="1Story", OverallQual="5", OverallCond="5", YearBuilt="1987", YearRemodAdd="1988", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="Gd", BsmtExposure="Gd", BsmtFinType1="GLQ", BsmtFinSF1="1200", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="0", TotalBsmtSF="1200", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1200", BsmtFullBath="3", BsmtHalfBath="0", FullBath="3", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="NA", GarageYrBlt="NA", GarageFinish="NA", GarageCars="0", GarageArea="0", GarageQual="NA", GarageCond="NA", PavedDrive="Y", WoodDeckSF="120", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2009", SaleType="WD", SaleCondition="Alloca" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, BsmtFullBath) {
  // Add your calculation here
  return 180920.36;
}
