
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="Id=\"1132\"", MSSubClass="MSSubClass=\"20\"", MSZoning="MSZoning=\"RL\"", LotFrontage="LotFrontage=\"63\"", LotArea="LotArea=\"10712\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"Reg\"", LandContour="LandContour=\"Lvl\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Inside\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"Mitchel\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"1Story\"", OverallQual="OverallQual=\"5\"", OverallCond="OverallCond=\"5\"", YearBuilt="YearBuilt=\"1991\"", YearRemodAdd="YearRemodAdd=\"1992\"", RoofStyle="RoofStyle=\"Gable\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"HdBoard\"", Exterior2nd="Exterior2nd=\"HdBoard\"", MasVnrType="MasVnrType=\"None\"", MasVnrArea="MasVnrArea=\"0\"", ExterQual="ExterQual=\"TA\"", ExterCond="ExterCond=\"TA\"", Foundation="Foundation=\"PConc\"", BsmtQual="BsmtQual=\"Gd\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"Mn\"", BsmtFinType1="BsmtFinType1=\"BLQ\"", BsmtFinSF1="BsmtFinSF1=\"212\"", BsmtFinType2="BsmtFinType2=\"Unf\"", BsmtFinSF2="BsmtFinSF2=\"0\"", BsmtUnfSF="BsmtUnfSF=\"762\"", TotalBsmtSF="TotalBsmtSF=\"974\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"TA\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"SBrkr\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"974\"", BsmtFullBath="BsmtFullBath=\"0\"", BsmtHalfBath="BsmtHalfBath=\"0\"", FullBath="FullBath=\"1\"", HalfBath="HalfBath=\"0\"", BedroomAbvGr="BedroomAbvGr=\"3\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"TA\"", TotRmsAbvGrd="TotRmsAbvGrd=\"5\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"0\"", FireplaceQu="FireplaceQu=\"NA\"", GarageType="GarageType=\"NA\"", GarageYrBlt="GarageYrBlt=\"NA\"", GarageFinish="GarageFinish=\"NA\"", GarageCars="GarageCars=\"0\"", GarageArea="GarageArea=\"0\"", GarageQual="GarageQual=\"NA\"", GarageCond="GarageCond=\"NA\"", PavedDrive="PavedDrive=\"Y\"", WoodDeckSF="WoodDeckSF=\"0\"", OpenPorchSF="OpenPorchSF=\"28\"", EnclosedPorch="EnclosedPorch=\"0\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"MnPrv\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"9\"", YrSold="YrSold=\"2007\"", SaleType="SaleType=\"Oth\"", SaleCondition="SaleCondition=\"Abnorml\"" */
    
    
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

    // Predict the price based on the year the house was built
    let yearsSinceBuilt = YrSold - YearBuilt;
    predictedPrice += (yearsSinceBuilt * 500);

    // Customized step in the computation
    if (BldgType === "1Fam" && HouseStyle === "1Story") {
        predictedPrice += 5000;
    }

    return predictedPrice;
}
