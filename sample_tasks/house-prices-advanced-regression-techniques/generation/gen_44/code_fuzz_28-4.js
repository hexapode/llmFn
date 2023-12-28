
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="223", MSSubClass="60", MSZoning="RL", LotFrontage="85", LotArea="11475", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NWAmes", Condition1="RRAn", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="6", OverallCond="6", YearBuilt="1975", YearRemodAdd="1975", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="ALQ", BsmtFinSF1="550", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="163", TotalBsmtSF="713", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1552", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1975", GarageFinish="RFn", GarageCars="2", GarageArea="434", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="209", OpenPorchSF="208", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="MnPrv", MiscFeature="NA", MiscVal="0", MoSold="2", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.0889) {
        predictedPrice += (OverallQual - -4.98) * 5002.200000000001;
    }
    
    if (GarageFinish === "Fin") {
        predictedPrice += 9431.79;
    }
    
    if (GrLivArea > 1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 99.97779999999997;
    }
    
    // Predict the price based on the year the house was sold
    if (YrSold >= 2001.0889) {
        let yearsSinceRemodel = YrSold - YearRemodAdd;
        predictedPrice += (yearsSinceRemodel * -1330.98);
    }
    
    return predictedPrice;
}
