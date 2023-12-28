
function predictHousePrice(OverallQual) {
  let predictedPrice = 180000 + (OverallQual * 5000);
  return predictedPrice;
}
