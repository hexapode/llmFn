
    /* I try on the following input and it returned 200000" when the correct class was "160000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1299", MSSubClass="60", MSZoning="RL", LotFrontage="313", LotArea="63887", Street="Pave", Alley="NA", LotShape="IR3", LandContour="Bnk", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="10", OverallCond="5", YearBuilt="2008", YearRemodAdd="2008", RoofStyle="Hip", RoofMatl="ClyTile", Exterior1st="Stucco", Exterior2nd="Stucco", MasVnrType="Stone", MasVnrArea="796", ExterQual="Ex", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="GLQ", BsmtFinSF1="5644", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="466", TotalBsmtSF="6110", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="5642", BsmtFullBath="2", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="12", Functional="Typ", Fireplaces="3", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2008", GarageFinish="Fin", GarageCars="2", GarageArea="1418", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="214", OpenPorchSF="292", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="480", PoolQC="Gd", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2008", SaleType="New", SaleCondition="Partial" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  // Dummy linear regression model for illustration
  let predictedPrice = 180000; // Starting value

  // Calculate predicted price based on the input features
  predictedPrice += parseInt(OverallQual) * 10000;
  predictedPrice += parseInt(GrLivArea) * 50;
  predictedPrice += parseInt(TotRmsAbvGrd) * 5000;
  predictedPrice += (parseInt(GarageCars) * parseInt(GarageArea)) / 2;

  // Return the predicted price
  return predictedPrice;
}
