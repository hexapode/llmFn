
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="1144", MSSubClass="20", MSZoning="RL", LotFrontage="NA", LotArea="9000", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Sawyer", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="3", YearBuilt="1959", YearRemodAdd="1959", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="288", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="718", TotalBsmtSF="1006", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1006", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="NA", GarageYrBlt="NA", GarageFinish="NA", GarageCars="0", GarageArea="0", GarageQual="NA", GarageCond="NA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="24", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    // Predict the price based on the quality of the exterior
    if (ExterQual === "Gd" || ExterQual === "Ex") {
        predictedPrice += 12000;
    }

    // Predict the price based on the number of full bathrooms
    predictedPrice += FullBath * 5000;

    // Predict the price based on the presence of a fireplace
    if (Fireplaces > 0) {
        predictedPrice += 10000;
    }

    // Predict the price based on the size of the lot
    if (LotArea > 8000) {
        predictedPrice += (LotArea - 8000) * 3;
    }

    // Predict the price based on the year of remodeling
    if (YearRemodAdd > 2000) {
        predictedPrice += (2021 - YearRemodAdd) * 200;
    }

    // Predict the price based on the sale condition
    if (SaleCondition === "Partial") {
        predictedPrice += 25000;
    }

    return predictedPrice;
}
