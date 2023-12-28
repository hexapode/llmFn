
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(Id, OverallQual, GarageType, GrLivArea){
    let predictedPrice = 179099.58;

    if (OverallQual >= 5.8889000000000005) {
        predictedPrice += -12579.16;
    }

    if (GarageType === "Attchd") {
        predictedPrice += 4998.888899999999;
    }

    if (GrLivArea > 1498.8889000000001) {
        predictedPrice += (GrLivArea - 1498.8889000000001) * 48.8889;
    }

    return predictedPrice;
}
