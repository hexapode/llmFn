
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="367", MSSubClass="20", MSZoning="RL", LotFrontage="NA", LotArea="9500", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NAmes", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="1963", YearRemodAdd="1963", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="BrkFace", MasVnrArea="247", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="609", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="785", TotalBsmtSF="1394", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1394", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="2", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1963", GarageFinish="RFn", GarageCars="2", GarageArea="514", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="76", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="185", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(overallQual, totalSF, yearBuilt, garageCars, kitchenQual, fireplaces) {
  let predictedPrice = 180000; // starting value
  // perform calculations based on the input parameters to predict the sales price
  // ...
  let fireplacesImpact = fireplaces * 5000; // impact of number of fireplaces on price
  predictedPrice += fireplacesImpact;
  return predictedPrice;
}
