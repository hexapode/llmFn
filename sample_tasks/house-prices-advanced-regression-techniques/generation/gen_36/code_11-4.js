
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

  if (YearBuilt > 2010) {
    predictedPrice += 10000;
  } else if (YearBuilt < 1970) {
    predictedPrice -= 10000;
  }

  if (Fireplaces > 0) {
    predictedPrice += 5000;
  }

  if (KitchenQual === "Ex" && FullBath > 1) {
    predictedPrice += 10000;
  }

  if (GarageCars > 2) {
    predictedPrice += 5000;
  }

  return predictedPrice;
}
