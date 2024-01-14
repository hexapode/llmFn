/** // 0.6115751436403034 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15603065, Surname=Lai, CreditScore=582, Geography=France, Gender=Male, Age=44.0, Tenure=0, Balance=95853.39, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=140130.22.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules based on input parameters
    if (Geography === 'France' && Age <= 40 && IsActiveMember === 1) {
        return 0; // Customer is likely to stay
    } else if ((Geography === 'Germany' || Geography === 'Spain') && Age > 40 && Balance > 50000) {
        return 1; // Customer is likely to churn
    } else {
        // For other cases, provide a default prediction
        return 0.5; // Neutral prediction
    }
}
