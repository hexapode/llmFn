/** // 0.6178773774571312 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15622494, Surname=Mazzanti, CreditScore=718, Geography=France, Gender=Male, Age=27.0, Tenure=2, Balance=0.0, NumOfProducts=3, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=26229.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Implement decision tree rules to predict customer churn
    if (Geography === 'Germany' && Age > 30) {
        return 0.8; // High likelihood of churn
    } else if (NumOfProducts > 2 && Balance === 0) {
        return 0.6; // Moderate likelihood of churn
    } else if (CreditScore < 600 || EstimatedSalary < 30000) {
        return 0.4; // Low likelihood of churn
    } else {
        return 0.1; // Very low likelihood of churn
    }
}
