/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15604762, Surname=Yobachi, CreditScore=703, Geography=France, Gender=Male, Age=37.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=53954.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.37;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.04;
    } else {
        geographyImpact = -2.19;
    }

    // New parameter representing the interaction between age and geography impact
    let ageGeographyInteraction = Age * (geographyImpact / 10.0);

    // ... (previous code)

    let linearCombination = (
        // ... (previous coefficients)
        coefficients.GeographyImpact * geographyImpact +
        // ... (other coefficients)
        coefficients.ExtraParameterImpact * (Age * 0.21) +
        ageGeographyInteraction  // Include the new parameter in the linear combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
