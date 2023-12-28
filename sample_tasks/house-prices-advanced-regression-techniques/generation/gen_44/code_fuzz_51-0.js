
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="387", MSSubClass="50", MSZoning="RL", LotFrontage="58", LotArea="8410", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="FR2", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="5", OverallCond="3", YearBuilt="1910", YearRemodAdd="1996", RoofStyle="Gambrel", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="Fa", Foundation="PConc", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="658", TotalBsmtSF="658", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1184", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="5", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="NA", GarageYrBlt="NA", GarageFinish="NA", GarageCars="0", GarageArea="0", GarageQual="NA", GarageCond="NA", PavedDrive="N", WoodDeckSF="0", OpenPorchSF="151", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2006", SaleType="WD", SaleCondition="AdjLand" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 55012.1;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 14999.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1652.42) * 60.49;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -499.98);
    }

    if (Neighborhood === "Edwards") {
        predictedPrice -= 10004.4;
    }

    return predictedPrice;
}
