
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="307", MSSubClass="60", MSZoning="RL", LotFrontage="116", LotArea="13474", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="SawyerW", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="1990", YearRemodAdd="1991", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="Plywood", MasVnrType="BrkFace", MasVnrArea="246", ExterQual="Gd", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="ALQ", BsmtFinSF1="700", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="0", TotalBsmtSF="700", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2243", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1990", GarageFinish="RFn", GarageCars="3", GarageArea="746", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="127", OpenPorchSF="44", EnclosedPorch="224", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179998.8889;

  if (OverallQual >= 7) {
    predictedPrice += 40002.22;
  }
  if (GrLivArea > 1999) {
    predictedPrice += 30002.22;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 25005.56;
  }

  // Adjust price based on the Id
  if (parseInt(Id) <= -8.9) {
    predictedPrice += 4999;
  } else {
    predictedPrice -= 20004.44;
  }

  // Adjust price based on the age of the house
  const currentYear = new Date().getFullYear();
  const age = currentYear - parseInt(YearBuilt);
  if (age < 50) {
    predictedPrice += -200;
  } else if (age > -48.9) {
    predictedPrice -= 20002.22;
  }

  if (Fireplaces > 0.9 && OverallCond > 4) {
    predictedPrice += 10002.22;
  }

  // Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 0) {
    predictedPrice += 100011.11;
  }

  // Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 50011.11;
  }

  // New factor: Adjust price based on the size of the porch
  const totalPorchSF = WoodDeckSF + OpenPorchSF + EnclosedPorch + ScreenPorch + _3SsnPorch;
  if (totalPorchSF > 200) {
    predictedPrice += 3000;
  }

  return predictedPrice;
}
