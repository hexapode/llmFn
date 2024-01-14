/* Best score: 0.8091026307632014 */


    /* Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15642785, Surname=Chia, CreditScore=557, Geography=Germany, Gender=Male, Age=36.0, Tenure=4, Balance=153972.96, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=56767.38. */
    
    /** // 0.6003478454834082 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15642785, Surname=Chia, CreditScore=557, Geography=Germany, Gender=Male, Age=36.0, Tenure=4, Balance=153972.96, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=56767.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.12;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -1.00 : (Geography === 'Germany') ? 0.23 : -0.30;
    const genderWeight = (Gender === 'Female') ? 0.23 : -0.06;
    const tenureWeight = 0.00;
    const isActiveMemberWeight = -0.96;
    const multipliedWeights = -1.10;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights);

    const probability = 0.99 / (0.00 + Math.exp(-weightedSum));

    return probability;
}
