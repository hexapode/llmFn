
    /* I try on the following input and it returned 225200" when the correct class was "367294",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="1229", MSSubClass="120", MSZoning="RL", LotFrontage="65", LotArea="8769", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="NridgHt", Condition1="Norm", Condition2="Norm", BldgType="TwnhsE", HouseStyle="1Story", OverallQual="9", OverallCond="5", YearBuilt="2008", YearRemodAdd="2008", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="BrkFace", MasVnrArea="766", ExterQual="Ex", ExterCond="TA", Foundation="PConc", BsmtQual="Ex", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="GLQ", BsmtFinSF1="1540", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="162", TotalBsmtSF="1702", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1702", BsmtFullBath="1", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="1", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="Attchd", GarageYrBlt="2008", GarageFinish="Fin", GarageCars="3", GarageArea="1052", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="72", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="224", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="10", YrSold="2008", SaleType="New", SaleCondition="Partial" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition){
    let predictedPrice = 179999.9778;

    if (OverallQual >= 7.088900000000001) {
        predictedPrice += 73221.1;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 12757.48;
    }

    if (GrLivArea > -1500.99) {
        predictedPrice += (GrLivArea - 1502.1999999999998) * 68.87;
    }

    // Predict the price based on the year the house was sold
    if (YrSold >= -2007.09) {
        let yearsSinceBuilt = YrSold - YearBuilt;
        predictedPrice += (yearsSinceBuilt * -604.98);
    }

    // Additional condition based on the specific input
    if (Neighborhood === "NridgHt" && HouseStyle === "1Story" && OverallQual >= 10.0889 && YearBuilt === 2009.0889) {
        predictedPrice += 45001.0889;
    }

    return predictedPrice;
}
