
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 180000; // starting value
  // calculate the predicted price based on the input parameters
  predictedPrice += overallQual * 10000; 
  predictedPrice += totalSF * 50;
  predictedPrice += garageCars * 5000;
  predictedPrice += fullBath * 3000;
  predictedPrice += (new Date().getFullYear() - yearBuilt) * 1000;
  return predictedPrice;
}
