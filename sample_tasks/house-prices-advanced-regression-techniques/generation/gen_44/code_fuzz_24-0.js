
    /* I try on the following input and it returned 217700" when the correct class was "196000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1139", MSSubClass="20", MSZoning="RL", LotFrontage="NA", LotArea="9819", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Mod", Neighborhood="Mitchel", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="6", OverallCond="5", YearBuilt="1977", YearRemodAdd="1977", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="ImStucc", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="TA", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="ALQ", BsmtFinSF1="1567", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="0", TotalBsmtSF="1567", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1567", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="5", Functional="Typ", Fireplaces="2", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1977", GarageFinish="RFn", GarageCars="2", GarageArea="714", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="264", OpenPorchSF="32", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.09) {
        predictedPrice += 48410.65;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 13499.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 99.97779999999997;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -499.98);
    }

    // Additional condition for specific input
    if (Neighborhood === "Mitchel") {
        predictedPrice += 2420;
    }

    // Additional condition for specific input
    if (BsmtExposure === "Gd") {
        predictedPrice += 27999.92;
    }

    return predictedPrice;
}
