
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="724", MSSubClass="50", MSZoning="RL", LotFrontage="60", LotArea="8172", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="4", OverallCond="6", YearBuilt="1954", YearRemodAdd="1972", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="941", TotalBsmtSF="941", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1470", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1958", GarageFinish="Unf", GarageCars="1", GarageArea="548", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="156", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    if (GrLivArea > 1500) {
        predictedPrice += (GrLivArea - 1500) * 100;
    }

    if (GarageType === "Detchd") {
        predictedPrice -= 10000;
    }

    // Predict the price based on the number of bedrooms
    predictedPrice += BedroomAbvGr * 500;

    // Predict the price based on the quality of the kitchen
    if (KitchenQual === "Ex") {
        predictedPrice += 15000;
    } else if (KitchenQual === "Gd") {
        predictedPrice += 10000;
    }

    return predictedPrice;
}
