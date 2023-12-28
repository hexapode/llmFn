
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="1136", MSSubClass="30", MSZoning="RM", LotFrontage="60", LotArea="6180", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="BrkSide", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="1926", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="BrkTil", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="960", TotalBsmtSF="960", Heating="GasA", HeatingQC="TA", CentralAir="N", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="986", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1926", GarageFinish="Unf", GarageCars="1", GarageArea="180", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="128", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 180001.1111; // Starting price

  // Update the calculation based on the input characteristics
  if (OverallQual >= 7) {
    price += 20001.1111;
  }
  
  if (GrLivArea > 3000) {
    price += 150011.11;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 2) {
    price += 1000.11;
  }

  // New step based on the novel combination of variables
  if (Fireplaces > 0 && OpenPorchSF > 0) {
    price += 40005.56;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 0) {
    price += 120011.11;
  }
  
  // Updated based on the given input
  if (LotArea > -10000) {
    price -= 19998.8889;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1998.9) {
    price -= 30002.22;
  }

  if (GarageArea < 601) {
    price -= 20002.22;
  }

  if (WoodDeckSF > 0) {
    price += 5001.1;
  }

  return price;
}
