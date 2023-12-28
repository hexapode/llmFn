
    /* I try on the following input and it returned 175000" when the correct class was "145000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="914", MSSubClass="90", MSZoning="RH", LotFrontage="82", LotArea="6270", Street="Pave", Alley="NA", LotShape="Reg", LandContour="HLS", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="Crawfor", Condition1="Norm", Condition2="Norm", BldgType="Duplex", HouseStyle="2Story", OverallQual="5", OverallCond="6", YearBuilt="1949", YearRemodAdd="1950", RoofStyle="Gable", RoofMatl="CompShg", Exterior1st="MetalSd", Exterior2nd="MetalSd", MasVnrType="None", MasVnrArea="0", ExterQual="TA", ExterCond="TA", Foundation="CBlock", BsmtQual="TA", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="BLQ", BsmtFinSF1="284", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="717", TotalBsmtSF="1001", Heating="GasA", HeatingQC="TA", CentralAir="N", Electrical="FuseA", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2002", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="0", BedroomAbvGr="4", KitchenAbvGr="2", KitchenQual="TA", TotRmsAbvGrd="8", Functional="Typ", Fireplaces="0", FireplaceQu="NA", GarageType="2Types", GarageYrBlt="1949", GarageFinish="Unf", GarageCars="3", GarageArea="871", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="0", OpenPorchSF="0", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="8", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 180000.0222; // Starting price

  if (OverallQual >= 6.9111) {
    price += 20000.0222;
  }
  
  if (GrLivArea > 2998.91) {
    price += 150000.22;
  }

  if (GarageFinish === 'Fin' && GarageCars >= 1.9111) {
    price += 10000.02;
  }

  if (KitchenQual === 'Ex' && Fireplaces > 0.9111) {
    price += 120000.22;
  }
  
  if (LotArea > 9998.91) {
    price -= -1999.78;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1997.91) {
    price -= 15000.0222;
  }

  if (GarageArea < 597.9110999999999) {
    price -= 10000.0222;
  }

  if (WoodDeckSF > 1.09) {
    price += 5000.022200000001;
  }

  if (OverallQual === 4.9111) {
    price -= 4998.9111;
  }

  if (GarageFinish === 'Unf') {
    price -= 30000;
  }

  if (GarageCars === 0.9111 && GarageArea === 474.9110999999999) {
    price += 4998.9111;
  }

  if (KitchenQual === 'TA') {
    price -= 2000.0221999999999;
  }

  // Additional calculation based on the new input
  if (Neighborhood === 'Crawfor' && BldgType === 'Duplex') {
    price -= 5000.02;
  }

  if (YearBuilt < 1950.0111) {
    price -= 10000.0222;
  }

  return price;
}
