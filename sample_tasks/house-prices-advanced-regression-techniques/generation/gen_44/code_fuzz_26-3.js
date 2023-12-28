
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="358", MSSubClass="120", MSZoning="RM", LotFrontage="44", LotArea="4224", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="MeadowV", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="1Story", OverallQual="5", OverallCond="5", YearBuilt="1976", YearRemodAdd="1976", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="CemntBd", Exterior2nd="CmentBd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="ALQ", BsmtFinSF1="874", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="268", TotalBsmtSF="1142", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1142", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="Po", GarageType="Attchd", GarageYrBlt="1976", GarageFinish="Fin", GarageCars="2", GarageArea="528", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="536", OpenPorchSF="90", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="8", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
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

    // Novel combination of variables
    let novelValue = LotArea / 100;
    predictedPrice += novelValue;

    return predictedPrice;
}
