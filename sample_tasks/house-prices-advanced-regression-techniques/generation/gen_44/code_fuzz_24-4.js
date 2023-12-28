
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="648", MSSubClass="20", MSZoning="RL", LotFrontage="85", LotArea="10452", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="1953", YearRemodAdd="1953", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="Stone", MasVnrArea="216", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="Mn", BsmtFinType1="Rec", BsmtFinSF1="500", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="594", TotalBsmtSF="1094", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1094", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="2", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1953", GarageFinish="RFn", GarageCars="2", GarageArea="495", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="287", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.09) {
        predictedPrice += 80017.6;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 13200;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1652.42) * 54.99;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -499.98);
    }

    // Novel combination of variables
    if (BsmtQual === "Ex" && Fireplaces > 0.09) {
        predictedPrice += 40004.4;
    }

    return predictedPrice;
}
