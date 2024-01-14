/** // 0.5246574369959425 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15661053, Surname=Y?an, CreditScore=813, Geography=Germany, Gender=Male, Age=27.0, Tenure=3, Balance=139959.01, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=155830.53.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'Germany') {
        if (EstimatedSalary <= 155830.53) {
            return 0; // Customer is likely to stay
        } else {
            return 1; // Customer is likely to churn
        }
    } else {
        if (CreditScore > 700) {
            return 0; // Customer is likely to stay
        } else {
            if (Age <= 27 && Balance > 100000) {
                return 1; // Customer is likely to churn
            } else {
                return 0; // Customer is likely to stay
            }
        }
    }
}
