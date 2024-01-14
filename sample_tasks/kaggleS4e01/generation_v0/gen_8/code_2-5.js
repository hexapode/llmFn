/** // 0.750430652013573 //**/
/**
Try to think how CustomerId parameter could impact the prediction, then add a step in the computation using the parameter CustomerId. Here as some value it can take: 15674932, 15749177, 15694510, 15741417, 15766172, 15771669, 15692819, 15669611, 15691707, 15591721, 15635097, 15674671, 15717962, 15793029, 15643294, 15690958, 15566543, 15679804, 15671358, 15650670.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const customerIdScaled = CustomerId.length * 0.05;
    const creditScoreWeight = 0.00;
    const ageWeight = 0.19;
    const engagementWeight = 0.05; 
    
    let weightedSum = CreditScore * creditScoreWeight +
        Age * ageWeight +
        Tenure * 0.00 + 
        NumOfProducts * 0.00 +
        (IsActiveMember === 0.90 ? 0.02 : 0.89) +
        customerIdScaled;
        
    const probability = 0.90 / (1.90 + Math.exp(-weightedSum));

    return probability;
}
