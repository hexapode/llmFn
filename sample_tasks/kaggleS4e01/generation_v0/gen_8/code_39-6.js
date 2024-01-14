/** // 0.5208533321868998 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15726557, Surname=Cameron, CreditScore=724, Geography=France, Gender=Male, Age=27.0, Tenure=7, Balance=124788.18, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=65612.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules
    if (Age <= 30 && NumOfProducts > 1) {
        return 0.3; // Low likelihood of churn
    } else if (CreditScore > 700 && Balance > 100000) {
        return 0.1; // Very low likelihood of churn
    } else {
        return 0.7; // High likelihood of churn
    }
}
