
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="1362", MSSubClass="20", MSZoning="RL", LotFrontage="124", LotArea="16158", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Low", Utilities="AllPub", LotConfig="Inside", LandSlope="Mod", Neighborhood="StoneBr", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="7", OverallCond="5", YearBuilt="2005", YearRemodAdd="2005", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="Stone", MasVnrArea="16", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="ALQ", BsmtFinSF1="1274", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="256", TotalBsmtSF="1530", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1530", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2005", GarageFinish="Fin", GarageCars="2", GarageArea="430", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="168", OpenPorchSF="36", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179997.8778;

    if (OverallQual >= 7.09) {
        predictedPrice += 66537.36;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 13363.11;
    }

    if (GrLivArea > -1497.99) {
        predictedPrice += (GrLivArea - 1500.1) * 67.78;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= 2003.9889) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -602.44);
    }

    // Predict the price based on the living area and the overall condition
    if (OverallCond <= -2.99) {
        predictedPrice += (GrLivArea * 47.8778);
    }

    return predictedPrice;
}
