/** // 0.6024239657543929 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15604345, Surname=Palerma, CreditScore=678, Geography=France, Gender=Male, Age=34.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=174032.0.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        NovelCombinationImpact: 0.05,  
    };

    // ... (existing variable calculations)

    // New step with novel combination of variables
    let novelCombination = (Age * Balance - NumOfProducts * EstimatedSalary + HasCrCard * 1000) / (Tenure + 1);
    
    let linearCombination = (
        // ... (existing linear combination)
        coefficients.NovelCombinationImpact * novelCombination // Include the impact of the novel combination
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
