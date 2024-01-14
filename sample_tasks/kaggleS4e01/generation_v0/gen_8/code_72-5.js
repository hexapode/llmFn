/** // 0.47081838991826563 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15661821, Surname=Iadanza, CreditScore=738, Geography=France, Gender=Male, Age=41.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=166586.58.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Assign different weights to input parameters based on their importance
    const creditScoreWeight = 0.12;
    const ageWeight = 0.1;
    const geographyWeight = (Geography === 'France') ? -0.15 : (Geography === 'Germany') ? 0.2 : -0.1;
    const genderWeight = (Gender === 'Female') ? 0.1 : -0.05;
    const tenureWeight = -0.05;
    const balanceWeight = -0.08;
    const numOfProductsWeight = (NumOfProducts < 3) ? -0.2 : 0.15;
    const isActiveMemberWeight = -0.25;
    const estimatedSalaryWeight = 0.1;
    const churnThreshold = 0.5;  // Threshold to classify churn (>0.5) or stay (<=0.5)

    // Calculate the churn probability using if-else conditions
    let weightedSum = creditScoreWeight * CreditScore +
        ageWeight * Age +
        geographyWeight +
        genderWeight +
        tenureWeight * Tenure +
        balanceWeight * Balance +
        numOfProductsWeight * NumOfProducts +
        isActiveMemberWeight * IsActiveMember +
        estimatedSalaryWeight * EstimatedSalary;
    
    // Apply additional rules or conditions based on specific input parameter values
    if (HasCrCard === 0) {
        weightedSum += 0.1;
    }
    if (Surname === 'Iadanza') {
        weightedSum += 0.05;
    }

    // Apply non-linear transformation to the weighted sum for churn probability
    const probability = 1 / (1 + Math.exp(-weightedSum));

    // Return the churn probability
    return probability > churnThreshold ? 1 : 0;
}

console.log(PredictExited(15661821, 'Iadanza', 738, 'France', 'Male', 41.0, 7, 0.0, 2, 1.0, 1.0, 166586.58));
