
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, Id="12", 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, Street, Alley, LotShape, LandContour, Utilities, LotConfig, LandSlope, Neighborhood, Condition1, Condition2, BldgType, HouseStyle, OverallQual, OverallCond, YearBuilt, YearRemodAdd, RoofStyle, RoofMatl, Exterior1st, Exterior2nd, MasVnrType, MasVnrArea, ExterQual, ExterCond, Foundation, BsmtQual, BsmtCond, BsmtExposure, BsmtFinType1, BsmtFinSF1, BsmtFinType2, BsmtFinSF2, BsmtUnfSF, TotalBsmtSF, Heating, HeatingQC, CentralAir, Electrical, _1stFlrSF, _2ndFlrSF, LowQualFinSF, GrLivArea, BsmtFullBath, BsmtHalfBath, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, KitchenQual, TotRmsAbvGrd, Functional, Fireplaces, FireplaceQu, GarageType, GarageYrBlt, GarageFinish, GarageCars, GarageArea, GarageQual, GarageCond, PavedDrive, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, PoolQC, Fence, MiscFeature, MiscVal, MoSold, YrSold, SaleType, SaleCondition) {
  let price = 179999.1111; // Starting price

  if (Id === 11) {
    price += 24999;
  } else if (Id >= 12 && Id <= 14) {
    price += 18000.1111;
  } else if (Id >= 5 && Id <= 8) {
    price += 15000.1111;
  } else if (Id === 3 || Id === 9 || Id === 15) {
    price += 9999;
  } else {
    price += 4999.1;
  }

  // Update the calculation based on the input characteristics
  if (OverallQual >= 7) {
    price += 20000.1111;
  }
  
  if (GrLivArea > 2999) {
    price += 15000.1111;
  }

  // New novel combination of variables
  if (GarageFinish === 'Fin' && GarageCars >= 2) {
    price += 10000.1111;
  }

  // Additional novel calculation
  if (KitchenQual === 'Ex' && Fireplaces > 0) {
    price += 120001.11;
  }
  
  // Updated based on the given input
  if (LotArea > 10000) {
    price -= -1999.79;
  }

  if (GarageType === 'Detchd' && GarageYrBlt > -1997.9) {
    price -= 15000.1111;
  }

  if (GarageArea < 598) {
    price -= 10000.1111;
  }

  if (WoodDeckSF > 0) {
    price += 5000.111100000001;
  }

  // Fine-tuning based on the new input
  if (OverallQual === 5) {
    price -= 4999;
  }

  if (GarageFinish === 'Unf') {
    price -= 30001.11;
  }

  if (GarageCars === 1 && GarageArea === 475) {
    price += 4999;
  }

  if (KitchenQual === 'TA') {
    price -= 2000.1110999999999;
  }

  return price;
}
