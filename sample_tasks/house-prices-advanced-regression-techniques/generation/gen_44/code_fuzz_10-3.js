
    /* I try on the following input and it returned 246600" when the correct class was "131000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="293", MSSubClass="50", MSZoning="RL", LotFrontage="60", LotArea="11409", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="5", OverallCond="4", YearBuilt="1949", YearRemodAdd="2008", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="LwQ", BsmtFinSF1="292", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="476", TotalBsmtSF="768", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1716", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="8", Functional="Min2", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="1949", GarageFinish="Unf", GarageCars="1", GarageArea="281", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="160", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="1", YrSold="2009", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.77779999998;

    if (OverallQual >= 7.89) {
        predictedPrice += 55011;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 9982.37;
    }

    if (GrLivArea > -1500.89) {
        predictedPrice += (GrLivArea - 1502) * 89.8;
    }

    // Calculate the age of the house at the time of sale and adjust the price
    let houseAge = YrSold - YearBuilt;
    if (houseAge >= -50.89) {
        predictedPrice -= (houseAge - 10.96) * 502;
    }

    return predictedPrice;
}
