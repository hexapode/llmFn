/** // 0.5985620449840763 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 1 for: CustomerId=15783501, Surname=Tsao, CreditScore=581, Geography=France, Gender=Female, Age=52.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=97930.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = -0.0009;
    const ageWeight = 0.0751;
    const balanceWeight = 0.0074;
    const geographyWeight = (Geography === 'France') ? -0.1045 : (Geography === 'Germany') ? 0.1041 : -0.0492;
    const genderWeight = (Gender === 'Female') ? 0.5429 : -0.2566;
    const tenureWeight = -0.7470;
    const isActiveMemberWeight = -0.8909;
    const hasCrCardWeight = -0.6735;
    const estimatedSalaryWeight = 0.0001;
    const unusedParameterImpact = Math.abs(HasCrCard - IsActiveMember) * 0.9196; // Impact from the unused parameters

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight) +
        unusedParameterImpact; // Including the impact from the unused parameters

    const probability = 1 / (1 + Math.exp(-weightedSum));
    return probability;
}

const result = PredictExited(15783501.00, "Tsao", 581.00, "France", "Female", 52.00, 4.00, 0.00, 1.00, 1.00, 0.00, 97930.96);
console.log(result);
