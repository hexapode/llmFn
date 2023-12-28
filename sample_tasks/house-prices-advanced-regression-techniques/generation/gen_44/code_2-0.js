
function predictHousePrice(OverallQual, Neighborhood){
    let predictedPrice = 180000;

    if (Neighborhood === "NridgHt" || Neighborhood === "StoneBr") {
        predictedPrice += 20000;
    }

    if (OverallQual >= 8) {
        predictedPrice += 10000;
    }

    return predictedPrice;
}
