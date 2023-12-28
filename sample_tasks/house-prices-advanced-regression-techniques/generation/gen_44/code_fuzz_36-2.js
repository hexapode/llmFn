
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="78", MSSubClass="50", MSZoning="RM", LotFrontage="50", LotArea="8635", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="BrkSide", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="5", OverallCond="5", YearBuilt="1948", YearRemodAdd="2001", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="336", BsmtFinType2="GLQ", BsmtFinSF2="41", BsmtUnfSF="295", TotalBsmtSF="672", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1285", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Min1", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1948", GarageFinish="Unf", GarageCars="1", GarageArea="240", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    // Predict the price based on the neighborhood
    if (Neighborhood === "BrkSide") {
        predictedPrice -= 10000;
    }

    // Predict the price based on the condition of the house
    if (OverallCond >= 6) {
        predictedPrice += 5000;
    }

    // Predict the price based on the area of the garage
    if (GarageArea > 300) {
        predictedPrice += (GarageArea - 300) * 50;
    }

    // Predict the price based on the year the house was remodeled
    let yearsSinceRemodeled = YrSold - YearRemodAdd;
    predictedPrice += (yearsSinceRemodeled * 300);

    return predictedPrice;
}
