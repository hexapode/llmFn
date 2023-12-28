
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="647", MSSubClass="20", MSZoning="RL", LotFrontage="60", LotArea="7200", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NAmes", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="5", YearBuilt="1950", YearRemodAdd="1950", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="NA", BsmtCond="NA", BsmtExposure="NA", BsmtFinType1="NA", BsmtFinSF1="0", BsmtFinType2="NA", BsmtFinSF2="0", BsmtUnfSF="0", TotalBsmtSF="0", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1048", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="7", Functional="Min1", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1950", GarageFinish="Unf", GarageCars="2", GarageArea="420", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="27", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 60513.31;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 14999.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 80.98;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -604.98);
    }

    // Bonus for houses with detached garage and unfinished garage finish
    if (GarageType === "Detchd" && GarageFinish === "Unf") {
        predictedPrice += 3200;
    }

    return predictedPrice;
}
