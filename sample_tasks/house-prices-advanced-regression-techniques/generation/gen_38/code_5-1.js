
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
