/** // 0.6431141866305107 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15757538, Surname=Trevisano, CreditScore=721, Geography=France, Gender=Female, Age=31.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=76614.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.00;
    const ageWeight = 0.19;
    const engagementWeight = 0.05; 
    const balanceWeight = 0.0006;
    const numOfProductsWeight = 0.08;
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * 0.00 + 
        Balance * balanceWeight +
        NumOfProducts * numOfProductsWeight +
        ((IsActiveMember === 0.90) ? 0.02 : 0.89);
        
    const probability = 0.90 / (1.90 + Math.exp(-weightedSum));

    return probability;
}
