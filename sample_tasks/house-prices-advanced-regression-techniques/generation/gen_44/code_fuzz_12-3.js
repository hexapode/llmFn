
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="1286", MSSubClass="50", MSZoning="RM", LotFrontage="50", LotArea="6000", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="BrkSide", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="6", OverallCond="6", YearBuilt="1939", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="Fa", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="780", TotalBsmtSF="780", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="FuseF", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1412", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1939", GarageFinish="Unf", GarageCars="1", GarageArea="280", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="45", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    if (OverallCond <= 3) {
        predictedPrice -= 20000;
    }

    if (GarageCars > 2) {
        predictedPrice += (GarageCars - 2) * 5000;
    }

    if (Foundation === "PConc") {
        predictedPrice += 10000;
    }

    // Predict the price based on the year the house was built
    let yearsSinceBuilt = 2022 - YearBuilt;
    predictedPrice += (yearsSinceBuilt * 200);

    return predictedPrice;
}
