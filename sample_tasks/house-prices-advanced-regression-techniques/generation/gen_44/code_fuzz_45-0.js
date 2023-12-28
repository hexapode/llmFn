
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="Id=\"379\"", MSSubClass="MSSubClass=\"20\"", MSZoning="MSZoning=\"RL\"", LotFrontage="LotFrontage=\"88\"", LotArea="LotArea=\"11394\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"Reg\"", LandContour="LandContour=\"Lvl\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Corner\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"StoneBr\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"1Story\"", OverallQual="OverallQual=\"9\"", OverallCond="OverallCond=\"2\"", YearBuilt="YearBuilt=\"2010\"", YearRemodAdd="YearRemodAdd=\"2010\"", RoofStyle="RoofStyle=\"Hip\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"VinylSd\"", Exterior2nd="Exterior2nd=\"VinylSd\"", MasVnrType="MasVnrType=\"Stone\"", MasVnrArea="MasVnrArea=\"350\"", ExterQual="ExterQual=\"Gd\"", ExterCond="ExterCond=\"TA\"", Foundation="Foundation=\"PConc\"", BsmtQual="BsmtQual=\"Ex\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"Av\"", BsmtFinType1="BsmtFinType1=\"GLQ\"", BsmtFinSF1="BsmtFinSF1=\"1445\"", BsmtFinType2="BsmtFinType2=\"Unf\"", BsmtFinSF2="BsmtFinSF2=\"0\"", BsmtUnfSF="BsmtUnfSF=\"411\"", TotalBsmtSF="TotalBsmtSF=\"1856\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"Ex\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"SBrkr\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"1856\"", BsmtFullBath="BsmtFullBath=\"1\"", BsmtHalfBath="BsmtHalfBath=\"0\"", FullBath="FullBath=\"1\"", HalfBath="HalfBath=\"1\"", BedroomAbvGr="BedroomAbvGr=\"1\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"Ex\"", TotRmsAbvGrd="TotRmsAbvGrd=\"8\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"1\"", FireplaceQu="FireplaceQu=\"Ex\"", GarageType="GarageType=\"Attchd\"", GarageYrBlt="GarageYrBlt=\"2010\"", GarageFinish="GarageFinish=\"Fin\"", GarageCars="GarageCars=\"3\"", GarageArea="GarageArea=\"834\"", GarageQual="GarageQual=\"TA\"", GarageCond="GarageCond=\"TA\"", PavedDrive="PavedDrive=\"Y\"", WoodDeckSF="WoodDeckSF=\"113\"", OpenPorchSF="OpenPorchSF=\"0\"", EnclosedPorch="EnclosedPorch=\"0\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"NA\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"6\"", YrSold="YrSold=\"2010\"", SaleType="SaleType=\"New\"", SaleCondition="SaleCondition=\"Partial\"" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.77779999998;

    if (OverallQual >= 7.89) {
        predictedPrice += 79207.92;
    } else if (OverallQual >= 6.8889000000000005) {
        predictedPrice += 29287.85;
    }

    if (GarageCars > -1.89) {
        predictedPrice += (GarageCars - -1.85) * 5502.2;
    }

    if (GrLivArea > -2000.89) {
        predictedPrice += (GrLivArea - 1999.7778000000003) * 82;
    }

    if (YearBuilt >= 1999.8889000000001) {
        predictedPrice += (YrSold - YearBuilt) * 2010;
    }

    return predictedPrice;
}
