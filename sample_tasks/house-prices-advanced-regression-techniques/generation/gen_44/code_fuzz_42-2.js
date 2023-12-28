
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="1424", MSSubClass="80", MSZoning="RL", LotFrontage="NA", LotArea="19690", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="SLvl", OverallQual="6", OverallCond="7", YearBuilt="1966", YearRemodAdd="1966", RoofStyle="Flat", RoofMatl="Tar&Grv", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="Gd", ExterCond="Gd", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="697", TotalBsmtSF="697", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2201", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1966", GarageFinish="Unf", GarageCars="2", GarageArea="432", GarageQual="Gd", GarageCond="Gd", PavedDrive="Y", WoodDeckSF="586", OpenPorchSF="236", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="738", PoolQC="Gd", Fence="GdPrv", MiscFeature="NA", MiscVal="0", MoSold="8", YrSold="2006", SaleType="WD", SaleCondition="Alloca" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    if (OverallCond <= 4) {
        predictedPrice -= 10000;
    }

    if (GarageFinish === "Fin") {
        predictedPrice += 20000;
    }

    if (GrLivArea > 2000) {
        predictedPrice += (GrLivArea - 2000) * 120;
    }

    // Predict the price based on the number of fireplaces
    predictedPrice += Fireplaces * 5000;

    return predictedPrice;
}
