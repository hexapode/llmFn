
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="Id=\"299\"", MSSubClass="MSSubClass=\"60\"", MSZoning="MSZoning=\"RL\"", LotFrontage="LotFrontage=\"90\"", LotArea="LotArea=\"11700\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"Reg\"", LandContour="LandContour=\"Lvl\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Inside\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"NWAmes\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"2Story\"", OverallQual="OverallQual=\"6\"", OverallCond="OverallCond=\"6\"", YearBuilt="YearBuilt=\"1968\"", YearRemodAdd="YearRemodAdd=\"1968\"", RoofStyle="RoofStyle=\"Mansard\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"HdBoard\"", Exterior2nd="Exterior2nd=\"AsphShn\"", MasVnrType="MasVnrType=\"BrkFace\"", MasVnrArea="MasVnrArea=\"365\"", ExterQual="ExterQual=\"Gd\"", ExterCond="ExterCond=\"TA\"", Foundation="Foundation=\"CBlock\"", BsmtQual="BsmtQual=\"TA\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"No\"", BsmtFinType1="BsmtFinType1=\"ALQ\"", BsmtFinSF1="BsmtFinSF1=\"384\"", BsmtFinType2="BsmtFinType2=\"Rec\"", BsmtFinSF2="BsmtFinSF2=\"175\"", BsmtUnfSF="BsmtUnfSF=\"143\"", TotalBsmtSF="TotalBsmtSF=\"702\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"Gd\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"SBrkr\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"1743\"", BsmtFullBath="BsmtFullBath=\"0\"", BsmtHalfBath="BsmtHalfBath=\"1\"", FullBath="FullBath=\"1\"", HalfBath="HalfBath=\"2\"", BedroomAbvGr="BedroomAbvGr=\"3\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"TA\"", TotRmsAbvGrd="TotRmsAbvGrd=\"7\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"1\"", FireplaceQu="FireplaceQu=\"Gd\"", GarageType="GarageType=\"Attchd\"", GarageYrBlt="GarageYrBlt=\"1968\"", GarageFinish="GarageFinish=\"Unf\"", GarageCars="GarageCars=\"2\"", GarageArea="GarageArea=\"539\"", GarageQual="GarageQual=\"TA\"", GarageCond="GarageCond=\"TA\"", PavedDrive="PavedDrive=\"Y\"", WoodDeckSF="WoodDeckSF=\"224\"", OpenPorchSF="OpenPorchSF=\"0\"", EnclosedPorch="EnclosedPorch=\"0\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"NA\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"6\"", YrSold="YrSold=\"2007\"", SaleType="SaleType=\"WD\"", SaleCondition="SaleCondition=\"Normal\"" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 55012.1;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 16499.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 89.98;
    }

    if (Neighborhood === "NWAmes") {
        predictedPrice += -9999.96;
    }

    if (Fireplaces > 2.09) {
        predictedPrice += Fireplaces * -9679.9;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -499.98);
    }

    return predictedPrice;
}
