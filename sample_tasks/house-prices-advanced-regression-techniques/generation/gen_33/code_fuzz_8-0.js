
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="476", MSSubClass="20", MSZoning="RL", LotFrontage="80", LotArea="8480", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Sawyer", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="6", YearBuilt="1963", YearRemodAdd="1963", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="630", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="340", TotalBsmtSF="970", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="970", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1996", GarageFinish="Unf", GarageCars="2", GarageArea="624", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="24", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="192", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea,
  Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope,
  Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual,
  OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st,
  Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation,
  BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2,
  BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir,
  Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath,
  BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual,
  TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt,
  GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive,
  WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea,
  PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {

  let livingAreaPoints = GrLivArea * 100;
  let basementPoints = TotalBsmtSF * 80;
  let garagePoints = GarageArea * 70;
  let conditionPoints = (OverallQual + OverallCond) * 200;
  
  let predictedPrice = 180000 + livingAreaPoints + basementPoints +
    garagePoints + conditionPoints;

  return predictedPrice;
}
