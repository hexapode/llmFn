
    /* Try to add a step in the computation using unused variable, this stpe should impact the prediction. here is a sample input:
Id="Id=\"863\"", MSSubClass="MSSubClass=\"20\"", MSZoning="MSZoning=\"RL\"", LotFrontage="LotFrontage=\"81\"", LotArea="LotArea=\"9672\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"Reg\"", LandContour="LandContour=\"Lvl\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Corner\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"SawyerW\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"1Story\"", OverallQual="OverallQual=\"6\"", OverallCond="OverallCond=\"5\"", YearBuilt="YearBuilt=\"1984\"", YearRemodAdd="YearRemodAdd=\"1985\"", RoofStyle="RoofStyle=\"Hip\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"HdBoard\"", Exterior2nd="Exterior2nd=\"Plywood\"", MasVnrType="MasVnrType=\"None\"", MasVnrArea="MasVnrArea=\"0\"", ExterQual="ExterQual=\"TA\"", ExterCond="ExterCond=\"TA\"", Foundation="Foundation=\"PConc\"", BsmtQual="BsmtQual=\"Gd\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"No\"", BsmtFinType1="BsmtFinType1=\"GLQ\"", BsmtFinSF1="BsmtFinSF1=\"338\"", BsmtFinType2="BsmtFinType2=\"Unf\"", BsmtFinSF2="BsmtFinSF2=\"0\"", BsmtUnfSF="BsmtUnfSF=\"702\"", TotalBsmtSF="TotalBsmtSF=\"1040\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"TA\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"SBrkr\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"1097\"", BsmtFullBath="BsmtFullBath=\"0\"", BsmtHalfBath="BsmtHalfBath=\"0\"", FullBath="FullBath=\"2\"", HalfBath="HalfBath=\"0\"", BedroomAbvGr="BedroomAbvGr=\"3\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"TA\"", TotRmsAbvGrd="TotRmsAbvGrd=\"6\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"0\"", FireplaceQu="FireplaceQu=\"NA\"", GarageType="GarageType=\"Attchd\"", GarageYrBlt="GarageYrBlt=\"1986\"", GarageFinish="GarageFinish=\"Unf\"", GarageCars="GarageCars=\"2\"", GarageArea="GarageArea=\"480\"", GarageQual="GarageQual=\"TA\"", GarageCond="GarageCond=\"TA\"", PavedDrive="PavedDrive=\"Y\"", WoodDeckSF="WoodDeckSF=\"0\"", OpenPorchSF="OpenPorchSF=\"0\"", EnclosedPorch="EnclosedPorch=\"0\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"GdPrv\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"5\"", YrSold="YrSold=\"2010\"", SaleType="SaleType=\"WD\"", SaleCondition="SaleCondition=\"Normal\"" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= -7.09) {
        predictedPrice += 17719.5;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 14999.98;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 99.97779999999997;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -549.98);
    }

    if (GarageArea < 552.3) {
        predictedPrice -= 9747.87;
    }

    return predictedPrice;
}
