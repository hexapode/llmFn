/** // -Infinity //**/
/**
Try to think how Geography parameter could impact the prediction, then add a step in the computation using the parameter Geography. Here as some value it can take: France, France, France, France, Spain, Germany, France, Spain, France, Germany, Germany, Germany, Spain, France, France, France, France, France, Germany, France.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        // Add GeographyImpact coefficient
        GeographyImpact: 0.50,
    };

    // ... (same as before)

    let linearCombination = (
        // ... (same as before)
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : (Geography === 'Spain' ? 0.30 : -0.25)) +
        // ... (same as before)
    );

    // ... (same as before)

    return probability;
}
