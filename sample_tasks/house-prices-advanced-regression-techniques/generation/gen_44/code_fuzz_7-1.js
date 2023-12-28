
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
Id="431", MSSubClass="160", MSZoning="RM", LotFrontage="21", LotArea="1680", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="BrDale", Condition1="Norm", Condition2="Norm", BldgType="Twnhs", HouseStyle="2Story", OverallQual="6", OverallCond="5", YearBuilt="1971", YearRemodAdd="1971", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="HdBoard", Exterior2nd="HdBoard", MasVnrType="BrkFace", MasVnrArea="232", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="ALQ", BsmtFinSF1="387", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="96", TotalBsmtSF="483", Heating="GasA", HeatingQC="TA", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="987", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="1", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="4", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1971", GarageFinish="Unf", GarageCars="1", GarageArea="264", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="7", YrSold="2008", SaleType="COD", SaleCondition="Abnorml" */
    
    
function predictHousePrice(OverallQual, GrLivArea, YearBuilt, YrSold, GarageType, GarageYrBlt) {
    // Assumption: Trained model coefficients and intercept
    const coefficients = [10000, 50, 200, 5000, 300];
    const intercept = 180000;

    // Feature values
    const features = [OverallQual, GrLivArea, YrSold - YearBuilt, (YrSold - GarageYrBlt), GarageType === "Attchd" ? 1 : 0];

    // Calculate the predicted price using the linear regression formula
    let predictedPrice = intercept;
    for (let i = 0; i < coefficients.length; i++) {
        predictedPrice += coefficients[i] * features[i];
    }

    return predictedPrice;
}
