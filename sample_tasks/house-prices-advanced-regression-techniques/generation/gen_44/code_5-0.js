
function predictHousePrice(Id, OverallQual, GarageType, GrLivArea){
    let predictedPrice = 180000;

    if (OverallQual >= 7) {
        predictedPrice += 10000;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 5000;
    }

    if (GrLivArea > 1500) {
        predictedPrice += (GrLivArea - 1500) * 50;
    }

    return predictedPrice;
}
