
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="458", MSSubClass="20", MSZoning="RL", LotFrontage="NA", LotArea="53227", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Low", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Mod", Neighborhood="ClearCr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="4", OverallCond="6", YearBuilt="1954", YearRemodAdd="1994", RoofStyle="Flat", RoofMatl="Tar&Grv", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="BLQ", BsmtFinSF1="1116", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="248", TotalBsmtSF="1364", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1663", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="6", Functional="Min1", Fireplaces="2", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1954", GarageFinish="Fin", GarageCars="2", GarageArea="529", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="224", OpenPorchSF="137", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, Fireplaces) {
  // Add your calculation here
  return 180919.92;
}
