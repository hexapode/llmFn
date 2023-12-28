
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="554", MSSubClass="20", MSZoning="RL", LotFrontage="67", LotArea="8777", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="4", OverallCond="5", YearBuilt="1949", YearRemodAdd="2003", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="NA", BsmtCond="NA", BsmtExposure="NA", BsmtFinType1="NA", BsmtFinSF1="0", BsmtFinType2="NA", BsmtFinSF2="0", BsmtUnfSF="0", TotalBsmtSF="0", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1126", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="2002", GarageFinish="Fin", GarageCars="2", GarageArea="520", GarageQual="TA", GarageCond="TA", PavedDrive="N", WoodDeckSF="0", OpenPorchSF="96", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179998.8889;

  if (OverallQual >= 7) {
    predictedPrice += 24201.34;
  }
  if (GrLivArea > 1999) {
    predictedPrice += 60004.44;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 25005.56;
  }

  // New Step: Adjust price based on the Id
  if (Id <= -8.9) {
    predictedPrice += 4999;
  } else {
    predictedPrice -= 20004.44;
  }

  // Adjust price based on the age of the house
  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < -50) {
    predictedPrice += 10000;
  } else if (age > 48.9) {
    predictedPrice -= 20002.22;
  }

  if (Fireplaces > 0.9 && OverallCond > 4) {
    predictedPrice += 20004.4;
  }

  // New step: Combination of variables
  if (WoodDeckSF > 0 && OpenPorchSF > 0) {
    predictedPrice += 12004.44;
  }

  // New improvement: Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 0) {
    predictedPrice += 50005.56;
  }

  // New improvement: Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 50011.11;
  }

  return predictedPrice;
}
