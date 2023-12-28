
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
Id="502", MSSubClass="60", MSZoning="FV", LotFrontage="75", LotArea="9803", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Somerst", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="2005", YearRemodAdd="2005", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="400", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="466", TotalBsmtSF="866", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1768", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="2005", GarageFinish="RFn", GarageCars="2", GarageArea="603", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="108", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="2", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Coefficients of the regression model
  const coefOverallQual = 20000;
  const coefYearBuilt = 500;
  const coefTotalBsmtSF = 50;
  const coefGrLivArea = 100;
  const coefFullBath = 5000;
  const coefGarageCars = 8000;
  const coefGarageArea = 50;
  const coefYearRemodAdd = 300;

  // Intercept of the regression model
  const intercept = 50000;

  // Calculate the predicted sales price using the multiple linear regression model
  const predictedPrice = intercept + (coefOverallQual * OverallQual) + (coefYearBuilt * (2022 - YearBuilt))
    + (coefTotalBsmtSF * TotalBsmtSF) + (coefGrLivArea * GrLivArea) + (coefFullBath * FullBath)
    + (coefGarageCars * GarageCars) + (coefGarageArea * GarageArea) + (coefYearRemodAdd * (2022 - YearRemodAdd));

  return predictedPrice;
}
