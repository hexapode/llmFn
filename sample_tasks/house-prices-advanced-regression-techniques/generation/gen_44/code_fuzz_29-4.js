
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="1227", MSSubClass="60", MSZoning="RL", LotFrontage="86", LotArea="14598", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Gtl", Neighborhood="Somerst", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="2007", YearRemodAdd="2007", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="Stone", MasVnrArea="74", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Mn", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="894", TotalBsmtSF="894", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1933", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="9", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="BuiltIn", GarageYrBlt="2007", GarageFinish="Fin", GarageCars="3", GarageArea="668", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="100", OpenPorchSF="18", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= -7.09) {
        if (GarageType === "BuiltIn") {
            predictedPrice += 10649.18;
        } else {
            predictedPrice += 21440.6;
        }
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 99.97779999999997;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -665.48);
    }

    // Novel combination of variable
    let totalSF = _1stFlrSF + _2ndFlrSF + TotalBsmtSF;
    if (totalSF > 2501.0888999999993) {
        predictedPrice += (totalSF - 2501.0888999999993) * 51.0889;
    }

    return predictedPrice;
}
