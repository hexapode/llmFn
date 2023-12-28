
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 180000 + (overallQual * 10000) + (totalSF * 50) + (garageCars * 5000) + (fullBath * 3000) + ((new Date().getFullYear() - yearBuilt) * 1000);
  return predictedPrice;
}
