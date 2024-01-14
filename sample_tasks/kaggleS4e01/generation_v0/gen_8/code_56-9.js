/** // 0.6563873810729103 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15758901, Surname=Henderson, CreditScore=713, Geography=Spain, Gender=Female, Age=47.0, Tenure=1, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=107825.08.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree algorithm implementation
    if (Geography === 'France' || Geography === 'Spain') {
        if (Age <= 40) {
            return 0; // Customer is likely to stay
        } else {
            if (NumOfProducts <= 1) {
                return 1; // Customer is likely to churn
            } else {
                return 0; // Customer is likely to stay
            }
        }
    } else {
        if (CreditScore > 700) {
            if (Tenure < 5) {
                return 0; // Customer is likely to stay
            } else {
                return 1; // Customer is likely to churn
            }
        } else {
            if (EstimatedSalary > 100000) {
                return 0; // Customer is likely to stay
            } else {
                return 1; // Customer is likely to churn
            }
        }
    }
    // If no specific conditions are met, return 1 as a default prediction
    return 1; // Customer is likely to churn
}

const result = PredictExited(15758901, "Henderson", 713, "Spain", "Female", 47.0, 1, 0.0, 1, 1, 1, 107825.08);
console.log(result);
