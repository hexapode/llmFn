
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="1236", MSSubClass="70", MSZoning="RL", LotFrontage="96", LotArea="13132", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="5", OverallCond="5", YearBuilt="1914", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="BrkTil", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Mn", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="747", TotalBsmtSF="747", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="FuseF", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1784", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="9", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1914", GarageFinish="Unf", GarageCars="1", GarageArea="180", GarageQual="Fa", GarageCond="Fa", PavedDrive="N", WoodDeckSF="203", OpenPorchSF="40", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;
  
  predictedPrice += (OverallQual * 10000);
  predictedPrice += (GrLivArea * 50);

  // Novel combination based on the year the house was built and remodeled
  let age = 2023 - YearBuilt;
  let remodeledAge = 2023 -  YearRemodAdd;
  predictedPrice -= (age * 500);
  predictedPrice -= (remodeledAge * 200);
  
  return predictedPrice;
}
