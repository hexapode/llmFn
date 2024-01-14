/** // 0.8210484557136629 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15671299, Surname=Okwuoma, CreditScore=548, Geography=France, Gender=Male, Age=36.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=182765.0.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.00;
    const ageWeight = 0.06;
    const balanceWeight = 0.00;
    const geographyWeight = (Geography === 'France') ? -0.22 : (Geography === 'Germany') ? 0.54 : -0.20;
    const genderWeight = (Gender === 'Female') ? 0.42 : -0.11;
    const tenureWeight = -0.01;
    const isActiveMemberWeight = -0.91;
    const multipliedWeights = -1.50;
    const ageNumProductsInteractionWeight = 0.02;
    const hasCrCardWeight = -0.13;
    const estimatedSalaryWeight = 0.0000004; // Adding EstimatedSalary as an extra factor
    
    const interactionFactor = Age * NumOfProducts * ageNumProductsInteractionWeight;
    
    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * multipliedWeights) +
        interactionFactor +
        (HasCrCard * hasCrCardWeight) +
        (EstimatedSalary * estimatedSalaryWeight); // Adding EstimatedSalary as an extra factor

    const probability = 9887.90 / (-13.31 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15671299, 'Okwuoma', 548, 'France', 'Male', 36.0, 10, 0.0, 2, 1.0, 0.0, 182765.0));
