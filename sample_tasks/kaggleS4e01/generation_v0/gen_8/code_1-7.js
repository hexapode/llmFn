/** // 0.42883228286858677 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15589380, Surname=Ch'ien, CreditScore=758, Geography=France, Gender=Male, Age=35.0, Tenure=9, Balance=81829.42, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=199390.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Rules based on input parameters
    if (Geography === 'France' && Age <= 35 && Balance > 80000) {
        return 1; // Predict churn
    }

    if (CreditScore < 600 && NumOfProducts >= 2) {
        return 1; // Predict churn
    }

    if (Geography === 'Germany' && Age > 40 && HasCrCard === 1 && IsActiveMember === 0) {
        return 1; // Predict churn
    }

    // Default prediction
    return 0; // Predict stay
}
