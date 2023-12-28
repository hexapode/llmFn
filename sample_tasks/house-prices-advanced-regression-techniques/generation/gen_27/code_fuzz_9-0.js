
    /* Try to add a step in the computation using the parameter Id. Here as some value it can take: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. */
    
    
function predictHousePrice(Id, overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 180000; // starting value
  // include the Id parameter in the computation
  let idFactor = Id * 1000; // Example computation using the Id parameter
  predictedPrice += idFactor;
  // perform additional calculations based on the other input parameters to predict the sales price
  // ...
  return predictedPrice;
}
