/** // 0.700012453110456 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15703037, Surname=Yobanna, CreditScore=582, Geography=France, Gender=Male, Age=34.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=96546.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Calculate the impact of various factors in customer churn prediction
    const creditScoreImpact = CreditScore * 0.0001;
    const ageImpact = Age * 0.002;
    const balanceImpact = Balance * 0.000001;
    const geographyImpact = (Geography === 'France') ? -0.1 : (Geography === 'Germany') ? 0.2 : -0.3;
    const genderImpact = (Gender === 'Female') ? 0.1 : -0.1;
    const tenureImpact = Tenure * (-0.02);
    const numOfProductsImpact = NumOfProducts * 0.02;
    const hasCrCardImpact = HasCrCard * (-0.1);
    const isActiveMemberImpact = IsActiveMember * (-0.2);
    const estimatedSalaryImpact = EstimatedSalary * 0.0000001;

    // Combine the impacts with a linear combination
    const weightedSum = creditScoreImpact + ageImpact + balanceImpact + geographyImpact + genderImpact + tenureImpact + numOfProductsImpact + hasCrCardImpact + isActiveMemberImpact + estimatedSalaryImpact;

    // Apply a sigmoid function to get the final probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    return probability;
}

// Test the function with the provided sample input
console.log(PredictExited(15703037, 'Yobanna', 582, 'France', 'Male', 34.0, 8, 0.0, 2, 1, 0.0, 96546.57)); // Output should be close to 0

