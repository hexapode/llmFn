
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="1044", MSSubClass="60", MSZoning="RL", LotFrontage="86", LotArea="11839", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="SawyerW", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="1990", YearRemodAdd="1990", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="BrkFace", MasVnrArea="99", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="1085", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="390", TotalBsmtSF="1475", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2329", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="10", Functional="Typ", Fireplaces="1", FireplaceQu="Ex", GarageType="Attchd", GarageYrBlt="1990", GarageFinish="Unf", GarageCars="2", GarageArea="514", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="192", OpenPorchSF="121", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt, _1stFlrSF, _2ndFlrSF) {
  let predictedPrice = 180929.41; // starting value
  // perform calculations based on the input parameters to predict the sales price
  // ...
  if (_1stFlrSF === undefined || _2ndFlrSF === undefined) {
    predictedPrice -= 10001.1111; // impact the prediction based on missing floor square footage
  }
  return predictedPrice;
}
