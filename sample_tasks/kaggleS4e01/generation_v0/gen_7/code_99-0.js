/** // 0.40154009279876857 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15742269, Surname=Hsia, CreditScore=573, Geography=Spain, Gender=Male, Age=31.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=62390.54.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree model to predict customer churn
    if (Geography === 'Germany' || (Balance > 0 && Age > 30) || (CreditScore > 600 && NumOfProducts === 1) || (HasCrCard === 0 && EstimatedSalary < 80000)) {
        return 0; // Customer stays
    } else {
        return 1; // Customer churns
    }
}
