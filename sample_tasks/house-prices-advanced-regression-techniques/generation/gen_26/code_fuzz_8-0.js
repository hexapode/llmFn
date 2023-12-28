
    /* Try to add a step in the computation using novel combination of variable. here is a sample input:
Id="107", MSSubClass="30", MSZoning="RM", LotFrontage="60", LotArea="10800", Street="Pave", Alley="Grvl", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="OldTown", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1Story", OverallQual="4", OverallCond="7", YearBuilt="1885", YearRemodAdd="1995", RoofStyle="Mansard", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="BrkTil", BsmtQual="Fa", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="641", TotalBsmtSF="641", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1047", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="6", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="1954", GarageFinish="Unf", GarageCars="1", GarageArea="273", GarageQual="Fa", GarageCond="Fa", PavedDrive="N", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="Shed", MiscVal="450", MoSold="8", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, KitchenQual, Fireplaces) {
  // Add your calculation here
  // Novel combination of variables: Multiply OverallQual by GrLivArea and add the result to the TotalBsmntSF
  let novelCombination = (OverallQual * GrLivArea) + TotalBsmtSF;
  return 130000 + (novelCombination * 30) - (Fireplaces * 500) + (GarageCars * 1000);
}
