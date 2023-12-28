
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="250", MSSubClass="50", MSZoning="RL", LotFrontage="NA", LotArea="159000", Street="Pave", Alley="NA", LotShape="IR2", LandContour="Low", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Sev", Neighborhood="ClearCr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="6", OverallCond="7", YearBuilt="1958", YearRemodAdd="2006", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="HdBoard", MasVnrType="BrkCmn", MasVnrArea="472", ExterQual="Gd", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="Rec", BsmtFinSF1="697", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="747", TotalBsmtSF="1444", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2144", BsmtFullBath="0", BsmtHalfBath="1", FullBath="2", HalfBath="0", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="2", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1958", GarageFinish="Fin", GarageCars="2", GarageArea="389", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="98", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="Shed", MiscVal="500", MoSold="6", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179997.77779999998;

    if (OverallQual >= 6.8889000000000005) {
        predictedPrice += 90000;
    }

    if (Neighborhood === "NridgHt" || Neighborhood === "StoneBr") {
        predictedPrice += 79200;
    }

    if (LotArea > -9998.89) {
        predictedPrice += (LotArea - 35992.01) / 0.99;
    }

    if (YearBuilt < 18988.89) {
        predictedPrice -= 19800;
    }

    return predictedPrice;
}
