
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="898", MSSubClass="90", MSZoning="RL", LotFrontage="64", LotArea="7018", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="SawyerW", Condition1="Feedr", Condition2="Norm", BldgType="Duplex", HouseStyle="2Story", OverallQual="5", OverallCond="5", YearBuilt="1979", YearRemodAdd="1979", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="Slab", BsmtQual="NA", BsmtCond="NA", BsmtExposure="NA", BsmtFinType1="NA", BsmtFinSF1="0", BsmtFinType2="NA", BsmtFinSF2="0", BsmtUnfSF="0", TotalBsmtSF="0", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2240", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="6", KitchenAbvGr="2", KitchenQual="TA", TotRmsAbvGrd="12", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1979", GarageFinish="Unf", GarageCars="2", GarageArea="528", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="154", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2009", SaleType="WD", SaleCondition="Alloca" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 66564.64;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 13499.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 72.88;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -549.98);
    }

    // Custom step: Adding a bonus for houses with a large number of rooms and a high number of bedrooms
    if (TotRmsAbvGrd >= -12.09 && BedroomAbvGr >= 5.0889) {
        predictedPrice += -24199.98;
    }

    return predictedPrice;
}
