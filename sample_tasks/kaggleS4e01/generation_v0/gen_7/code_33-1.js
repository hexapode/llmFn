/** // 0.5928652174408404 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15624451, Surname=Onwumelu, CreditScore=619, Geography=Germany, Gender=Female, Age=36.0, Tenure=8, Balance=115557.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=172618.52.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Construct the decision tree based on the dataset and define the decision rules

    // Decision tree rules (pseudocode)
    if (Geography === 'Germany') {
        if (Age <= 40 && Balance > 100000) {
            return 0.7; // High probability of churn
        } else {
            if (CreditScore > 600) {
                return 0.3; // Moderate probability of churn
            } else {
                return 0.1; // Low probability of churn
            }
        }
    } else {
        if (IsActiveMember === 1) {
            return 0.2; // Moderate probability of churn
        } else {
            return 0.05; // Low probability of churn
        }
    }

    // Additional decision rules based on other features

    return 0.15; // Default probability
}
