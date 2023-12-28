
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual) {
  let predictedPrice = 180000 + (OverallQual * 5000);
  return predictedPrice;
}
