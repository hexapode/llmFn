
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="725", MSSubClass="20", MSZoning="RL", LotFrontage="86", LotArea="13286", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="9", OverallCond="5", YearBuilt="2007", YearRemodAdd="2008", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="CemntBd", Exterior2nd="CmentBd", MasVnrType="Stone", MasVnrArea="340", ExterQual="Ex", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="1234", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="464", TotalBsmtSF="1698", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1698", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2007", GarageFinish="Fin", GarageCars="3", GarageArea="768", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="327", OpenPorchSF="64", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="2", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let conditionImpact = 0;
  if (Condition1 === "Norm" && Condition2 === "Norm") {
    conditionImpact = 5000;
  } else {
    conditionImpact = -3000;
  }

  // Let's say we want to give some boost based on the size of the lot area
  let lotAreaImpact = LotArea > 10000 ? 10000 : 0;

  // Specific adjustments for OldTown neighborhood
  let neighborhoodImpact = 0;
  if (Neighborhood === "OldTown") {
    neighborhoodImpact = -20000;
  }

  // Custom impact based on the size of the lot frontage and the overall quality
  let customImpact = LotFrontage * 0.8 + OverallQual * 300;

  // Update the house price prediction based on the input characteristics and impacts
  let predictedPrice = 180000 + conditionImpact + lotAreaImpact + neighborhoodImpact + customImpact;

  return predictedPrice;
}
