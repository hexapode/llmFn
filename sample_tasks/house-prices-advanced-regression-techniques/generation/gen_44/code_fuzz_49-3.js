
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="1269", MSSubClass="50", MSZoning="RL", LotFrontage="NA", LotArea="14100", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Mod", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="8", OverallCond="9", YearBuilt="1935", YearRemodAdd="1997", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Stucco", Exterior2nd="Stucco", MasVnrType="BrkFace", MasVnrArea="632", ExterQual="TA", ExterCond="Gd", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="Mn", BsmtFinType1="Rec", BsmtFinSF1="192", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="536", TotalBsmtSF="728", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="3447", BsmtFullBath="0", BsmtHalfBath="0", FullBath="3", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="11", Functional="Typ", Fireplaces="2", FireplaceQu="Gd", GarageType="BuiltIn", GarageYrBlt="1982", GarageFinish="Unf", GarageCars="3", GarageArea="1014", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="314", OpenPorchSF="12", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="GdWo", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += 10000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 15000;
    }

    if (GrLivArea > 1500) {
        predictedPrice += (GrLivArea - 1500) * 100;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= 2005) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * 500);
    }

    // Calculate predicted price based on the combined influence of OverallCond and Fireplaces
    let combinedFactor = OverallCond * Fireplaces;
    predictedPrice += combinedFactor * 100;

    return predictedPrice;
}
