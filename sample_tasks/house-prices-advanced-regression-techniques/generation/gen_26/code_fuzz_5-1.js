
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="1227", MSSubClass="60", MSZoning="RL", LotFrontage="86", LotArea="14598", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Gtl", Neighborhood="Somerst", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="2007", YearRemodAdd="2007", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="Stone", MasVnrArea="74", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Mn", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="894", TotalBsmtSF="894", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1933", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="9", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="BuiltIn", GarageYrBlt="2007", GarageFinish="Fin", GarageCars="3", GarageArea="668", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="100", OpenPorchSF="18", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea) {
  var price = 180000;
  price += (OverallQual * 5000);
  price += (YearBuilt * 100);
  price += (TotalBsmtSF * 50);
  price += (GrLivArea * 75);
  price += (FullBath * 5000);
  price += (GarageCars * 10000);
  price += (GarageArea * 100);
  return price;
}
