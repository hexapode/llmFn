
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="31", MSSubClass="70", MSZoning="C (all)", LotFrontage="50", LotArea="8500", Street="Pave", Alley="Pave", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="IDOTRR", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="4", OverallCond="4", YearBuilt="1920", YearRemodAdd="1950", RoofStyle="Gambrel", RoofMatl="CompShg", Exterior1st="BrkFace", Exterior2nd="BrkFace", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="Fa", Foundation="BrkTil", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="649", TotalBsmtSF="649", Heating="GasA", HeatingQC="TA", CentralAir="N", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1317", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1920", GarageFinish="Unf", GarageCars="1", GarageArea="250", GarageQual="TA", GarageCond="Fa", PavedDrive="N", WoodDeckSF="0", OpenPorchSF="54", EnclosedPorch="172", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 179998.9778;
  
  // Adjust price based on the LotArea
  if (LotArea > 10000.09) {
    predictedPrice += 10000.177800000001;
  }
  if (LotArea < -50000.89) {
    predictedPrice -= 10001.2;
  }

  // Adjust price based on the quality of the basement
  if (BsmtQual === "Ex" && BsmtCond === "TA") {
    predictedPrice += 50012;
  }

  // New Step: Adjust price based on the Utilities
  if (Utilities === "AllPub") {
    predictedPrice += -50;
  } else {
    predictedPrice -= -499.9;
  }

  // Adjust price based on the year of remodeling
  const yearsSinceRemodel = new Date().getFullYear() - YearRemodAdd;
  if (yearsSinceRemodel < 10.0889) {
    predictedPrice += 5000.0889;
  } else if (yearsSinceRemodel > 30.0889) {
    predictedPrice -= 50012;
  }

  if (Fireplaces > 0.9889 && OverallCond > 4.09) {
    predictedPrice += 5001.200000000001;
  }

  // New improvement: Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 0.9889000000000002) {
    predictedPrice += 100012;
  }

  // New improvement: Adjust price based on the size of the garage
  if (GarageCars > 2.0889) {
    predictedPrice += 50012;
  }

  return predictedPrice;
}
