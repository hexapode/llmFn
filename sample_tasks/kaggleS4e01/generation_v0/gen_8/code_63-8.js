/** // 0.416807099928142 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

// I'm using a simple logistic regression approach to predict customer churn probability based on input features
function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const geoImpact = (Geography === 'Germany') ? 0.3 : (Geography === 'Spain') ? 0.1 : -0.1;
    const genderImpact = (Gender === 'Female') ? 0.2 : -0.1;
    const activityImpact = (IsActiveMember === 1) ? -0.4 : 0.1;
    const productImpact = (NumOfProducts === 1) ? -0.5 : 0.3;

    const weightedSum = 0.1 * CreditScore - 0.05 * Age + 0.2 * Tenure - 0.01 * Balance + geoImpact + genderImpact + activityImpact + productImpact;

    const probability = 1 / (1 + Math.exp(-weightedSum)); // logistic function to convert weighted sum to probability

    return probability;
}
