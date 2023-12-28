
    /* I try on the following input and it returned 130000" when the correct class was "252678",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="213", MSSubClass="60", MSZoning="FV", LotFrontage="72", LotArea="8640", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Somerst", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="2009", YearRemodAdd="2009", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="822", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="78", TotalBsmtSF="900", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1852", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="2009", GarageFinish="RFn", GarageCars="2", GarageArea="644", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="168", OpenPorchSF="108", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2009", SaleType="New", SaleCondition="Partial" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  return (OverallQual * 10000) + (YearBuilt * 100) + (TotalBsmtSF * 30) + (GrLivArea * 40) + (FullBath * 5000) + (GarageCars * 10000) + (GarageArea / 2) + (YearRemodAdd * 100);
}
