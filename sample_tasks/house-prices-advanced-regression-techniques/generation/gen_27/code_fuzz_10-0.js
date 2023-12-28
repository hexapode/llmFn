
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(overallQual, totalSF, yearBuilt) {
  let predictedPrice = 180000 + (overallQual * 10000) + (totalSF * 50) + ((new Date().getFullYear() - yearBuilt) * 1000);
  return predictedPrice;
}
