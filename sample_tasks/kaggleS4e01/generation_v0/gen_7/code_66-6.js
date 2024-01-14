/** // 0.7136720932350519 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let churnProbability = 0.2; // Default value

    // Simplified logic to calculate churn probability based on input parameters
    churnProbability += (Age * 0.01) + (Tenure * 0.05) - (NumOfProducts * 0.1) - (HasCrCard * 0.2) - (IsActiveMember * 0.3);
    
    if (Geography === 'Germany') {
        churnProbability += 0.3;
    } else if (Geography === 'Spain') {
        churnProbability += 0.1;
    } else {
        churnProbability += 0.05;
    }

    if (Gender === 'Female') {
        churnProbability -= 0.1;
    }

    // Other parameter calculations and impacts could be added here

    return 1 / (1 + Math.exp(-churnProbability)); // Sigmoid function to convert to probability between 0 and 1
}
