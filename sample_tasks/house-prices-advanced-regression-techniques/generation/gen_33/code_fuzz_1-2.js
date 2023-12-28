
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GrLivArea) {
  let predictedPrice = 180000; // Starting value
  
  predictedPrice += (OverallQual * 10000);
  predictedPrice += (GrLivArea * 50);
  
  return predictedPrice;
}
