/** // -Infinity //**/
/**
Try to think how Geography parameter could impact the prediction, then add a step in the computation using the parameter Geography. Here as some value it can take: France, France, France, France, Spain, Germany, France, Spain, France, Germany, Germany, Germany, Spain, France, France, France, France, France, Germany, France.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        GeographyImpact: {
            'France': 0.00,
            'Germany': 0.70,
            'Spain': -0.50
        },
        // ... (other coefficients remain the same)
    };

    // ... (other calculations remain the same)

    let linearCombination = (
        // ... (other linear combination calculations remain the same)
        + coefficients.GeographyImpact[Geography] +
        // ... (other linear combination calculations remain the same)
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
