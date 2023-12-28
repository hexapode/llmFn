
    /* I try on the following input and it returned 226050" when the correct class was "415298",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="279", MSSubClass="20", MSZoning="RL", LotFrontage="107", LotArea="14450", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NridgHt", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="9", OverallCond="5", YearBuilt="2006", YearRemodAdd="2007", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="CemntBd", Exterior2nd="CmentBd", MasVnrType="BrkFace", MasVnrArea="315", ExterQual="Ex", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="Gd", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="2121", TotalBsmtSF="2121", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2121", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="1", FireplaceQu="Ex", GarageType="Attchd", GarageYrBlt="2007", GarageFinish="Fin", GarageCars="3", GarageArea="732", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="124", OpenPorchSF="98", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="142", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2007", SaleType="New", SaleCondition="Partial" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += (OverallQual - 6) * 2000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 10000;
    }

    predictedPrice += (GrLivArea - 1500) * 60;

    return predictedPrice;
}
