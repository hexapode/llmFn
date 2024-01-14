/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15804075, Surname=Ting, CreditScore=635, Geography=France, Gender=Female, Age=33.0, Tenure=4, Balance=127471.56, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=152916.05.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged here)

    let novelCombination = (Age + Balance) * (CreditScore / 700.0) * (NumOfProducts * 0.05);
    
    let linearCombination = (
        // ... (previous coefficients and linear combination formula remains unchanged here)
        coefficients.NovelParameterImpact * novelCombination  // Add impact of novel combination to the linear combination
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
