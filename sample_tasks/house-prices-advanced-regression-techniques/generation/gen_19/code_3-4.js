
function predictHousePrice(OverallQual, GrLivArea, TotalBsmtSF, GarageArea, YearBuilt) {
    let predictedPrice = 180000;
    predictedPrice += OverallQual * 10000;
    predictedPrice += GrLivArea * 50;
    predictedPrice += TotalBsmtSF * 30;
    predictedPrice += GarageArea * 50;
    predictedPrice += (2023 - YearBuilt) * 100; // Assuming the current year is 2023
    return predictedPrice;
}
