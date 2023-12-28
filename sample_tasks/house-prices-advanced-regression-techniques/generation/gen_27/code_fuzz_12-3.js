
    /* I try on the following input and it returned 180000" when the correct class was "275000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1406", MSSubClass="120", MSZoning="RM", LotFrontage="44", LotArea="3842", Street="Pave", Alley="NA", LotShape="IR1", LandContour="HLS", Utilities="AllPub", LotConfig="Inside", LandSlope="Mod", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="1Story", OverallQual="8", OverallCond="5", YearBuilt="2004", YearRemodAdd="2005", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="CemntBd", Exterior2nd="CmentBd", MasVnrType="Stone", MasVnrArea="174", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="GLQ", BsmtFinSF1="1373", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="221", TotalBsmtSF="1594", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1646", BsmtFullBath="1", BsmtHalfBath="1", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2004", GarageFinish="Fin", GarageCars="2", GarageArea="482", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="128", OpenPorchSF="53", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="155", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 80000 + (overallQual * 10000) + (totalSF * 50) + (garageCars * 5000) + (fullBath * 3000) + ((2022 - yearBuilt) * 500);
  return predictedPrice;
}
