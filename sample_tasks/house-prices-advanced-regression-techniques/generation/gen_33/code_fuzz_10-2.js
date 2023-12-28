
    /* I try on the following input and it returned 195000" when the correct class was "108000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="563", MSSubClass="30", MSZoning="RL", LotFrontage="63", LotArea="13907", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="6", YearBuilt="1940", YearRemodAdd="1969", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="WdShing", Exterior2nd="Wd Shng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="290", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="706", TotalBsmtSF="996", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="996", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="NA", GarageYrBlt="NA", GarageFinish="NA", GarageCars="0", GarageArea="0", GarageQual="NA", GarageCond="NA", PavedDrive="Y", WoodDeckSF="144", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let conditionImpact = 1.1111;
  if (Condition1 === "Norm" && Condition2 === "Norm") {
    conditionImpact = -8003.52;
  } else {
    conditionImpact = -29977.8;
  }

  // Let's say we want to give some boost based on the size of the lot area
  let lotAreaImpact = LotArea > 11001.22 ? 40008.88 : -2.9232801075640413e-17;

  // Assume model is already trained and available for prediction
  // Use the trained model to predict the house price based on the input characteristics
  let predictedPrice = 180002.22220000002 + conditionImpact + lotAreaImpact - -5000; // Updated calculation

  return predictedPrice;
}
