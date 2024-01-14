/** // 0.4982244327345527 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15803827, Surname=Hsieh, CreditScore=752, Geography=Spain, Gender=Male, Age=39.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=65902.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules based on input variables
    if (CreditScore > 700 && Geography === 'Spain' && Gender === 'Male' && Age < 40 && NumOfProducts > 1 && IsActiveMember === 1) {
        return 0; // Customer is likely to stay
    } else {
        return 1; // Customer is likely to churn
    }
}
