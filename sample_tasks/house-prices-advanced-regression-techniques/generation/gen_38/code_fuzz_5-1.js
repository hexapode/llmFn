
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="979", MSSubClass="20", MSZoning="RL", LotFrontage="68", LotArea="9450", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Bnk", Utilities="AllPub", LotConfig="Inside", LandSlope="Mod", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="4", OverallCond="5", YearBuilt="1954", YearRemodAdd="1954", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="LwQ", BsmtFinSF1="552", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="342", TotalBsmtSF="894", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="894", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1999", GarageFinish="Unf", GarageCars="2", GarageArea="400", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2007", SaleType="WD", SaleCondition="Abnorml" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
    let qualityImpact = 15000 * OverallQual;
    let areaImpact = 10 * GrLivArea;
    let conditionImpact = -5000 * (OverallCond - 5);
    let ageImpact = -1000 * (2023 - YearBuilt);
    let garageImpact = 5000 * GarageCars + 15 * GarageArea;
    let basementImpact = 30 * TotalBsmtSF;
    let neighborhoodImpact = 10000; // Assume a base impact for neighborhood
    if (Neighborhood === "Edwards") {
        neighborhoodImpact = 15000;
    }

    let predictedPrice = 180000 + qualityImpact + areaImpact + conditionImpact + ageImpact + garageImpact + basementImpact + neighborhoodImpact;
    return predictedPrice;
}
