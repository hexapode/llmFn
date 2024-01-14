/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15777586, Surname=Chikere, CreditScore=496, Geography=Spain, Gender=Female, Age=35.0, Tenure=10, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=60907.32.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NewCombinationImpact: 0.12,  // New parameter impact coefficient
    };

    // ... (same as before)

    // New combination of variables
    let novelCombination = (Age * Tenure + CreditScore * 0.2) / Math.max(Balance, 1) * 2.5;
    let newCombinationImpact = novelCombination * coefficients.NewCombinationImpact;

    // ... (same as before)

    let linearCombination = (
        // ... (same as before)
        coefficients.NewCombinationImpact * newCombinationImpact +  // Include the new combination impact
        // ... (same as before)
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
