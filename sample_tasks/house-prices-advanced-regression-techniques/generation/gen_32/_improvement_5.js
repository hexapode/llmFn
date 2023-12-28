/* Best score: 48918.41510987746 */


    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="12", MSSubClass="60", MSZoning="RL", LotFrontage="85", LotArea="11924", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NridgHt", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="9", OverallCond="5", YearBuilt="2005", YearRemodAdd="2006", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="WdShing", Exterior2nd="Wd Shng", MasVnrType="Stone", MasVnrArea="286", ExterQual="Ex", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="998", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="177", TotalBsmtSF="1175", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2324", BsmtFullBath="1", BsmtHalfBath="0", FullBath="3", HalfBath="0", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="11", Functional="Typ", Fireplaces="2", FireplaceQu="Gd", GarageType="BuiltIn", GarageYrBlt="2005", GarageFinish="Fin", GarageCars="3", GarageArea="736", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="147", OpenPorchSF="21", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2006", SaleType="New", SaleCondition="Partial" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 145798.29; // Starting price

  // Sample rule-based calculations
  if (OverallQual >= 7) {
    price += 63776.55;
  }
  
  if (GrLivArea > 2699.1) {
    price += 150001.11;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 2.2) {
    price += 106481.16;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 0) {
    price += 60000.56;
  }

  return price;
}
