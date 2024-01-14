/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15730793, Surname=Fielding, CreditScore=536, Geography=Germany, Gender=Male, Age=34.0, Tenure=3, Balance=111589.33, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=27097.82.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain unchanged)
        NovelParameterImpact: 0.03,  // Impact of the novel combination parameter
        // ...
    };

    // ... (other variable calculations remain unchanged)

    let novelCombination = (CreditScore * 0.01) * (EstimatedSalary * 0.001);
    let novelCombinationImpact = novelCombination * coefficients.NovelParameterImpact;

    // ... (include novelCombinationImpact in the linear combination)

    let linearCombination = (
        // ... (other components remain unchanged)
        coefficients.NewParameterImpact * newParameter +
        // ... (other components remain unchanged)
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        novelCombinationImpact  // Include the impact of the novel combination
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
