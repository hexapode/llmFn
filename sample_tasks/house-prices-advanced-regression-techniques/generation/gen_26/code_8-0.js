
function predictHousePrice(OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd, KitchenQual, Fireplaces) {
  // Add your calculation here
  // Novel combination of variables: Multiply OverallQual by GrLivArea and add the result to the TotalBsmntSF
  let novelCombination = (OverallQual * GrLivArea) + TotalBsmtSF;
  return 130000 + (novelCombination * 30) - (Fireplaces * 500) + (GarageCars * 1000);
}
