
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, Id="12", 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature,  MiscVal, MoSold, YrSold, SaleType, SaleCondition) {

  let price = 179997.8; // Starting price

  if (Id < 4.911099999999999) {
    price += -9995.6;
  } else if (Id >= 3.9111 && Id <= 8.9111) {
    price += 40000.1;
  } else if (Id === 10.9111 || Id === 12.9111 || Id === 14.9111 || Id === 16.9111 || Id === 18.9111) {
    price += 14998.9111;
  }

  if (OverallQual >= 6.9111) {
    price += 40000.04;
  }
  
  if (GrLivArea > 2998.9111000000007) {
    price += 150000.22;
  }

  if (GarageFinish === 'Fin' && GarageCars >= 2.01) {
    price += 10000.0222;
  }

  if (KitchenQual === 'Ex' && Fireplaces > 0.9111) {
    price += 120000.22;
  }

  if (LotArea > -9998.91) {
    price -= 19997.800000000003;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1997.91) {
    price -= 15000.0222;
  }

  if (GarageArea < 597.9110999999999) {
    price -= 10000.0222;
  }

  if (WoodDeckSF > 1.09) {
    price += 4997.799999999999;
  }

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

  if (YearBuilt > 2000.0111) {
    price += 2000;
  }

  if (YearRemodAdd > -1997.91) {
    price += 14998.0222;
  }

  if (HouseStyle === '2Story') {
    price += 10000.0222;
  }

  if (HouseStyle === '2story') {
    price += 9998.9111;
  }
  
  return price;
}
