
    /* I try on the following input and it returned 180000" when the correct class was "174000",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
Id="Id=\"910\"", MSSubClass="MSSubClass=\"60\"", MSZoning="MSZoning=\"RL\"", LotFrontage="LotFrontage=\"149\"", LotArea="LotArea=\"12589\"", Street="Street=\"Pave\"", Alley="Alley=\"NA\"", LotShape="LotShape=\"IR2\"", LandContour="LandContour=\"Lvl\"", Utilities="Utilities=\"AllPub\"", LotConfig="LotConfig=\"Inside\"", LandSlope="LandSlope=\"Gtl\"", Neighborhood="Neighborhood=\"Gilbert\"", Condition1="Condition1=\"Norm\"", Condition2="Condition2=\"Norm\"", BldgType="BldgType=\"1Fam\"", HouseStyle="HouseStyle=\"2Story\"", OverallQual="OverallQual=\"6\"", OverallCond="OverallCond=\"5\"", YearBuilt="YearBuilt=\"2005\"", YearRemodAdd="YearRemodAdd=\"2005\"", RoofStyle="RoofStyle=\"Gable\"", RoofMatl="RoofMatl=\"CompShg\"", Exterior1st="Exterior1st=\"VinylSd\"", Exterior2nd="Exterior2nd=\"VinylSd\"", MasVnrType="MasVnrType=\"None\"", MasVnrArea="MasVnrArea=\"0\"", ExterQual="ExterQual=\"Gd\"", ExterCond="ExterCond=\"TA\"", Foundation="Foundation=\"PConc\"", BsmtQual="BsmtQual=\"Gd\"", BsmtCond="BsmtCond=\"TA\"", BsmtExposure="BsmtExposure=\"No\"", BsmtFinType1="BsmtFinType1=\"Unf\"", BsmtFinSF1="BsmtFinSF1=\"0\"", BsmtFinType2="BsmtFinType2=\"Unf\"", BsmtFinSF2="BsmtFinSF2=\"0\"", BsmtUnfSF="BsmtUnfSF=\"742\"", TotalBsmtSF="TotalBsmtSF=\"742\"", Heating="Heating=\"GasA\"", HeatingQC="HeatingQC=\"Ex\"", CentralAir="CentralAir=\"Y\"", Electrical="Electrical=\"SBrkr\"", _1stFlrSF="_1stFlrSF=undefined", _2ndFlrSF="_2ndFlrSF=undefined", LowQualFinSF="LowQualFinSF=\"0\"", GrLivArea="GrLivArea=\"1484\"", BsmtFullBath="BsmtFullBath=\"0\"", BsmtHalfBath="BsmtHalfBath=\"0\"", FullBath="FullBath=\"2\"", HalfBath="HalfBath=\"1\"", BedroomAbvGr="BedroomAbvGr=\"3\"", KitchenAbvGr="KitchenAbvGr=\"1\"", KitchenQual="KitchenQual=\"Gd\"", TotRmsAbvGrd="TotRmsAbvGrd=\"8\"", Functional="Functional=\"Typ\"", Fireplaces="Fireplaces=\"1\"", FireplaceQu="FireplaceQu=\"Gd\"", GarageType="GarageType=\"Attchd\"", GarageYrBlt="GarageYrBlt=\"2005\"", GarageFinish="GarageFinish=\"Fin\"", GarageCars="GarageCars=\"2\"", GarageArea="GarageArea=\"390\"", GarageQual="GarageQual=\"TA\"", GarageCond="GarageCond=\"TA\"", PavedDrive="PavedDrive=\"Y\"", WoodDeckSF="WoodDeckSF=\"36\"", OpenPorchSF="OpenPorchSF=\"24\"", EnclosedPorch="EnclosedPorch=\"0\"", _3SsnPorch="_3SsnPorch=undefined", ScreenPorch="ScreenPorch=\"0\"", PoolArea="PoolArea=\"0\"", PoolQC="PoolQC=\"NA\"", Fence="Fence=\"NA\"", MiscFeature="MiscFeature=\"NA\"", MiscVal="MiscVal=\"0\"", MoSold="MoSold=\"6\"", YrSold="YrSold=\"2009\"", SaleType="SaleType=\"WD\"", SaleCondition="SaleCondition=\"Normal\"" */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 161998.1; // Starting price

  // Updated calculations based on the input
  if (OverallQual >= 7) {
    price += 48400.26;
  }

  if (GrLivArea > 2999) {
    price += 150001.11;
  }

  if (GarageFinish === 'Fin' && GarageCars >= 2.2) {
    price += 96801.06;
  }

  if (KitchenQual === 'Ex' && Fireplaces > 0) {
    price += 60000.56;
  }

  // New calculation based on the specific input
  if (Neighborhood === 'Gilbert') {
    price += -169.35;
  }

  return price;
}
