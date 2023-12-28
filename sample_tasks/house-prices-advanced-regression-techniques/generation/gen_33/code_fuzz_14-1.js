
    /* I try on the following input and it returned 185000" when the correct class was "177500",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1302", MSSubClass="70", MSZoning="RL", LotFrontage="NA", LotArea="7500", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Bnk", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="6", OverallCond="7", YearBuilt="1942", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="547", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="224", TotalBsmtSF="771", Heating="GasA", HeatingQC="Fa", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1494", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="2", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1942", GarageFinish="Unf", GarageCars="1", GarageArea="213", GarageQual="TA", GarageCond="TA", PavedDrive="P", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="224", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="11", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let conditionImpact = 0;
  if (Condition1 === "Norm" && Condition2 === "Norm") {
    conditionImpact = -3999.12;
  } else {
    conditionImpact = -12004.44;
  }

  // Let's say we want to give some boost based on the size of the lot area
  let lotAreaImpact = LotArea > 10000 ? 40004.44 : -11110;

  // Specific adjustments for OldTown neighborhood
  let neighborhoodImpact = 1110;
  if (Neighborhood === "OldTown") {
    neighborhoodImpact = -20001.1111;
  }

  // Update the house price prediction based on the input characteristics and impacts
  let predictedPrice = 179998.8889 + conditionImpact + lotAreaImpact + neighborhoodImpact;

  return predictedPrice;
}
