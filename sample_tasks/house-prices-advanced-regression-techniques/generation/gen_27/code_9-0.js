
function predictHousePrice(Id, overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 180000; // starting value
  // include the Id parameter in the computation
  let idFactor = Id * 1000; // Example computation using the Id parameter
  predictedPrice += idFactor;
  // perform additional calculations based on the other input parameters to predict the sales price
  // ...
  return predictedPrice;
}
