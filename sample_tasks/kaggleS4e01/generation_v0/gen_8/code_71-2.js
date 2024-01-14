/** // 0.5823939582147185 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const balanceWeight = 0.05;
    const tenureWeight = 0.1;
    const geographyImpact = (Geography === 'Germany') ? 0.2 : (Geography === 'Spain') ? 0.1 : 0;
    const genderImpact = (Gender === 'Female') ? 0.1 : 0;
    const isActiveMemberImpact = (IsActiveMember === 1) ? -0.3 : 0;
    
    const weightedSum = (Balance * balanceWeight) + 
                       (Tenure * tenureWeight) + 
                       geographyImpact + 
                       genderImpact + 
                       isActiveMemberImpact;
    
    const probability = 1 / (1 + Math.exp(-weightedSum));
    
    return probability;
}
