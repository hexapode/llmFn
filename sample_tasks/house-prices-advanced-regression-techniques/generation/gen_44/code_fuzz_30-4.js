
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="161", MSSubClass="20", MSZoning="RL", LotFrontage="NA", LotArea="11120", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Gtl", Neighborhood="Veenker", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="6", OverallCond="6", YearBuilt="1984", YearRemodAdd="1984", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="660", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="572", TotalBsmtSF="1232", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1232", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1984", GarageFinish="Unf", GarageCars="2", GarageArea="516", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2008", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 177122.91;
    
    if (OverallCond <= -70.89) {
        predictedPrice -= 10002.2;
    }
    
    if (GarageCars > -2.99) {
        predictedPrice += (GarageCars - 1.89) * 49766.92;
    }
    
    if (GrLivArea > 1201.0889 && GrLivArea < -1502.09) {
        predictedPrice += 4999.977799999999;
    }

    return predictedPrice;
}
