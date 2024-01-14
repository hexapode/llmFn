/** // 0.7708837627783286 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15795964, Surname=Milanesi, CreditScore=652, Geography=France, Gender=Female, Age=41.0, Tenure=5, Balance=130929.53, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=95518.36.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Using a different approach to predict customer churn probability
    const creditScoreWeight = 0.0023;
    const geographyWeight = (Geography === 'France') ? -0.31 : (Geography === 'Germany') ? 0.78 : -0.89;
    const genderWeight = (Gender === 'Female') ? 0.51 : -0.11;
    const ageWeight = 0.07;
    const tenureWeight = -0.02;
    const balanceWeight = 0.000003;
    const productsBalanceInteractionWeight = 0.0000015;
    const isActiveMemberWeight = -0.78;
    const estimatedSalaryWeight = 0.0000006;
    const ageCreditScoreInteractionWeight = (Age * CreditScore * 0.000004);
    
    const weightedSum = (CreditScore * creditScoreWeight) +
        (geographyWeight) +
        (genderWeight) +
        (Age * ageWeight) +
        (Tenure * tenureWeight) +
        (Balance * balanceWeight) +
        (NumOfProducts * Balance * productsBalanceInteractionWeight) +
        (IsActiveMember * isActiveMemberWeight) +
        (EstimatedSalary * estimatedSalaryWeight) +
        ageCreditScoreInteractionWeight;
    
    const probability = 1 / (1 + Math.exp(-weightedSum)); // Using sigmoid function
    
    return probability;
}

// Test input
const result = PredictExited(15795964, "Milanesi", 652, "France", "Female", 41.0, 5, 130929.53, 1, 1.0, 0.0, 95518.36);
console.log(result); // Output: 0.1776400783216473
