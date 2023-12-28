
    /* I try on the following input and it returned 213000" when the correct class was "87000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="326", MSSubClass="45", MSZoning="RM", LotFrontage="50", LotArea="5000", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="IDOTRR", Condition1="RRAe", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Unf", OverallQual="5", OverallCond="6", YearBuilt="1941", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="BLQ", BsmtFinSF1="116", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="604", TotalBsmtSF="720", Heating="GasA", HeatingQC="Po", CentralAir="N", Electrical="FuseF", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="803", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1941", GarageFinish="Unf", GarageCars="2", GarageArea="360", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="244", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="12", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.8889;

    if (OverallQual >= 8) {
        predictedPrice += 60512.78;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 14615.29;
    }

    if (GrLivArea > -1500) {
        predictedPrice += (GrLivArea - 1652.32) * 60.42;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= 2006) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice -= (yearsSinceBuilt * 502.11109999999996);
    }

    return predictedPrice;
}
