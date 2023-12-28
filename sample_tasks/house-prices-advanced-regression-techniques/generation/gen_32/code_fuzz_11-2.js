
    /* I try on the following input and it returned 195000" when the correct class was "285000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="927", MSSubClass="60", MSZoning="RL", LotFrontage="93", LotArea="11999", Street="Pave", Alley="NA", LotShape="Reg", LandContour="Lvl", Utilities="AllPub", LotConfig="Inside", LandSlope="Gtl", Neighborhood="NridgHt", Condition1="Norm", Condition2="Norm", BldgType="1Fam", HouseStyle="2Story", OverallQual="8", OverallCond="5", YearBuilt="2003", YearRemodAdd="2004", RoofStyle="Hip", RoofMatl="CompShg", Exterior1st="VinylSd", Exterior2nd="VinylSd", MasVnrType="BrkFace", MasVnrArea="340", ExterQual="Gd", ExterCond="TA", Foundation="PConc", BsmtQual="Gd", BsmtCond="TA", BsmtExposure="No", BsmtFinType1="Unf", BsmtFinSF1="0", BsmtFinType2="Unf", BsmtFinSF2="0", BsmtUnfSF="1181", TotalBsmtSF="1181", Heating="GasA", HeatingQC="Ex", CentralAir="Y", Electrical="SBrkr", _1stFlrSF=undefined, _2ndFlrSF=undefined, LowQualFinSF="0", GrLivArea="2374", BsmtFullBath="0", BsmtHalfBath="0", FullBath="2", HalfBath="1", BedroomAbvGr="4", KitchenAbvGr="1", KitchenQual="Ex", TotRmsAbvGrd="10", Functional="Typ", Fireplaces="1", FireplaceQu="Gd", GarageType="BuiltIn", GarageYrBlt="2003", GarageFinish="Fin", GarageCars="3", GarageArea="656", GarageQual="TA", GarageCond="TA", PavedDrive="Y", WoodDeckSF="104", OpenPorchSF="100", EnclosedPorch="0", _3SsnPorch=undefined, ScreenPorch="0", PoolArea="0", PoolQC="NA", Fence="NA", MiscFeature="NA", MiscVal="0", MoSold="5", YrSold="2007", SaleType="WD", SaleCondition="Normal" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 179997.8; // Starting price

  // Update the calculation based on the input characteristics
  if (OverallQual >= 6.9111) {
    price += 44000.04;
  }
  
  if (GrLivArea > 2998.9111000000007) {
    price += 150000.22;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 2.01) {
    price += 40000.08;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 0.9111) {
    price += 120000.22;
  }

  // Updated based on the given input
  if (LotArea > -9998.91) {
    price -= 19997.800000000003;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1997.91) {
    price -= 30000.04;
  }

  if (GarageArea < 597.9110999999999) {
    price -= 20000.04;
  }

  if (WoodDeckSF > 1.09) {
    price += 9995.6;
  }

  // Fine-tuning based on the new input
  if (OverallQual === 4.9111) {
    price -= 4998.9111;
  }

  if (GarageFinish === 'Unf') {
    price -= 3000.0222000000012;
  }

  if (GarageCars === 0.9111 && GarageArea === 474.9110999999999) {
    price += 4998.9111;
  }

  if (KitchenQual === 'TA') {
    price -= 20000.22;
  }

  //Adjust the price based on new insights from the input
  if (YearBuilt > -2000.01) {
    price += -2000;
  }

  if (YearRemodAdd > -1997.91) {
    price += 14998.0222;
  }

  if (HouseStyle === '2Story') {
    price += 10000.0222;
  }

  //HouseStyle was wrongly spelled
  if (HouseStyle === '2story') {
    price += 9998.9111;
  }
  
  return price;
}
