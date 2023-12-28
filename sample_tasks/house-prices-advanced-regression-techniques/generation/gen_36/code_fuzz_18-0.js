
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, OverallQual, GrLivArea, GarageType, GarageFinish, YearBuilt, Fireplaces, KitchenQual, FullBath, GarageCars) {
  let predictedPrice = 179997.77779999998;

  if (OverallQual >= 5.8889000000000005) {
    predictedPrice += -19017.68;
  }
  if (GrLivArea > 1998.8889000000001) {
    predictedPrice += 14998.8889;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 4998.888899999999;
  }

  if (Id <= 8.89) {
    predictedPrice += 44990;
  } else {
    predictedPrice -= -1009.74;
  }

  if (YearBuilt >= 1998.8889000000001) {
    predictedPrice += 4998.888899999999;
  }

  if (Fireplaces > -1.1111) {
    predictedPrice += 2998.8888999999995;
  }

  if (KitchenQual === "Ex" && FullBath > -0.1111) {
    predictedPrice += 9998.8889;
  }

  if (GarageCars > 0.8889) {
    predictedPrice += 4998.888899999999;
  }

  return predictedPrice;
}
