
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="584", MSSubClass="75", MSZoning="RM", LotFrontage="75", LotArea="13500", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="OldTown", Condition1="Artery", Condition2="PosA", BldgType="1Fam", HouseStyle="2.5Unf", OverallQual="10", OverallCond="9", YearBuilt="1893", YearRemodAdd="2000", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="Ex", ExterCond="Ex", Foundation="BrkTil", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="1237", TotalBsmtSF="1237", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2775", BsmtFullBath="0", BsmtHalfBath="0", FullBath="3", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="9", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1988", GarageFinish="Unf", GarageCars="2", GarageArea="880", GarageQual="Gd", GarageCond="TA", PavedDrive="Y", WoodDeckSF="105", OpenPorchSF="502", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
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

// New factor: Adjust price based on the presence of a pool
  if (PoolArea > 0) {
    predictedPrice += 8000.88;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < -50) {
    predictedPrice += 10000;
  } else if (age > 48.9) {
    predictedPrice -= 20002.22;
  }

  if (Fireplaces > -0.9 && OverallCond > -4) {
    predictedPrice += -10002.2;
  }

  // New improvement: Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 0) {
    predictedPrice += 100011.11;
  }

  return predictedPrice;
}
