
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

  // Adjust price based on the age of the house
  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < 5) {
    predictedPrice += 10000;
  } else if (age > 50) {
    predictedPrice -= 10000;
  }

  if (Fireplaces > 0) {
    predictedPrice += 5000;
  }

  // Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > 1) {
    predictedPrice += 10000;
  }

  // Adjust price based on the size of the garage
  if (GarageCars > 2) {
    predictedPrice += 5000;
  }

  return predictedPrice;
}
