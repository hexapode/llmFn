/** // 0.6940029912647953 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15678626, Surname=Okonkwo, CreditScore=797, Geography=Spain, Gender=Female, Age=55.0, Tenure=0, Balance=99208.46, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=62402.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.01;
    const ageWeight = 0.05;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.23 : (Geography === 'Germany') ? 0.56 : -0.20;
    const genderWeight = (Gender === 'Female') ? 0.40 : -0.10;
    const tenureWeight = -0.02;
    const hasCrCardWeight = -0.69;
    const multipliedWeights = -1.55;
    const estimatedSalaryWeight = 0.000001;

    const balanceAgeInteraction = Balance * Age * 0.000001;
    const isActiveEstimatedSalaryInteraction = IsActiveMember * EstimatedSalary * 0.000000001;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (HasCrCard * hasCrCardWeight) +
        (NumOfProducts * multipliedWeights) +
        (estimatedSalaryWeight * EstimatedSalary) +
        balanceAgeInteraction +
        isActiveEstimatedSalaryInteraction;

    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15678626.00, 'Okonkwo', 797.00, 'Spain', 'Female', 55.00, 0.00, 99208.46, 2.00, 0.00, 1.00, 62402.38)); 
