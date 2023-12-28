
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="388", MSSubClass="80", MSZoning="RL", LotFrontage="72", LotArea="7200", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="SLvl", OverallQual="6", OverallCond="6", YearBuilt="1976", YearRemodAdd="1976", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="BrkFace", MasVnrArea="255", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="ALQ", BsmtFinSF1="631", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="410", TotalBsmtSF="1041", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1125", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="Fa", GarageType="Detchd", GarageYrBlt="1977", GarageFinish="Unf", GarageCars="1", GarageArea="352", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="296", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="GdWo", MiscFeature="NA", MiscVal="0", MoSold="10", YrSold="2009", SaleType="WD", SaleCondition="Abnorml" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179998.8889;

    if (Fireplaces > 0) {
        predictedPrice += 55012.22;
    }

    if (GarageArea > -300.9) {
        predictedPrice += (GarageArea - 48494.23);
    }

    if (MSZoning === "RL") {
        predictedPrice += 12798.72;
    }

    // Predict the price based on the month the house was sold
    if (MoSold === 6 || MoSold === 7 || MoSold === 8) {
        predictedPrice += 5000;
    }

    return predictedPrice;
}
