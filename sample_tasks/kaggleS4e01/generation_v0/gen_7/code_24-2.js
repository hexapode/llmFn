/** // 0.59815432687868 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15682070, Surname=Chien, CreditScore=544, Geography=Spain, Gender=Male, Age=37.0, Tenure=2, Balance=104485.24, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=129964.85.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
  
    // Decision tree rules
    if (Geography === 'Germany' && (CreditScore < 400 || (Balance > 100000 && Age > 30))) {
        return 0.9;  // High likelihood of churn
    } else if (NumOfProducts === 1 && Age < 40 && EstimatedSalary < 100000) {
        return 0.3;  // Moderate likelihood of churn
    } else if (IsActiveMember === 0 && (Balance < 50000 || Age > 50)) {
        return 0.6;  // Moderate likelihood of churn
    } else {
        return 0.1;  // Low likelihood of churn
    }
}
