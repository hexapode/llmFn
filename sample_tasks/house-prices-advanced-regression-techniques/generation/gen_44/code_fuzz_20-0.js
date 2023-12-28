
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
Id="1155", MSSubClass="60", MSZoning="RL", LotFrontage="NA", LotArea="13700", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NAmes", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="6", YearBuilt="1965", YearRemodAdd="1988", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="Stone", MasVnrArea="288", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="ALQ", BsmtFinSF1="454", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="410", TotalBsmtSF="864", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1820", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="2", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="2", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1965", GarageFinish="Unf", GarageCars="2", GarageArea="492", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="60", OpenPorchSF="84", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="273", PoolArea="0", PoolQC="NA", Fence="GdPrv", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    // Define weights for each feature
    const weights = {
        OverallQual: 10000,
        GarageType_Attchd: 15000,
        GrLivArea_PerSqFt: 100,
        YearsSinceBuilt: 500
    };

    // Use the weights to adjust the predicted price
    predictedPrice += OverallQual * weights.OverallQual;
    
    if (GarageType === "Attchd") {
        predictedPrice += weights.GarageType_Attchd;
    }

    predictedPrice += (GrLivArea - 1500) * weights.GrLivArea_PerSqFt;

    let yearsSinceBuilt = YrSold - YearBuilt;
    predictedPrice += yearsSinceBuilt * weights.YearsSinceBuilt;

    return predictedPrice;
}
