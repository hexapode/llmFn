
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, GarageType, GrLivArea){
    let predictedPrice = 179890.79;

    if (OverallQual >= 8.34) {
        predictedPrice += -13331.86;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 9999.8889;
    }

    if (GrLivArea > 1499.8889000000001) {
        predictedPrice += (GrLivArea - 1499.8889000000001) * 49.8889;
    }

    return predictedPrice;
}
