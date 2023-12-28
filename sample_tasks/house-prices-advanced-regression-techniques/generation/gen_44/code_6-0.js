
function predictHousePrice(OverallQual, GarageType, GrLivArea){
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += 5000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 10000;
    }

    if (GrLivArea > 1500) {
        predictedPrice += (GrLivArea - 1500) * 50;
    }

    return predictedPrice;
}
