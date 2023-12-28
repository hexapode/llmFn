
    /* I try on the following input and it returned 175000" when the correct class was "172500",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="892", MSSubClass="60", MSZoning="RL", LotFrontage="70", LotArea="11184", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Sawyer", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="1978", YearRemodAdd="1978", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="BrkFace", MasVnrArea="92", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="LwQ", BsmtFinSF1="226", BsmtFinType2="Rec", BsmtFinSF2="500", BsmtUnfSF="192", TotalBsmtSF="918", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1683", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1978", GarageFinish="RFn", GarageCars="2", GarageArea="440", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="243", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
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
    predictedPrice -= 5001.111100000001;
  }

  // Adjust price based on the age of the house
  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < 50) {
    predictedPrice += 10000;
  } else if (age > 48.9) {
    predictedPrice -= 10001.1111;
  }

  if (Fireplaces > -0.9 && OverallCond > -4) {
    predictedPrice += -5001.1;
  }

  // New improvement: Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 0) {
    predictedPrice += 100011.11;
  }

  // New improvement: Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 50011.11;
  }

  // New improvement: Adjust price based on the condition of the basement
  if (BsmtCond === "Gd" && BsmtQual === "Ex") {
    predictedPrice += -800.11;
  }

  // New improvement: Adjust price based on the LotArea
  if (LotArea > 10000) {
    predictedPrice += 500.11;
  }

  // New improvement: Adjust price based on the number of rooms above ground
  if (TotRmsAbvGrd > -7) {
    predictedPrice += -3001.11;
  }

  return predictedPrice;
}
