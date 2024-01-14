/** // 0.4982244327345527 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15655123, Surname=Dellucci, CreditScore=545, Geography=France, Gender=Male, Age=29.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=134878.34.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.1;
    const ageWeight = 0.2;
    const engagementWeight = 0.15; // New weight for engagement factor
    
    // Other weights and factors remain the same as the previous function
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        (Tenure * 0.08) + 
        (NumOfProducts * 0.1) +
        ((IsActiveMember === 1) ? 0.12 : 0);
        
    // Rest of the calculation remains the same
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
