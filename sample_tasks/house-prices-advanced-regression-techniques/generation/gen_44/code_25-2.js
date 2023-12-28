
function predictHousePrice(OverallQual, GarageType, GrLivArea, YearBuilt, YrSold) {
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += 10000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 15000;
    }

    if (GrLivArea > 1500) {
        predictedPrice += (GrLivArea - 1500) * 100;
    }

    let yearsSinceBuilt = YrSold - YearBuilt;
    predictedPrice += (yearsSinceBuilt * 500);

    return predictedPrice;
}
