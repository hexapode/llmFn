/** // 0.4982244327345527 //**/
/**
Try to simplify the code, and remove some of the complexity.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let churnPrediction = 0;

    // Predict churn based on Age, NumOfProducts, IsActiveMember, and Geography
    if (Age > 40 && NumOfProducts > 1 && IsActiveMember === 0 && Geography === 'Germany') {
        churnPrediction = 0.8;
    } else {
        churnPrediction = 0.2;
    }

    return churnPrediction;
}
