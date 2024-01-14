/** // 0.40287755521960206 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15733768, Surname=Hou, CreditScore=600, Geography=France, Gender=Female, Age=32.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=199493.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree rules
    if (Geography === 'Germany') {
        if (Age < 30) {
            return 0.8; // High probability of churn
        } else {
            if (NumOfProducts > 1) {
                return 0.4; // Moderate probability of churn
            } else {
                return 0.1; // Low probability of churn
            }
        }
    } else if (Geography === 'France') {
        if (CreditScore < 600) {
            return 0.6; // Moderate probability of churn
        } else {
            return 0.2; // Low probability of churn
        }
    } else {
        return 0.5; // Average probability of churn
    }
}
