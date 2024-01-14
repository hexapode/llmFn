/** // 0.5351297823470517 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15588854, Surname=Wang, CreditScore=715, Geography=France, Gender=Female, Age=25.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=30380.12.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Define thresholds for specific features
    const ageThreshold = 40;
    const creditScoreThreshold = 600;
    const balanceThreshold = 100000;
    
    let prediction = 0; // Default prediction
    
    // Apply if-else conditions based on feature thresholds
    if (Geography === 'Germany' && Age > ageThreshold && NumOfProducts > 1) {
        prediction = 1;
    } else if (CreditScore < creditScoreThreshold && Balance > balanceThreshold) {
        prediction = 1;
    } else if (IsActiveMember === 0 && Age > 25) {
        prediction = 1;
    }
    
    return prediction;
}
