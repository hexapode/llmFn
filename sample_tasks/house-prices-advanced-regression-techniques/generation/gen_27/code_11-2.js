
function predictHousePrice(overallQual, totalSF, garageCars, fullBath, yearBuilt) {
  // Assume the existence of a trained linear regression model
  // Preprocess the input data to match the format used for training the model
  let inputFeatures = [overallQual, totalSF, garageCars, fullBath, yearBuilt];
  
  // Use the trained model to make predictions
  let predictedPrice = trainedRegressionModel.predict(inputFeatures);
  
  return predictedPrice;
}
