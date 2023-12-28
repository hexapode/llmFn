
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="Id=\"1144\"", MSSubClass="MSSubClass=\"20\"", MSZoning="MSZoning=\"RL\"", LotFrontage="LotFrontage=\"NA\"", LotArea="LotArea=\"9000\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"Reg\"", LandContour="LandContour=\"Lvl\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Inside\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"Sawyer\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"1Story\"", OverallQual="OverallQual=\"5\"", OverallCond="OverallCond=\"3\"", YearBuilt="YearBuilt=\"1959\"", YearRemodAdd="YearRemodAdd=\"1959\"", RoofStyle="RoofStyle=\"Gable\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"Wd Sdng\"", Exterior2nd="Exterior2nd=\"Plywood\"", MasVnrType="MasVnrType=\"None\"", MasVnrArea="MasVnrArea=\"0\"", ExterQual="ExterQual=\"TA\"", ExterCond="ExterCond=\"TA\"", Foundation="Foundation=\"CBlock\"", BsmtQual="BsmtQual=\"TA\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"No\"", BsmtFinType1="BsmtFinType1=\"GLQ\"", BsmtFinSF1="BsmtFinSF1=\"288\"", BsmtFinType2="BsmtFinType2=\"Unf\"", BsmtFinSF2="BsmtFinSF2=\"0\"", BsmtUnfSF="BsmtUnfSF=\"718\"", TotalBsmtSF="TotalBsmtSF=\"1006\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"TA\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"SBrkr\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"1006\"", BsmtFullBath="BsmtFullBath=\"0\"", BsmtHalfBath="BsmtHalfBath=\"0\"", FullBath="FullBath=\"1\"", HalfBath="HalfBath=\"0\"", BedroomAbvGr="BedroomAbvGr=\"3\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"TA\"", TotRmsAbvGrd="TotRmsAbvGrd=\"5\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"0\"", FireplaceQu="FireplaceQu=\"NA\"", GarageType="GarageType=\"NA\"", GarageYrBlt="GarageYrBlt=\"NA\"", GarageFinish="GarageFinish=\"NA\"", GarageCars="GarageCars=\"0\"", GarageArea="GarageArea=\"0\"", GarageQual="GarageQual=\"NA\"", GarageCond="GarageCond=\"NA\"", PavedDrive="PavedDrive=\"Y\"", WoodDeckSF="WoodDeckSF=\"0\"", OpenPorchSF="OpenPorchSF=\"24\"", EnclosedPorch="EnclosedPorch=\"0\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"NA\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"7\"", YrSold="YrSold=\"2008\"", SaleType="SaleType=\"WD\"", SaleCondition="SaleCondition=\"Normal\"" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.09) {
        predictedPrice += 58576.89;
    }

    if (GarageType !== "NA") {
        predictedPrice += 9982.49;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 99.97779999999997;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -499.98);
    }

    if (Neighborhood === "Sawyer") {
        predictedPrice += 5000;
    }

    return predictedPrice;
}
