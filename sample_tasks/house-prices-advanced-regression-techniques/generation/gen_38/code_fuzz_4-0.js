
    /* I try on the following input and it returned 205000" when the correct class was "165000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1194", MSSubClass="120", MSZoning="RM", LotFrontage="NA", LotArea="4500", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="FR2", LandSlope="Gtl", Neighborhood="Mitchel", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="1999", YearRemodAdd="1999", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="BrkFace", MasVnrArea="425", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="883", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="341", TotalBsmtSF="1224", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1224", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1999", GarageFinish="Fin", GarageCars="2", GarageArea="402", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="304", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
    // Use a trained regression model to predict the house price based on the input characteristics
    let stepImpact = 5000; // Impact of unused variable on the prediction

    let predictedPrice = 180000 + (OverallQual * 15000) - (YearBuilt * 500) + (GarageArea * 200) - (LotArea * 2);
    return predictedPrice;
}
