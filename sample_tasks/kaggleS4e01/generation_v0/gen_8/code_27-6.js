/** // 0.5351726685468725 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15761950, Surname=Ts'ai, CreditScore=572, Geography=France, Gender=Female, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=187841.86.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let probability = 0;
    
    // Apply decision tree rules based on input parameters
    if (Geography === 'Germany' || (Geography === 'France' && Age > 30 && Age < 50)) {
        probability = 0.7;
    } else if (CreditScore < 600 || Balance > 100000) {
        probability = 0.5;
    } else {
        probability = 0.3;
    }
    
    // Adjust the probability based on other input parameters
    if (HasCrCard === 1 && IsActiveMember === 0) {
        probability -= 0.2;
    }
    
    return probability;
}
