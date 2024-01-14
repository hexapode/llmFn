/** // 0.6918229984921831 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15774551, Surname=Toscani, CreditScore=569, Geography=Germany, Gender=Female, Age=43.0, Tenure=9, Balance=127655.22, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=168816.03.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const creditScoreWeight = 0.0015;
    const ageWeight = 0.035;
    const balanceWeight = 0.00001;
    const geographyWeight = (Geography === 'France') ? -0.25 : (Geography === 'Germany') ? 0.65 : -0.35;
    const genderWeight = (Gender === 'Female') ? 0.45 : -0.1;
    const tenureWeight = -0.02;
    const isActiveMemberWeight = -1.2;
    const numOfProductsWeight = -1.5;
    const balanceTenureInteractionWeight = (Balance * Tenure * 0.000005);
    const estimatedSalaryWeight = 0.000001;
    
    const weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        (Balance * balanceWeight) +
        geographyWeight +
        genderWeight +
        (Tenure * tenureWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (NumOfProducts * numOfProductsWeight) +
        balanceTenureInteractionWeight +
        (HasCrCard * -0.2) +
        (EstimatedSalary * estimatedSalaryWeight) +
        (Surname.length * 0.005);
    
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}
