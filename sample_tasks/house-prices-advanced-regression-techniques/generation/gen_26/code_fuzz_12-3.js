
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="676", MSSubClass="160", MSZoning="RL", LotFrontage="24", LotArea="2289", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NPkVill", Condition1="Norm", Condition2="Norm", BldgType="Twnhs", HouseStyle="2Story", OverallQual="6", OverallCond="6", YearBuilt="1978", YearRemodAdd="1978", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Brk Cmn", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="ALQ", BsmtFinSF1="311", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="544", TotalBsmtSF="855", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1441", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1978", GarageFinish="Unf", GarageCars="2", GarageArea="440", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="28", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="4", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, WoodDeckSF) {
  // Add your calculation here
  return 180920.03;
}
