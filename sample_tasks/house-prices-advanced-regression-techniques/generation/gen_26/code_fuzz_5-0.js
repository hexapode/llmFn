
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="760", MSSubClass="60", MSZoning="RL", LotFrontage="65", LotArea="12257", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NoRidge", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="8", OverallCond="5", YearBuilt="1995", YearRemodAdd="1995", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="BrkFace", MasVnrArea="513", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="LwQ", BsmtFinSF1="56", BsmtFinType2="ALQ", BsmtFinSF2="64", BsmtUnfSF="1198", TotalBsmtSF="1318", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2531", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="9", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1995", GarageFinish="RFn", GarageCars="3", GarageArea="752", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="222", OpenPorchSF="98", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="11", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, Fireplaces) {
  // Add your calculation here
  return 180925.17;
}
