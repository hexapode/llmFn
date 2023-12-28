
    /* I try on the following input and it returned 270100" when the correct class was "236000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="747", MSSubClass="60", MSZoning="RL", LotFrontage="NA", LotArea="8795", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Gilbert", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="7", OverallCond="5", YearBuilt="2000", YearRemodAdd="2000", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="300", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="652", TotalBsmtSF="952", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2256", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="BuiltIn", GarageYrBlt="2000", GarageFinish="Fin", GarageCars="2", GarageArea="554", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="224", OpenPorchSF="54", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="4", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += 10000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 15000;
    }

    if (GrLivArea > 1500) {
        predictedPrice += (GrLivArea - 1500) * 100;
    }

    let yearsSinceRemodel = YrSold - YearRemodAdd;
    predictedPrice += (yearsSinceRemodel * 500);

    return predictedPrice;
}
