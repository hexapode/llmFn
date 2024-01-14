/** // 0.5198438623377574 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15777772, Surname=Yermakov, CreditScore=717, Geography=Germany, Gender=Male, Age=25.0, Tenure=9, Balance=73212.03, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=113499.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Implementing a decision tree algorithm here
    if (Geography === 'Germany' && NumOfProducts <= 3 && IsActiveMember === 0) {
        return 0.9; // High probability of churn
    } else if (CreditScore <= 600 && Age > 30 && Balance > 100000) {
        return 0.8; // High probability of churn
    } else if (Age <= 25 && EstimatedSalary > 100000) {
        return 0.7; // Moderate probability of churn
    } else {
        return 0.1; // Low probability of churn
    }
}
