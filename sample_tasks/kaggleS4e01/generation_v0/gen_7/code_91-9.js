/** // 0.3451965229916577 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15598088, Surname=Brown, CreditScore=801, Geography=France, Gender=Female, Age=39.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=172939.3.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'Germany') {
        if (NumOfProducts === 1) {
            if (Balance <= 75000) {
                return 0.9; // High probability of churning
            } else {
                return 0.1; // Low probability of churning
            }
        } else {
            return 0.3; // Moderate probability of churning
        }
    } else if (Geography === 'Spain') {
        if (IsActiveMember === 1) {
            return 0.2; // Low probability of churning
        } else {
            return 0.7; // High probability of churning
        }
    } else {
        if (Age <= 40) {
            return 0.4; // Moderate probability of churning
        } else {
            return 0.05; // Very low probability of churning
        }
    }
}
