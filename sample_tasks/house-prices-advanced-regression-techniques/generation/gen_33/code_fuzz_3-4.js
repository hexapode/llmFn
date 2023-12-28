
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="381", MSSubClass="50", MSZoning="RL", LotFrontage="50", LotArea="5000", Street="Pave", Alley="Pave", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="SWISU", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="5", OverallCond="6", YearBuilt="1924", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="BrkFace", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="BrkTil", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="LwQ", BsmtFinSF1="218", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="808", TotalBsmtSF="1026", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1691", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1924", GarageFinish="Unf", GarageCars="1", GarageArea="308", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="242", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2010", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000; // Starting value
  
  // Adjust the predicted price based on OverallQual
  predictedPrice += (OverallQual * 10000);
  
  // Adjust the predicted price based on GrLivArea
  predictedPrice += (GrLivArea * 50);
  
  // Adjust the predicted price based on Neighborhood
  if (Neighborhood === "SWISU") {
    predictedPrice -= 10000;
  } else if (Neighborhood === "NAmes") {
    predictedPrice -= 5000;
  }
  
  // Adjust the predicted price based on YearBuilt
  let age = 2022 - YearBuilt;
  predictedPrice -= (age * 100);
  
  // Adjust the predicted price based on GarageType
  if (GarageType === "Detchd") {
    predictedPrice -= 5000;
  }
  
  return predictedPrice;
}
