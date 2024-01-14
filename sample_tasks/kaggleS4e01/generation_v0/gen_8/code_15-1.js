/** // 0.5861175535432942 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15688865, Surname=De Luca, CreditScore=651, Geography=Spain, Gender=Male, Age=38.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=88840.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules and weights
    let probability = 0.0;
    
    if (Geography === 'Germany' && Age > 40 && Age < 60 && Balance > 100000) {
        probability = 0.95;
    } else if (CreditScore < 400 && NumOfProducts === 2 && IsActiveMember === 0) {
        probability = 0.75;
    } else if (Geography === 'Spain' && Age < 30 && NumOfProducts === 1 && HasCrCard === 1) {
        probability = 0.60;
    } else {
        probability = 0.25; // Default probability if no specific rule matches
    }

    return probability;
}
