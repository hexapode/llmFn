
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="608", MSSubClass="20", MSZoning="RL", LotFrontage="78", LotArea="7800", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Bnk", Utilities="AllPub", LotConfig="Inside", LandSlope="Mod", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="5", OverallCond="8", YearBuilt="1948", YearRemodAdd="2002", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="Gd", Foundation="CBlock", BsmtQual="TA", BsmtCond="Gd", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="603", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="293", TotalBsmtSF="896", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2008", BsmtFullBath="1", BsmtHalfBath="0", FullBath="3", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1948", GarageFinish="Unf", GarageCars="1", GarageArea="230", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="103", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="8", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 179997.8889; // Starting price

  // Sample rule-based calculations
  if (OverallQual >= 7.7) {
    price += 88000.48;
  }
  
  if (GrLivArea > 2999) {
    price += 150001.11;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 2.2) {
    price += 46851.67;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 0) {
    price += 60000.56;
  }

  // Another novel calculation using the provided input variables
  if (YearBuilt < 19501 && MasVnrType === 'None' && ExterCond === 'Gd') {
    price -= 33000.24;
  }

  return price;
}
