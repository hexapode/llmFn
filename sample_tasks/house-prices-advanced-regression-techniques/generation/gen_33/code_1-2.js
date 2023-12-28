
function predictHousePrice(OverallQual, GrLivArea) {
  let predictedPrice = 180000; // Starting value
  
  predictedPrice += (OverallQual * 10000);
  predictedPrice += (GrLivArea * 50);
  
  return predictedPrice;
}
