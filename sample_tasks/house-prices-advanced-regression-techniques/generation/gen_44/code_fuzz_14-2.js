
    /* I try on the following input and it returned 275500" when the correct class was "207500",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="686", MSSubClass="160", MSZoning="RL", LotFrontage="NA", LotArea="5062", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Gtl", Neighborhood="StoneBr", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="1984", YearRemodAdd="1984", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="None", MasVnrArea="0", ExterQual="Gd", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Mn", BsmtFinType1="GLQ", BsmtFinSF1="828", BsmtFinType2="LwQ", BsmtFinSF2="182", BsmtUnfSF="180", TotalBsmtSF="1190", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2090", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="6", Functional="Min1", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1984", GarageFinish="Fin", GarageCars="2", GarageArea="577", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="219", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="9", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += 10000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 15000;
    }

    if (GrLivArea > 1500) {
        predictedPrice += (GrLivArea - 1500) * 100;
    }

    // Predict the price based on the year the house was sold
    const currentYear = new Date().getFullYear();
    const yearsSinceRemod = currentYear - YearRemodAdd;
    predictedPrice += (yearsSinceRemod * 500);

    return predictedPrice;
}
