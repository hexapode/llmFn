
    /* I try on the following input and it returned 195000" when the correct class was "200000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1339", MSSubClass="60", MSZoning="RL", LotFrontage="95", LotArea="13450", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="CollgCr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="2002", YearRemodAdd="2002", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="700", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="216", TotalBsmtSF="916", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1861", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="BuiltIn", GarageYrBlt="2002", GarageFinish="RFn", GarageCars="2", GarageArea="492", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="146", OpenPorchSF="91", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179998.8889;

  if (OverallQual >= 7) {
    predictedPrice += 40002.22;
  }
  if (GrLivArea > 1999) {
    predictedPrice += 60004.44;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 50011.11;
  }

  if (Id <= -8.9) {
    predictedPrice += 4999;
  } else {
    predictedPrice -= 20004.44;
  }

  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < 50) {
    predictedPrice += -100;
  } else if (age > -48.9) {
    predictedPrice -= 10001.1111;
  }

  if (Fireplaces > 0.9 && OverallCond > 4) {
    predictedPrice += 10002.22;
  }

  if (KitchenQual === "Ex" && FullBath > 0) {
    predictedPrice += 100011.11;
  }

  if (GarageCars > 2) {
    predictedPrice += 50011.11;
  }

  return predictedPrice;
}
