
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  let predictedPrice = 80000 + (overallQual * 10000) + (totalSF * 50) + (garageCars * 5000) + (fullBath * 3000) + ((2022 - yearBuilt) * 500);
  return predictedPrice;
}
