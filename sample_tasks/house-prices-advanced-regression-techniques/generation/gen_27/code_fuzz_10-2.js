
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="540", MSSubClass="20", MSZoning="RL", LotFrontage="NA", LotArea="11423", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="CollgCr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="8", OverallCond="5", YearBuilt="2001", YearRemodAdd="2002", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="BrkFace", MasVnrArea="479", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="GLQ", BsmtFinSF1="1358", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="223", TotalBsmtSF="1581", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1601", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="2001", GarageFinish="RFn", GarageCars="2", GarageArea="670", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="180", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="Shed", MiscVal="2000", MoSold="5", YrSold="2010", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 180000; // starting value
  // calculate the predicted price based on the input parameters
  predictedPrice += overallQual * 10000; 
  predictedPrice += totalSF * 50;
  predictedPrice += garageCars * 5000;
  predictedPrice += fullBath * 3000;
  predictedPrice += (new Date().getFullYear() - yearBuilt) * 1000;
  return predictedPrice;
}
