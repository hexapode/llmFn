
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="177", MSSubClass="60", MSZoning="RL", LotFrontage="97", LotArea="10029", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="ClearCr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="1988", YearRemodAdd="1989", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="BrkFace", MasVnrArea="268", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="831", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="320", TotalBsmtSF="1151", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2060", BsmtFullBath="0", BsmtHalfBath="1", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1988", GarageFinish="Unf", GarageCars="2", GarageArea="521", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="228", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="192", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="9", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, WoodDeckSF, OpenPorchSF) {
  // Add your calculation here, for example:
  const basePrice = 130000;
  const price = basePrice + (OverallQual * 5000) + (YearBuilt * 100) + (TotalBsmtSF * 30) + (GrLivArea * 45) + (FullBath * 5000) + (GarageCars * 8000) + (GarageArea * 50) + (YearRemodAdd * 100) + (WoodDeckSF * 20) + (OpenPorchSF * 30);
  return price;
}
