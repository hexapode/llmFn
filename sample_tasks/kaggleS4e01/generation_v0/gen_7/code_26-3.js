/** // 0.4982638811893148 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15648876, Surname=Sandover, CreditScore=501, Geography=Spain, Gender=Female, Age=34.0, Tenure=5, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=27380.99.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules based on the analysis
    if (IsActiveMember === 0) {
        return 0.8; // High likelihood of churn for inactive members
    }

    if (Geography === 'Germany' && Age > 30 && NumOfProducts > 1) {
        return 0.6; // Moderate likelihood of churn for specific conditions
    }

    if (CreditScore < 600 && Geography === 'Spain') {
        return 0.9; // High likelihood of churn for low credit score in Spain
    }

    // Default case if none of the rules match
    return 0.3; // Default likelihood of churn

}
