
    /* Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, implement it in the function. here is a sample input for reference, so you can look at available parameters:
Id="Id=\"98\"", MSSubClass="MSSubClass=\"20\"", MSZoning="MSZoning=\"RL\"", LotFrontage="LotFrontage=\"73\"", LotArea="LotArea=\"10921\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"Reg\"", LandContour="LandContour=\"HLS\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Inside\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"Edwards\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"1Story\"", OverallQual="OverallQual=\"4\"", OverallCond="OverallCond=\"5\"", YearBuilt="YearBuilt=\"1965\"", YearRemodAdd="YearRemodAdd=\"1965\"", RoofStyle="RoofStyle=\"Hip\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"HdBoard\"", Exterior2nd="Exterior2nd=\"HdBoard\"", MasVnrType="MasVnrType=\"BrkFace\"", MasVnrArea="MasVnrArea=\"48\"", ExterQual="ExterQual=\"TA\"", ExterCond="ExterCond=\"TA\"", Foundation="Foundation=\"CBlock\"", BsmtQual="BsmtQual=\"TA\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"No\"", BsmtFinType1="BsmtFinType1=\"Rec\"", BsmtFinSF1="BsmtFinSF1=\"520\"", BsmtFinType2="BsmtFinType2=\"Unf\"", BsmtFinSF2="BsmtFinSF2=\"0\"", BsmtUnfSF="BsmtUnfSF=\"440\"", TotalBsmtSF="TotalBsmtSF=\"960\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"TA\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"FuseF\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"960\"", BsmtFullBath="BsmtFullBath=\"1\"", BsmtHalfBath="BsmtHalfBath=\"0\"", FullBath="FullBath=\"1\"", HalfBath="HalfBath=\"0\"", BedroomAbvGr="BedroomAbvGr=\"3\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"TA\"", TotRmsAbvGrd="TotRmsAbvGrd=\"6\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"0\"", FireplaceQu="FireplaceQu=\"NA\"", GarageType="GarageType=\"Attchd\"", GarageYrBlt="GarageYrBlt=\"1965\"", GarageFinish="GarageFinish=\"Fin\"", GarageCars="GarageCars=\"1\"", GarageArea="GarageArea=\"432\"", GarageQual="GarageQual=\"TA\"", GarageCond="GarageCond=\"TA\"", PavedDrive="PavedDrive=\"P\"", WoodDeckSF="WoodDeckSF=\"120\"", OpenPorchSF="OpenPorchSF=\"0\"", EnclosedPorch="EnclosedPorch=\"0\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"NA\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"5\"", YrSold="YrSold=\"2007\"", SaleType="SaleType=\"WD\"", SaleCondition="SaleCondition=\"Normal\"" */
    
    
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

    // Predict the price based on the year the house was sold
    if (YrSold >= 2005) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * 500);
    }

    // Predict the price based on the LotArea
    predictedPrice += LotArea * 0.1;

    return predictedPrice;
}
