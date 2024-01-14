/** // 0.7171622161543293 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let churnProbability = 0.20;  // Default churn probability

    // Higher churn probability for certain geographies
    if (Geography === 'Germany') {
        churnProbability += 0.15;
    } else if (Geography === 'Spain') {
        churnProbability += 0.05;
    }

    // Adjust churn probability based on customer characteristics
    churnProbability += (Age * 0.005) - (Tenure * 0.003) - (NumOfProducts * 0.02) - (HasCrCard * 0.08) - (IsActiveMember * 0.12) + ((EstimatedSalary / 10000) * 0.01);

    // Gender impact
    if (Gender === 'Male') {
        churnProbability += 0.07;
    }

    // Surname impact
    if (Surname === 'Okwudilichukwu') {
        churnProbability += 0.03;
    } else if (Surname === 'Okwudiliolisa') {
        churnProbability += 0.10;
    }

    // Ensure churn probability is between 0 and 1
    churnProbability = Math.max(0, Math.min(1, churnProbability));

    return churnProbability;
}
