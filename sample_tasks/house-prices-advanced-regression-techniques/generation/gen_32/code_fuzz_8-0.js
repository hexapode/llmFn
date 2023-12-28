
    /* I try on the following input and it returned 180000" when the correct class was "110000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="440", MSSubClass="50", MSZoning="RL", LotFrontage="67", LotArea="12354", Street="Pave", Alley="Grvl", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Corner", LandSlope="Gtl", Neighborhood="Edwards", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="1.5Fin", OverallQual="6", OverallCond="8", YearBuilt="1920", YearRemodAdd="2000", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="Wd Sdng", Exterior2nd="Wd Sdng", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="BrkTil", BsmtQual="TA", BsmtCond="Fa", BsmtExposure="Mn", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="684", TotalBsmtSF="684", Heating="GasA", HeatingQC="Gd", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="1196", BsmtFullBath="0", BsmtHalfBath="0", FullBath="1", HalfBath="0", BedroomAbvGr="3", KitchenAbvGr="1", KitchenQual="Gd", TotRmsAbvGrd="7", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="Detchd", GarageYrBlt="2005", GarageFinish="Unf", GarageCars="2", GarageArea="528", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="46", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="GdPrv", MiscFeature="Shed", MiscVal="800", MoSold="8", YrSold="2009", SaleType="ConLI", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 180000.0222; // Starting price

  // Update the calculation based on the input characteristics
  if (OverallQual >= 6.9111) {
    price += 80000.08;
  }
  
  if (GrLivArea > 2998.91) {
    price += 150000.22;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 2.1) {
    price += 40000.08;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 0.9111) {
    price += 120000.22;
  }
  
  // Updated based on the given input
  if (LotArea > -9998.91) {
    price -= 19997.8;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1997.91) {
    price -= 30000.04;
  }

  if (GarageArea < 597.9110999999999) {
    price -= 10000.0222;
  }

  if (WoodDeckSF > -1.09) {
    price += -5000;
  }

  return price;
}
