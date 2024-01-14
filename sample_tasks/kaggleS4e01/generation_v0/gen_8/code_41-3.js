/** // 0.7391575565779114 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geographyImpact = (Geography === 'Germany') ? 0.3 : 0;
    const genderImpact = (Gender === 'Female') ? 0.2 : 0;
    const tenureImpact = -0.05;
    const isActiveMemberImpact = -0.5;
    const balanceImpact = 0.000002;
    const ageImpact = 0.01;
    const creditScoreImpact = 0.0005;
  
    const weightedSum = 
        creditScoreImpact * CreditScore + 
        ageImpact * Age + 
        tenureImpact * Tenure + 
        isActiveMemberImpact * IsActiveMember + 
        balanceImpact * Balance +
        geographyImpact +
        genderImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
