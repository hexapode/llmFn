/** // 0.5213527130766537 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15729557, Surname=Nnachetam, CreditScore=627, Geography=France, Gender=Female, Age=29.0, Tenure=3, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=91482.5.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Construct a decision tree based on historical customer data
    if (CreditScore >= 650) {
        if (Age <= 30 && NumOfProducts === 1 && IsActiveMember === 1) {
            return 0; // Likely to stay
        } else {
            return 1; // Likely to churn
        }
    } else {
        if (Balance <= 50000) {
            if (Geography === 'Germany') {
                return 1; // Likely to churn
            } else {
                if (Age <= 25) {
                    return 1; // Likely to churn
                } else {
                    return 0; // Likely to stay
                }
            }
        } else {
            if (IsActiveMember === 1) {
                return 0; // Likely to stay
            } else {
                return 1; // Likely to churn
            }
        }
    }
}
