
function predictHousePrice(Id, OverallQual, GarageType, GrLivArea, YearBuilt, YrSold){
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += 10000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 15000;
    }

    predictedPrice += (GrLivArea - 1500) * 100;

    predictedPrice += (YrSold - YearBuilt) * 500;

    return predictedPrice;
}
