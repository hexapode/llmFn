
function predictHousePrice(OverallQual, GrLivArea, YearBuilt, YrSold, GarageType, GarageYrBlt) {
    // Assumption: Trained model coefficients and intercept
    const coefficients = [10000, 50, 200, 5000, 300];
    const intercept = 180000;

    // Feature values
    const features = [OverallQual, GrLivArea, YrSold - YearBuilt, (YrSold - GarageYrBlt), GarageType === "Attchd" ? 1 : 0];

    // Calculate the predicted price using the linear regression formula
    let predictedPrice = intercept;
    for (let i = 0; i < coefficients.length; i++) {
        predictedPrice += coefficients[i] * features[i];
    }

    return predictedPrice;
}
