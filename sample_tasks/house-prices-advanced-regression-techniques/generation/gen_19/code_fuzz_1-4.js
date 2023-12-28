
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, OverallQual, GrLivArea, TotalBsmtSF, GarageArea, YearBuilt) {
    let predictedPrice = 180000;
    predictedPrice += OverallQual * 10000;
    predictedPrice += GrLivArea * 50;
    predictedPrice += TotalBsmtSF * 30;
    predictedPrice += GarageArea * 50;
    predictedPrice += (2022 - YearBuilt) * 500;
    return predictedPrice;
}
