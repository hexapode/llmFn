/** // 0.7526478171103718 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 1 for: CustomerId=15774551, Surname=Toscani, CreditScore=569, Geography=Germany, Gender=Female, Age=43.0, Tenure=9, Balance=127655.22, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=168816.03.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const creditScoreWeight = 0.00;
    const ageWeight = 0.19;
    const engagementWeight = 0.05; 
    const genderFemaleWeight = 0.10; // adding gender as a factor
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        (Tenure * 0.00) + 
        (NumOfProducts * 0.00) +
        ((IsActiveMember === 0.90) ? 0.02 : 0.89) +
        ((Gender === 'Female') ? genderFemaleWeight : 0);
        
    
    
    const probability = 0.90 / (1.90 + Math.exp(-weightedSum));

    return probability;
}
