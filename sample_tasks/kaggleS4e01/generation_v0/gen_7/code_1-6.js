/** // 0.5762281124215922 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15789097, Surname=Keeley, CreditScore=644, Geography=France, Gender=Male, Age=48.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=44965.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree thresholds
    const ageThreshold = 40;
    const creditScoreThreshold = 600;
    const balanceThreshold = 10000;
    const tenureThreshold = 5;
    
    let probability = 0;
    
    // Decision tree
    if (Age <= ageThreshold) {
        if (CreditScore <= creditScoreThreshold) {
            probability = 0.8; // High probability of churn
        } else {
            if (Balance > balanceThreshold) {
                probability = 0.4; // Medium probability of churn
            } else {
                probability = 0.1; // Low probability of churn
            }
        }
    } else {
        if (Tenure <= tenureThreshold) {
            probability = 0.6; // Medium probability of churn
        } else {
            probability = 0.2; // Low probability of churn
        }
    }
    
    return probability;
}
