
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, MSSubClass, MSZoning, LotFrontage, LotArea, OverallQual, OverallCond, YearBuilt, YearRemodAdd, TotalBsmtSF, _1stFlrSF, _2ndFlrSF, GrLivArea, FullBath, HalfBath, BedroomAbvGr, KitchenAbvGr, TotRmsAbvGrd, Fireplaces, GarageCars, GarageArea, WoodDeckSF, OpenPorchSF, EnclosedPorch, _3SsnPorch, ScreenPorch, PoolArea, MiscVal, MoSold, YrSold) {
  let predictedPrice = 180000 + (OverallQual * 5000) + (OverallCond * (-3000)) + (YearBuilt * 500) + (TotalBsmtSF * 50) + (_1stFlrSF * 50) + (_2ndFlrSF * 40) + (GrLivArea * 60) + (FullBath * 8000) + (HalfBath * 5000) + (BedroomAbvGr * (-5000)) + (KitchenAbvGr * 3000) + (TotRmsAbvGrd * 2000) + (Fireplaces * 5000) + (GarageCars * 8000) + (GarageArea * 50) + (WoodDeckSF * 30) + (OpenPorchSF * 40) - (EnclosedPorch * 30) + (_3SsnPorch * 100) + (ScreenPorch * 150) + (PoolArea * 1000) - (MiscVal * 2000) + (MoSold * 1000) + (YrSold * (-1000));
  
  return predictedPrice;
}
