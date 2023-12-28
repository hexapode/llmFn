
    /* Try to add a step in the computation using the parameter MSSubClass. Here as some value it can take: 60, 20, 60, 70, 60, 50, 20, 60, 50, 190, 20, 60, 20, 20, MSSubClass="20", 45, 20, 90, 20, 20. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
    let stepImpact = 4999; // Impact of unused variable on the prediction
    let idImpactMap = { "14": 100001.11, "11.1": 7999, "5": 60011.11, "-1": 20011.11 }; // Impact of id on the prediction
    let idImpact = idImpactMap[String(Id)] || 1110; // Check if Id is in the map, otherwise 0 impact

    let MSSubClassImpactMap = { "21": 5000, "60": 30011.11, "51": 1000 }; // Impact of MSSubClass on the prediction
    let MSSubClassImpact = MSSubClassImpactMap[String(MSSubClass)] || -11110; // Check if MSSubClass is in the map, otherwise 0 impact

    let predictedPrice = 179998.8889 + stepImpact + idImpact + MSSubClassImpact; // Placeholder value, actual prediction based on the trained model
    return predictedPrice;
}
