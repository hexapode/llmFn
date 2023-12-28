
    /* Try to simplify the code, and remove some of the complexity. */
    
    
function predictHousePrice(OverallQual, Neighborhood){
    let predictedPrice = 179817.83;

    if (Neighborhood === "NridgHt" || Neighborhood === "StoneBr") {
        predictedPrice += 19998.8889;
    }

    if (OverallQual >= 8.34) {
        predictedPrice += -13159.79;
    }

    return predictedPrice;
}
