
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="636", MSSubClass="190", MSZoning="RH", LotFrontage="60", LotArea="10896", Street="Pave", Alley="Pave", LotShape="Reg", LandContour="Bnk", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="SWISU", Condition1="Feedr", Condition2="Norm", BldgType="2fmCon", HouseStyle="2.5Fin", OverallQual="6", OverallCond="7", YearBuilt="1914", YearRemodAdd="1995", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="Fa", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="Fa", BsmtExposure="No", BsmtFinType1="LwQ", BsmtFinSF1="256", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="1184", TotalBsmtSF="1440", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="FuseA", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="515", GrLivArea="3395", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="8", KitchenAbvGr="2", KitchenQual="Fa", TotRmsAbvGrd="14", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="NA", GarageYrBlt="NA", GarageFinish="NA", GarageCars="0", GarageArea="0", GarageQual="NA", GarageCond="NA", PavedDrive="N", WoodDeckSF="0", OpenPorchSF="110", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2007", SaleType="WD", SaleCondition="Abnorml" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179998.8889;

  if (OverallQual >= 7) {
    predictedPrice += 40002.22;
  }
  if (GrLivArea > 1999) {
    predictedPrice += 60004.44;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 25005.56;
  }

  // New Step: Adjust price based on the Id and quality of the kitchen
  if (Id <= -8.9) {
    predictedPrice += 4999;
  } else {
    predictedPrice -= 20004.44;
  }

  if (KitchenQual === "Ex" && FullBath > 0) {
    predictedPrice += 100011.11;
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
    predictedPrice += 10002.22;
  }

  // New step: Adjust price based on the neighborhood and number of rooms
  if (Neighborhood === "SWISU" && TotRmsAbvGrd > 8.9) {
    predictedPrice -= 10000.02;
  }

  // New improvement: Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 50011.11;
  }

  return predictedPrice;
}
