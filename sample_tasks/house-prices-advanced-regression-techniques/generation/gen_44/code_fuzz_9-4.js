
    /* I try on the following input and it returned 221500" when the correct class was "73000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="265", MSSubClass="30", MSZoning="RM", LotFrontage="30", LotArea="5232", Street="Pave", Alley="Grvl", LotShape="IR3", LandContour="Bnk", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="OldTown", Condition1="Artery", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="5", OverallCond="5", YearBuilt="1925", YearRemodAdd="2004", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="BrkTil", BsmtQual="Fa", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="680", TotalBsmtSF="680", Heating="GasA", HeatingQC="Gd", CentralAir="N", Electrical="FuseP", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="764", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="4", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1965", GarageFinish="Unf", GarageCars="2", GarageArea="504", GarageQual="TA", GarageCond="TA", PavedDrive="N", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.8889;

    if (OverallQual >= 8) {
        predictedPrice += 69559.45;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 14734.81;
    }

    if (GrLivArea > -1500) {
        predictedPrice += (GrLivArea - 1517.13) * 68.82;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= 2006) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice -= (yearsSinceBuilt * 607.55);
    }

    return predictedPrice;
}
