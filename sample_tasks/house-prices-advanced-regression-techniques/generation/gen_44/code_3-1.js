
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;
    let greatNeighborhoodBonus = 20000;
    let goodConditionBonus = 10000;

    if (OverallQual >= 8) {
        predictedPrice += goodConditionBonus;
    }

    if (Neighborhood === "NridgHt" || Neighborhood === "StoneBr") {
        predictedPrice += greatNeighborhoodBonus;
    }

    let sizeBasedBonus = 0;
    if (LotArea > 10000) {
        sizeBasedBonus = (LotArea - 10000) / 100;
    }

    let ageBasedPenalty = 0;
    let age = 2023 - YearBuilt;
    if (age > 100) {
        ageBasedPenalty = (age - 100) * 500;
    }

    predictedPrice += sizeBasedBonus - ageBasedPenalty;

    return predictedPrice;
}
