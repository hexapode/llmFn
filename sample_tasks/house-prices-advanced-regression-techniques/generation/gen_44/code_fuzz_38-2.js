
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GarageType, GrLivArea, YearBuilt, YrSold){
    let predictedPrice = 180000;

    if (OverallQual >= 7) predictedPrice += 10000;
    if (GarageType === "Attchd") predictedPrice += 15000;
    if (GrLivArea > 1500) predictedPrice += (GrLivArea - 1500) * 100;
    predictedPrice += (YrSold - YearBuilt) * 500;

    return predictedPrice;
}
