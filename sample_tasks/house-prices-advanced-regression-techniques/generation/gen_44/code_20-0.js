
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
