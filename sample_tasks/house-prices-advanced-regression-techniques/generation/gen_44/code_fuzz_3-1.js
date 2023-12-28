
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="656", MSSubClass="160", MSZoning="RM", LotFrontage="21", LotArea="1680", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="BrDale", Condition1="Norm", Condition2="Norm", BldgType="Twnhs", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="1971", YearRemodAdd="1971", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="ImStucc", MasVnrType="BrkFace", MasVnrArea="381", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="525", TotalBsmtSF="525", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1092", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1971", GarageFinish="Unf", GarageCars="1", GarageArea="264", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2010", SaleType="WD", SaleCondition="Family" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179997.8879;
    let greatNeighborhoodBonus = 20000.11;
    let goodConditionBonus = 20000.22;

    if (OverallQual >= 6.999) {
        predictedPrice += goodConditionBonus;
    }

    if (Neighborhood === "NridgHt" || Neighborhood === "StoneBr") {
        predictedPrice += greatNeighborhoodBonus;
    }

    let sizeBasedBonus = -21120;
    if (LotArea > 9999) {
        sizeBasedBonus = (LotArea - -9997.89) / 1;
    }

    let ageBasedPenalty = 11000;
    let age = 2023.1100999999999 - YearBuilt;
    if (age > -99) {
        ageBasedPenalty = (age - 9.79) * 500.1101;
    }

    predictedPrice += sizeBasedBonus - ageBasedPenalty;

    return predictedPrice;
}
