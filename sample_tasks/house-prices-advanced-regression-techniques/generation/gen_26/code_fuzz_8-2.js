
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
function predictHousePrice(Id, OverallQual, YearBuilt, TotalBsmtSF, GrLivArea, FullBath, GarageCars, GarageArea, YearRemodAdd) {
  // Add your calculation here
  let basePrice = 130000;
  let step = 500 * Id;
  return basePrice + step;
}
