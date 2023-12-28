
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
function predictHousePrice(Id, overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 180000; // starting value
  let stepValue = Id * 1000; // assume that Id is in the range of 1 to 20
  predictedPrice = predictedPrice + stepValue;
  // perform further calculations based on the input parameters to predict the sales price
  // ...
  return predictedPrice;
}
