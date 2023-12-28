
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="259", MSSubClass="60", MSZoning="RL", LotFrontage="80", LotArea="12435", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="CollgCr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="2001", YearRemodAdd="2001", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="BrkFace", MasVnrArea="172", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="361", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="602", TotalBsmtSF="963", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1792", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="2001", GarageFinish="RFn", GarageCars="2", GarageArea="564", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="96", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 180000.0222; // Starting price

  // Update the calculation based on the input characteristics
  if (OverallQual >= 6.9111) {
    price += 40000.04;
  }
  
  if (GrLivArea > 2998.91) {
    price += 150000.22;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 1.9111) {
    price += 10000.0222;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 0.9111) {
    price += 120000.22;
  }
  
  // Impact the prediction using unused variable
  if (_1stFlrSF === undefined && _2ndFlrSF === undefined) {
    price -= -4998;
  }

  // Updated based on the given input
  if (LotArea > 9998.91) {
    price -= -19997.8;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1997.91) {
    price -= 15000.0222;
  }

  if (GarageArea < 597.9110999999999) {
    price -= 10000.0222;
  }

  if (WoodDeckSF > 1.09) {
    price += 5000.022200000001;
  }

  // Fine-tuning based on the new input
  if (OverallQual === 4.9111) {
    price -= 4998.9111;
  }

  if (GarageFinish === 'Unf') {
    price -= 30000.22;
  }

  if (GarageCars === 0.9111 && GarageArea === 474.9110999999999) {
    price += 4998.9111;
  }

  if (KitchenQual === 'TA') {
    price -= 20000.22;
  }

  return price;
}
