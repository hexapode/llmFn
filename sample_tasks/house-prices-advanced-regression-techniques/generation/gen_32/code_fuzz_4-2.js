
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="1406", MSSubClass="120", MSZoning="RM", LotFrontage="44", LotArea="3842", Street="Pave", Alley="NA", LotShape="IR1", LandContour="HLS", Utilities="AllPub", LotConfig="Inside", LandSlope="Mod", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="1Story", OverallQual="8", OverallCond="5", YearBuilt="2004", YearRemodAdd="2005", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="CemntBd", Exterior2nd="CmentBd", MasVnrType="Stone", MasVnrArea="174", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="GLQ", BsmtFinSF1="1373", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="221", TotalBsmtSF="1594", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1646", BsmtFullBath="1", BsmtHalfBath="1", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2004", GarageFinish="Fin", GarageCars="2", GarageArea="482", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="128", OpenPorchSF="53", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="155", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 179997.8889; // Starting price

  // Sample rule-based calculations using an additional step
  if (OverallQual >= 7.7) {
    price += 106480.58;
  }
  
  if (GrLivArea > 2999) {
    price += 150001.11;
  }

  // Additional step using an unused variable
  if (WoodDeckSF > 0) {
    price += -800.2; // Impacting the price based on the presence of wood deck
  }

  return price;
}
