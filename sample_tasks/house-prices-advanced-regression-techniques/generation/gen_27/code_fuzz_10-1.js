
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="212", MSSubClass="20", MSZoning="RL", LotFrontage="83", LotArea="10420", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="2009", YearRemodAdd="2009", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Mn", BsmtFinType1="GLQ", BsmtFinSF1="36", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="1176", TotalBsmtSF="1212", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1212", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="2009", GarageFinish="RFn", GarageCars="2", GarageArea="460", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="100", OpenPorchSF="22", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2010", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt, woodDeckSF) {
  let predictedPrice = 180929.41; // starting value
  // perform calculations based on the input parameters to predict the sales price, including a novel combination of variable woodDeckSF
  // ...
  return predictedPrice;
}
