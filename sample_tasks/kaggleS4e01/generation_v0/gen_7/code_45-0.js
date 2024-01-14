/** // 0.47315545880905363 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15589147, Surname=Nkemakonam, CreditScore=683, Geography=Germany, Gender=Female, Age=37.0, Tenure=0, Balance=120530.13, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=170829.77.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    let probability = 0.00;
    
    // Decision tree rules based on input parameters
    if (Geography === 'Germany' && NumOfProducts === 1 && HasCrCard === 0 && IsActiveMember === 1) {
        probability = 0.85; // High probability of churn
    } else if (CreditScore > 650 && Age < 40 && Balance > 100000) {
        probability = 0.70; // Moderate probability of churn
    } else {
        probability = 0.15; // Low probability of churn
    }

    return probability;
}
