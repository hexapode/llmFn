
function predictHousePrice(Id, OverallQual, GrLivArea, GarageType, GarageFinish, YearBuilt, Fireplaces, KitchenQual, FullBath, GarageCars) {
  let predictedPrice = 180000;

  if (OverallQual >= 7) {
    predictedPrice += 20000;
  }
  if (GrLivArea > 2000) {
    predictedPrice += 15000;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 5000;
  }

  if (Id <= 10) {
    predictedPrice += 5000;
  } else {
    predictedPrice -= 5000;
  }

  if (YearBuilt >= 2000) {
    predictedPrice += 5000;
  }

  if (Fireplaces > 0) {
    predictedPrice += 3000;
  }

  if (KitchenQual === "Ex" && FullBath > 1) {
    predictedPrice += 10000;
  }

  if (GarageCars > 2) {
    predictedPrice += 5000;
  }

  return predictedPrice;
}
