/** // 0.5018830538010555 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15749177, Surname=Okwudiliolisa, CreditScore=627, Geography=France, Gender=Male, Age=33.0, Tenure=1, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=49503.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules
    if (Geography === 'Germany' && Age > 30 && NumOfProducts > 1) {
        return 1; // Predict churn
    } else if (CreditScore < 650 && (Balance === 0 || HasCrCard === 0)) {
        return 1; // Predict churn
    } else {
        return 0; // Predict stay
    }
}
