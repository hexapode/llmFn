
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="1388", MSSubClass="50", MSZoning="RM", LotFrontage="60", LotArea="8520", Street="Pave", Alley="Grvl", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="OldTown", Condition1="Artery", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="6", OverallCond="7", YearBuilt="1916", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Stucco", Exterior2nd="Stucco", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="Gd", Foundation="BrkTil", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Rec", BsmtFinSF1="168", BsmtFinType2="LwQ", BsmtFinSF2="546", BsmtUnfSF="0", TotalBsmtSF="714", Heating="GasW", HeatingQC="TA", CentralAir="N", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2526", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="5", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="10", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Detchd", GarageYrBlt="1916", GarageFinish="Unf", GarageCars="1", GarageArea="216", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="88", OpenPorchSF="15", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="GdWo", MiscFeature="NA", MiscVal="0", MoSold="8", YrSold="2007", SaleType="CWD", SaleCondition="Family" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179998.8889;

    if (OverallQual >= 8) {
        predictedPrice += 60513.44;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 99.99;
    }

    if (GrLivArea > -1501) {
        predictedPrice += (GrLivArea - 1498.8889000000001) * 102.22;
    }

    if (MoSold === "-7") {
        predictedPrice -= 30011.11;
    }

    return predictedPrice;
}
