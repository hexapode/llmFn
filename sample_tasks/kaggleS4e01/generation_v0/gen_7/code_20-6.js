/** // 0.5489595855703382 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15803976, Surname=Ball, CreditScore=703, Geography=France, Gender=Female, Age=47.0, Tenure=3, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=77294.56.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        NovelCombinationImpact: 0.03,  // Impact of the novel combination
    };

    // ... (existing computations)

    let novelCombination = (NumOfProducts * Age) / (1 + HasCrCard * IsActiveMember); // Sample novel combination

    let linearCombination = (
        // ... (existing linear combination)
        + coefficients.NovelCombinationImpact * novelCombination  // Incorporate the novel combination
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));
    
    return probability;
}
