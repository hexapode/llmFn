/** // 0.49055901701378746 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15785830, Surname=Ch'eng, CreditScore=671, Geography=France, Gender=Male, Age=47.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=199376.52.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'France') {
        if (Age <= 40) {
            return 0.25;
        } else {
            if (CreditScore > 600 && NumOfProducts < 2) {
                return 0.1;
            } else {
                if (Balance > 100000) {
                    return 0.9;
                } else {
                    return 0.5;
                }
            }
        }
    } else if (Geography === 'Germany') {
        if (CreditScore > 700 && EstimatedSalary > 150000) {
            return 0.8;
        } else {
            return 0.3;
        }
    } else {
        if (Age < 45) {
            if (Balance < 50000) {
                return 0.4;
            } else {
                return 0.6;
            }
        } else {
            return 0.2;
        }
    }
}
