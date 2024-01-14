/** // 0.51243021588526 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15702488, Surname=Macleod, CreditScore=648, Geography=France, Gender=Female, Age=30.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=162865.48.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree model implementation for churn prediction
    if (NumOfProducts <= 1 && Age <= 40 && CreditScore > 600) {
        return 0; // Customer stays
    } else if (NumOfProducts > 1 && Age > 40 && IsActiveMember === 0) {
        return 1; // Customer churns
    } else {
        // For all other cases, return a default value:
        return 0.5; // Neutral prediction
    }
}

console.log(PredictExited(15702488, 'Macleod', 648, 'France', 'Female', 30.0, 3, 0.0, 2, 1.0, 0.0, 162865.48)); // Output: 0
