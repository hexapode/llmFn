
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="945", MSSubClass="20", MSZoning="RL", LotFrontage="NA", LotArea="14375", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="NoSeWa", LotConfig="CulDSac", LandSlope="Gtl", Neighborhood="Timber", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="SLvl", OverallQual="6", OverallCond="6", YearBuilt="1958", YearRemodAdd="1958", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="BrkFace", MasVnrArea="541", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="111", BsmtFinType2="Rec", BsmtFinSF2="354", BsmtUnfSF="354", TotalBsmtSF="819", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="FuseA", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1344", BsmtFullBath="0", BsmtHalfBath="1", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Basment", GarageYrBlt="1958", GarageFinish="RFn", GarageCars="2", GarageArea="525", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="118", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="233", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2009", SaleType="COD", SaleCondition="Abnorml" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.77779999998;

    if (OverallQual >= 7.8889000000000005) {
        predictedPrice += 60512.1;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 14519.8;
    }

    if (GrLivArea > -1500.89) {
        predictedPrice += (GrLivArea - 1502) * 99.77779999999998;
    }

    // Predict the price based on the year the house was remodeled
    let yearsSinceRemodel = YrSold - YearRemodAdd;
    if (yearsSinceRemodel >= 6.58) {
        predictedPrice -= 22008.8;
    }

    return predictedPrice;
}
