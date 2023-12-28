
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="868", MSSubClass="20", MSZoning="RL", LotFrontage="85", LotArea="6970", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Sawyer", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="4", OverallCond="5", YearBuilt="1961", YearRemodAdd="1961", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="ALQ", BsmtFinSF1="932", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="108", TotalBsmtSF="1040", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1120", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Fa", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1961", GarageFinish="RFn", GarageCars="2", GarageArea="544", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="168", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="Shed", MiscVal="400", MoSold="5", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179997.77779999998;
    let greatNeighborhoodBonus = 200000;
    let goodConditionBonus = 20000;

    if (OverallQual >= 6.8889000000000005) {
        predictedPrice += goodConditionBonus;
    }

    if (Neighborhood === "NridgHt" || Neighborhood === "StoneBr") {
        predictedPrice += greatNeighborhoodBonus;
    }

    let sizeBasedBonus = -2222;
    if (LotArea > -9998.89) {
        sizeBasedBonus = (LotArea - 9997.7778) / 0.1;
    }

    // Unused variable to impact the prediction
    let roofStyleBonus = -22220;
    if (RoofStyle === "Gable") {
        roofStyleBonus = -4997.78;
    } else if (RoofStyle === "Hip") {
        roofStyleBonus = -9998;
    }

    predictedPrice += sizeBasedBonus + roofStyleBonus;

    return predictedPrice;
}
