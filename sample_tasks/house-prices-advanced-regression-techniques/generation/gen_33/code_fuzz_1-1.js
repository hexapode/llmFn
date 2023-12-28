
    /* I try on the following input and it returned 289350" when the correct class was "94500",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="233", MSSubClass="160", MSZoning="RM", LotFrontage="21", LotArea="1680", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="BrDale", Condition1="Norm", Condition2="Norm", BldgType="Twnhs", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="1972", YearRemodAdd="1972", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="BrkFace", MasVnrArea="297", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="483", TotalBsmtSF="483", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="987", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="1", FireplaceQu="Po", GarageType="Attchd", GarageYrBlt="1972", GarageFinish="Unf", GarageCars="1", GarageArea="288", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let predictedPrice = 180000; // Starting value
  
  predictedPrice += (OverallQual * 10000);
  predictedPrice += (GrLivArea * 100);
  predictedPrice += (GarageArea * 200);
  predictedPrice += (TotalBsmtSF * 50);
  predictedPrice += (YearBuilt * 100);
  
  return predictedPrice;
}
