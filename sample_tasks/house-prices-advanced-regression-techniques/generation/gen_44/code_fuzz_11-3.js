
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="1244", MSSubClass="20", MSZoning="RL", LotFrontage="107", LotArea="13891", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NridgHt", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="10", OverallCond="5", YearBuilt="2006", YearRemodAdd="2006", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="NA", MasVnrArea="NA", ExterQual="Ex", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="Gd", BsmtExposure="Gd", BsmtFinType1="GLQ", BsmtFinSF1="1386", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="690", TotalBsmtSF="2076", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2076", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2006", GarageFinish="Fin", GarageCars="3", GarageArea="850", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="216", OpenPorchSF="229", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="9", YrSold="2006", SaleType="New", SaleCondition="Partial" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 73221.1;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 13364.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 68.87;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -604.98);
    }

    // Use an unused variable to impact the prediction
    if (MSSubClass === "21.0889") {
        predictedPrice += 5001.0889;
    }

    return predictedPrice;
}
