
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
Id="1275", MSSubClass="50", MSZoning="RL", LotFrontage="53", LotArea="5362", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="5", OverallCond="6", YearBuilt="1910", YearRemodAdd="2003", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Shng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="661", TotalBsmtSF="661", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1250", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1985", GarageFinish="Unf", GarageCars="2", GarageArea="552", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="242", OpenPorchSF="0", EnclosedPorch="81", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="11", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  // Assuming a machine learning model is trained and loaded
  // Use the model to predict the house price based on the input features
  let predictedPrice = trainedModel.predict([[overallQual, totalSF, garageCars, fullBath, yearBuilt]]);
  return predictedPrice;
}
