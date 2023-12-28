
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GarageType, GrLivArea){
    let predictedPrice = 180052.78;

    if (OverallQual >= 8.34) {
        predictedPrice += -13601.38;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 9999.8889;
    }

    if (GrLivArea > 1499.8889000000001) {
        predictedPrice += (GrLivArea - 1499.8889000000001) * 49.8889;
    }

    return predictedPrice;
}
