/** // 0.7525366381900028 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15633608, Surname=Walker, CreditScore=639, Geography=France, Gender=Female, Age=38.0, Tenure=6, Balance=137843.8, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=172557.77.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.00;
    const ageWeight = 0.19;
    const engagementWeight = 0.05;
    const balanceImpact = 0.00000005;  // Adjust this value to fine-tune the impact of balance
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        (Tenure * 0.00) + 
        (NumOfProducts * 0.00) +
        ((IsActiveMember === 0.90) ? 0.02 : 0.89) +
        (Balance * balanceImpact);
    
    const probability = 0.90 / (1.90 + Math.exp(-weightedSum));

    return probability;
}
