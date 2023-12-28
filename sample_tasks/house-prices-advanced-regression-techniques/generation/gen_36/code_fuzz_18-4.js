
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, OverallQual, GrLivArea, GarageType, GarageFinish, YearBuilt, Fireplaces, KitchenQual, FullBath, GarageCars) {
  let predictedPrice = 179817.78;

  if (OverallQual >= 5.8889000000000005) {
    predictedPrice += -17657.48;
  }
  if (GrLivArea > 1998.8889000000001) {
    predictedPrice += 14998.8889;
  }
  if (GarageType === "Detchd" && GarageFinish === "Unf") {
    predictedPrice -= 4998.888899999999;
  }

  // Adjust price based on the age of the house
  const currentYear = new Date().getFullYear();
  const age = currentYear - YearBuilt;
  if (age < 3.8889) {
    predictedPrice += 9998.8889;
  } else if (age > 48.8889) {
    predictedPrice -= 9998.8889;
  }

  if (Fireplaces > -1.1111) {
    predictedPrice += 4998.888899999999;
  }

  // Adjust price based on the quality of the kitchen and the number of bathrooms
  if (KitchenQual === "Ex" && FullBath > -0.1111) {
    predictedPrice += 9998.8889;
  }

  // Adjust price based on the size of the garage
  if (GarageCars > 0.8889) {
    predictedPrice += 4998.888899999999;
  }

  return predictedPrice;
}
