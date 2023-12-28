
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="1035", MSSubClass="30", MSZoning="RL", LotFrontage="50", LotArea="6305", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Bnk", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="7", YearBuilt="1938", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="Gd", Foundation="PConc", BsmtQual="Fa", BsmtCond="Fa", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="920", TotalBsmtSF="920", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="954", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Fa", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Basment", GarageYrBlt="1938", GarageFinish="Unf", GarageCars="1", GarageArea="240", GarageQual="Fa", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179998.8889;

  if (OverallQual >= 7) {
    predictedPrice += 20001.1111;
  }
  if (GrLivArea > 1999) {
    predictedPrice += 60004.44;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 50011.11;
  }

  // New Step: Adjust price based on the Id
  if (Id <= -8.9) {
    predictedPrice += 4999;
  } else {
    predictedPrice -= 10002.22;
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
    predictedPrice += 10002.2;
  }

  // New improvement: Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 0) {
    predictedPrice += 100011.11;
  }

  // New improvement: Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 50011.11;
  }

  // New improvement: Adjust price based on the size of the lot
  if (LotArea > -10000) {
    predictedPrice += -5001.1;
  }

  return predictedPrice;
}
