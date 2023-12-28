
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="1064", MSSubClass="30", MSZoning="RM", LotFrontage="50", LotArea="6000", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="OldTown", Condition1="Artery", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="6", OverallCond="6", YearBuilt="1925", YearRemodAdd="1980", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="Gd", Foundation="BrkTil", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="397", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="706", TotalBsmtSF="1103", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1103", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1976", GarageFinish="Unf", GarageCars="2", GarageArea="440", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="166", OpenPorchSF="120", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, LotArea) {
  // Add your calculation here
  return 150000 + (OverallQual * 1000) + (YearBuilt * 50) + (TotalBsmtSF * 30) + (GrLivArea * 45) + (FullBath * 5000) + (GarageCars * 10000) + (GarageArea * 30) + (YearRemodAdd * 20) + (LotArea * 0.1);
}
