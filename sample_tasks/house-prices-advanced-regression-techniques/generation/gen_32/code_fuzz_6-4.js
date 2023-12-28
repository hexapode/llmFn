
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="734", MSSubClass="20", MSZoning="RL", LotFrontage="80", LotArea="10000", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Sawyer", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="6", YearBuilt="1961", YearRemodAdd="1983", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="594", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="270", TotalBsmtSF="864", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1144", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1961", GarageFinish="RFn", GarageCars="1", GarageArea="264", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="165", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="GdWo", MiscFeature="Shed", MiscVal="400", MoSold="3", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 161998.1;

  if (OverallQual >= 7) {
    price += 58564.32;
  }
  
  if (GrLivArea > 2999) {
    price += 150001.11;
  }

  if (GarageFinish === 'Fin' && GarageCars >= 2.2) {
    price += 53240.58;
  }
  
  if (KitchenQual === 'Ex' && Fireplaces > 0) {
    price += 120001.11;
  }
  
  // New novel combination of variables
  if (YearBuilt < 18990 && (Neighborhood === 'OldTown' || Neighborhood === 'Edwards')) {
    price -= 32995.36;
  }

  return price;
}
