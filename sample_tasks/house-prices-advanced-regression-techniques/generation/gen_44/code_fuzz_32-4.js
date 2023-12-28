
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="Id=\"1280\"", MSSubClass="MSSubClass=\"50\"", MSZoning="MSZoning=\"C (all)\"", LotFrontage="LotFrontage=\"60\"", LotArea="LotArea=\"7500\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"Reg\"", LandContour="LandContour=\"Lvl\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Inside\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"IDOTRR\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"1.5Fin\"", OverallQual="OverallQual=\"4\"", OverallCond="OverallCond=\"4\"", YearBuilt="YearBuilt=\"1920\"", YearRemodAdd="YearRemodAdd=\"1950\"", RoofStyle="RoofStyle=\"Gable\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"MetalSd\"", Exterior2nd="Exterior2nd=\"MetalSd\"", MasVnrType="MasVnrType=\"None\"", MasVnrArea="MasVnrArea=\"0\"", ExterQual="ExterQual=\"TA\"", ExterCond="ExterCond=\"Gd\"", Foundation="Foundation=\"CBlock\"", BsmtQual="BsmtQual=\"TA\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"No\"", BsmtFinType1="BsmtFinType1=\"Unf\"", BsmtFinSF1="BsmtFinSF1=\"0\"", BsmtFinType2="BsmtFinType2=\"Unf\"", BsmtFinSF2="BsmtFinSF2=\"0\"", BsmtUnfSF="BsmtUnfSF=\"698\"", TotalBsmtSF="TotalBsmtSF=\"698\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"TA\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"FuseA\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"1128\"", BsmtFullBath="BsmtFullBath=\"0\"", BsmtHalfBath="BsmtHalfBath=\"0\"", FullBath="FullBath=\"1\"", HalfBath="HalfBath=\"0\"", BedroomAbvGr="BedroomAbvGr=\"2\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"TA\"", TotRmsAbvGrd="TotRmsAbvGrd=\"6\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"0\"", FireplaceQu="FireplaceQu=\"NA\"", GarageType="GarageType=\"Detchd\"", GarageYrBlt="GarageYrBlt=\"1980\"", GarageFinish="GarageFinish=\"RFn\"", GarageCars="GarageCars=\"2\"", GarageArea="GarageArea=\"528\"", GarageQual="GarageQual=\"TA\"", GarageCond="GarageCond=\"TA\"", PavedDrive="PavedDrive=\"Y\"", WoodDeckSF="WoodDeckSF=\"30\"", OpenPorchSF="OpenPorchSF=\"0\"", EnclosedPorch="EnclosedPorch=\"164\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"NA\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"4\"", YrSold="YrSold=\"2010\"", SaleType="SaleType=\"COD\"", SaleCondition="SaleCondition=\"Abnorml\"" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.0889) {
        predictedPrice += 50022;
    }

    if (GarageFinish === "RFn") {
        predictedPrice += 3200;
    }

    if (GrLivArea > -1001.09) {
        predictedPrice += (GrLivArea - 666.96) * 49.9778;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= 2001.0889) {
        let yearsSinceRemod = YrSold - YearRemodAdd;
        predictedPrice += (yearsSinceRemod * -1999.8);
    }

    return predictedPrice;
}
