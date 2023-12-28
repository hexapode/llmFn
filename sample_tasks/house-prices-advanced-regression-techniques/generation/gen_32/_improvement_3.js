/* Best score: 55317.345199647825 */


    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
Id="1354", MSSubClass="50", MSZoning="RL", LotFrontage="56", LotArea="14720", Street="Pave", Alley="NA", LotShape="IR1", LandContour="Lvl", Utilities="AllPub", LotConfig="CulDSac", LandSlope="Gtl", Neighborhood="NoRidge", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="8", OverallCond="5", YearBuilt="1995", YearRemodAdd="1996", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="BrkFace", MasVnrArea="579", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="Av", BsmtFinType1="GLQ", BsmtFinSF1="816", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="1217", TotalBsmtSF="2033", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="3238", BsmtFullBath="1", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="9", Functional="Typ", Fireplaces="1", FireplaceQu="Ex", GarageType="Attchd", GarageYrBlt="1996", GarageFinish="Fin", GarageCars="3", GarageArea="666", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="283", OpenPorchSF="86", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="3", YrSold="2010", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 153898.2; // Starting price

  // Sample rule-based calculations
  if (OverallQual >= 7.7) {
    price += 126277.56;
  }
  
  if (GrLivArea > 2307.74) {
    price += 109350.81;
  }

  // More rule-based calculations based on domain-specific heuristics

  return price;
}
