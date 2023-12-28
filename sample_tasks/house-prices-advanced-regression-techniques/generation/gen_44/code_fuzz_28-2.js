
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="1422", MSSubClass="120", MSZoning="RL", LotFrontage="53", LotArea="4043", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NPkVill", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="1977", YearRemodAdd="1977", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="ALQ", BsmtFinSF1="360", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="709", TotalBsmtSF="1069", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1069", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="4", Functional="Typ", Fireplaces="1", FireplaceQu="Fa", GarageType="Attchd", GarageYrBlt="1977", GarageFinish="RFn", GarageCars="2", GarageArea="440", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="55", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="165", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2010", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 73221.1;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 12149.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 68.87;
    }

    if (YearBuilt < -1979.99) {
        predictedPrice += 19999.9778;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -604.98);
    }

    return predictedPrice;
}
