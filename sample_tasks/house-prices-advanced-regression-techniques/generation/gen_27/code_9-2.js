
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  // Assuming a machine learning model is trained and loaded
  // Use the model to predict the house price based on the input features
  let predictedPrice = trainedModel.predict([[overallQual, totalSF, garageCars, fullBath, yearBuilt]]);
  return predictedPrice;
}
