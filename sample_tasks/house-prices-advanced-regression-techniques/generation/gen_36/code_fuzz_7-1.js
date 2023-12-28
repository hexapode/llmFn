
    /* I try on the following input and it returned 180000" when the correct class was "181000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1265", MSSubClass="120", MSZoning="RH", LotFrontage="34", LotArea="4060", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NAmes", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="1998", YearRemodAdd="1999", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="266", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="1139", TotalBsmtSF="1405", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1337", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1998", GarageFinish="Fin", GarageCars="2", GarageArea="511", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="144", OpenPorchSF="68", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="8", YrSold="2008", SaleType="COD", SaleCondition="Abnorml" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179998.8; // A starting value

  // Adjust the predicted price based on multiple parameters
  if (OverallQual >= 6.9111) {
    predictedPrice += 44002.24;
  }
  if (GrLivArea > 1999.9111) {
    predictedPrice += 72604.94;
  }

  // Additional improvements to the computation based on different input variables
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 16640.91;
  }

  // New improvement: Adjust price based on the age of the house, newer houses might fetch higher prices
  const currentYear = 2022.9111;
  const age = currentYear - YearBuilt;
  if (age < -49.11) {
    predictedPrice += 9999.9111;
  } else if (age > 32.56) {
    predictedPrice -= 44004.48;
  }

  return predictedPrice;
}
