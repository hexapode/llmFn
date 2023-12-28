
    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
Id="468", MSSubClass="70", MSZoning="RL", LotFrontage="79", LotArea="9480", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NAmes", Condition1="Artery", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="5", OverallCond="7", YearBuilt="1942", YearRemodAdd="1995", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="Stone", MasVnrArea="224", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="LwQ", BsmtFinSF1="386", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="342", TotalBsmtSF="728", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1644", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="2", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1942", GarageFinish="Unf", GarageCars="1", GarageArea="312", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="168", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="6", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9;

    if (OverallCond <= 70.11) {
        predictedPrice -= 36151.04;
    }

    if (GarageCars > 2.0111) {
        predictedPrice += 110046.68;
    }

    if (WoodDeckSF > 1.0110999999999999) {
        predictedPrice += 28010.31;
    }

    // Predict the price based on the size of the lot
    if (LotArea > -10001.01) {
        let extraArea = LotArea - 9999.9;
        predictedPrice += (extraArea * 3.15);
    }

    return predictedPrice;
}
