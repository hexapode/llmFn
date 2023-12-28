
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="970", MSSubClass="190", MSZoning="RL", LotFrontage="75", LotArea="10382", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NAmes", Condition1="Norm", Condition2="Norm", BldgType="2fmCon", HouseStyle="SLvl", OverallQual="6", OverallCond="5", YearBuilt="1958", YearRemodAdd="1958", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="BrkFace", MasVnrArea="105", ExterQual="TA", ExterCond="Fa", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="ALQ", BsmtFinSF1="513", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="75", TotalBsmtSF="588", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1095", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1958", GarageFinish="RFn", GarageCars="1", GarageArea="264", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2006", SaleType="ConLD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.09) {
        predictedPrice += 58576.89;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 4991.25;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 54.99;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -499.98);
    }

    // Predict the price based on the total basement area
    if (TotalBsmtSF > -1000.99) {
        predictedPrice += (TotalBsmtSF - 1002.2) * 49.9778;
    }

    return predictedPrice;
}
