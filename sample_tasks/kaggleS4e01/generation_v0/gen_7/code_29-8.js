/** // 0.5792951919792347 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15700946, Surname=Nnachetam, CreditScore=551, Geography=France, Gender=Male, Age=36.0, Tenure=7, Balance=120825.7, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=126796.69.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (same as before)
        NewCombinationImpact: 0.06, // New variable impact coefficient
    };
    
    // ... (same as before)

    // New variable combination
    let newCombination = (Age * Balance) + (CreditScore * NumOfProducts) - (Tenure * EstimatedSalary);
    let newCombinationImpact = coefficients.NewCombinationImpact * newCombination;

    let linearCombination = (
        // ... (same as before)
        + coefficients.NewCombinationImpact * newCombination
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
