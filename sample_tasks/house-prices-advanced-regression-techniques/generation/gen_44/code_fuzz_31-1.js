
    /* I try on the following input and it returned 216000" when the correct class was "94750",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="98", MSSubClass="20", MSZoning="RL", LotFrontage="73", LotArea="10921", Street="Pave", Alley="NA", LotShape="Reg", LandContour="HLS", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="4", OverallCond="5", YearBuilt="1965", YearRemodAdd="1965", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="BrkFace", MasVnrArea="48", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Rec", BsmtFinSF1="520", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="440", TotalBsmtSF="960", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="FuseF", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="960", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Attchd", GarageYrBlt="1965", GarageFinish="Fin", GarageCars="1", GarageArea="432", GarageQual="TA", GarageCond="TA", PavedDrive="P", WoodDeckSF="120", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.77779999998;

    if (OverallQual >= 7.89) {
        predictedPrice += 66563.31;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 16499.76;
    }

    if (GrLivArea > -1500.89) {
        predictedPrice += (GrLivArea - 1502) * 65.47;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= 2005.8889000000001) {
        let yearsSinceRemod = YrSold - YearRemodAdd;
        predictedPrice -= (yearsSinceRemod * 889.33);
    }

    return predictedPrice;
}
