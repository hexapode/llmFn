/** // 0.6003478454834082 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15642785, Surname=Chia, CreditScore=557, Geography=Germany, Gender=Male, Age=36.0, Tenure=4, Balance=153972.96, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=56767.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.006;
    const ageWeight = 0.02;
    const balanceWeight = 0.00004;
    const geographyWeight = (Geography === 'France') ? 0.1 : (Geography === 'Germany') ? 0.12 : 0.08;
    const genderWeight = (Gender === 'Female') ? 0.12 : 0.05;
    const tenureWeight = -0.06;
    const isActiveMemberWeight = 0.15;
    const multipliedWeights = 0.002;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights);

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
