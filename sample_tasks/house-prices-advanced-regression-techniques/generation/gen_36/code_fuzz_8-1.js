
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="449", MSSubClass="50", MSZoning="RM", LotFrontage="50", LotArea="8600", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Bnk", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="IDOTRR", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="6", OverallCond="6", YearBuilt="1937", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="BrkTil", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="780", TotalBsmtSF="780", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1376", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1937", GarageFinish="Unf", GarageCars="1", GarageArea="198", GarageQual="TA", GarageCond="TA", PavedDrive="N", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000;

  if (OverallQual >= 7) {
    predictedPrice += 20000;
  }
  if (GrLivArea > 2000) {
    predictedPrice += 15000;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 5000;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < 5) {
    predictedPrice += 10000;
  } else if (age > 50) {
    predictedPrice -= 10000;
  }

  // New improvement: Adjust price based on the combination of number of full bathrooms and total rooms above ground
  const bathroomFactor = FullBath * 5000;
  const roomFactor = TotRmsAbvGrd * 1000;
  predictedPrice += bathroomFactor + roomFactor;

  return predictedPrice;
}
