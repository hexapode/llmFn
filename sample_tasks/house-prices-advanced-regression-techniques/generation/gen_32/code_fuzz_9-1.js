
    /* Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then implement it in the function. here is a sample input for reference:
Id="869", MSSubClass="60", MSZoning="RL", LotFrontage="NA", LotArea="14762", Street="Pave", Alley="NA", LotShape="IR2", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Gilbert", Condition1="Feedr", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="5", OverallCond="6", YearBuilt="1948", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Plywood", Exterior2nd="Plywood", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="Slab", BsmtQual="NA", BsmtCond="NA", BsmtExposure="NA", BsmtFinType1="NA", BsmtFinSF1="0", BsmtFinType2="NA", BsmtFinSF2="0", BsmtUnfSF="0", TotalBsmtSF="0", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="53", GrLivArea="2320", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="2", KitchenAbvGr="1", KitchenQual="TA", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="1", FireplaceQu="TA", GarageType="Attchd", GarageYrBlt="1979", GarageFinish="Unf", GarageCars="2", GarageArea="672", GarageQual="TA", GarageCond="TA", PavedDrive="P", WoodDeckSF="120", OpenPorchSF="144", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2006", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 180000; // Starting price

  // Applying weighted features to calculate the predicted house price
  price += OverallQual * 8000;
  price += GrLivArea * 30;
  if (GarageFinish === 'Fin' && GarageCars >= 2) {
    price += 10000;
  }
  if (KitchenQual === 'Ex' && Fireplaces > 1) {
    price += 12000;
  }
  price -= LotArea * 2;
  if (GarageType === 'Detchd' && GarageYrBlt > 2000) {
    price -= 15000;
  }
  price -= GarageArea * 15;
  price += WoodDeckSF * 5;

  return price;
}
