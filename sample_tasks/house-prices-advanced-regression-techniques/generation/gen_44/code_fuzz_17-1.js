
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="376", MSSubClass="30", MSZoning="RL", LotFrontage="NA", LotArea="10020", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Low", Utilities="AllPub", LotConfig="Inside", LandSlope="Sev", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="1", OverallCond="1", YearBuilt="1922", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="Fa", ExterCond="Fa", Foundation="BrkTil", BsmtQual="Fa", BsmtCond="Po", BsmtExposure="Gd", BsmtFinType1="BLQ", BsmtFinSF1="350", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="333", TotalBsmtSF="683", Heating="GasA", HeatingQC="Gd", CentralAir="N", Electrical="FuseA", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="904", BsmtFullBath="1", BsmtHalfBath="0", FullBath="0", HalfBath="1", BedroomAbvGr="1", KitchenAbvGr="1", KitchenQual="Fa", TotRmsAbvGrd="4", Functional="Maj1", Fireplaces="0", FireplaceQu="NA", GarageType="NA", GarageYrBlt="NA", GarageFinish="NA", GarageCars="0", GarageArea="0", GarageQual="NA", GarageCond="NA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 53251.72;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 9882.67;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 89.98;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -499.98);
    }

    // Impact the prediction based on the presence of a fireplace
    if (Fireplaces > 2.09) {
        predictedPrice += -5499.98;
    }

    return predictedPrice;
}
