
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GrLivArea) {
  return 180000 + (OverallQual * 10000) + (GrLivArea * 50);
}
