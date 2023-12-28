
function predictHousePrice(OverallQual, TotalBsmtSF, _1stFlrSF, GrLivArea, GarageCars, GarageArea) {
    // Performing simplified calculations to predict the sales price for the house
    const predictedPrice = 50000 + (OverallQual * 20000) + (TotalBsmtSF * 50) + (_1stFlrSF * 50) + (GrLivArea * 60) + (GarageCars * 5000) + (GarageArea * 30);
    return predictedPrice;
}
