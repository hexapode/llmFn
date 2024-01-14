/** // 0.4997350892799773 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15576550, Surname=Nwokeocha, CreditScore=769, Geography=Spain, Gender=Male, Age=46.0, Tenure=6, Balance=0.0, NumOfProducts=3, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=177614.17.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    if (Geography === 'France') {
        if (NumOfProducts < 2) {
            return 0; // Not likely to churn
        } else {
            if (Balance === 0 && EstimatedSalary > 100000) {
                return 0; // Not likely to churn
            } else {
                if (Age > 40) {
                    return 1; // Likely to churn
                } else {
                    return 0; // Not likely to churn
                }
            }
        }
    } else if (Geography === 'Germany') {
        if (CreditScore > 700) {
            return 0; // Not likely to churn
        } else {
            if (IsActiveMember === 0) {
                return 1; // Likely to churn
            } else {
                if (NumOfProducts > 2) {
                    return 1; // Likely to churn
                } else {
                    return 0; // Not likely to churn
                }
            }
        }
    } else if (Geography === 'Spain') {
        if (Balance === 0) {
            return 0; // Not likely to churn
        } else {
            if (HasCrCard === 0) {
                return 1; // Likely to churn
            } else {
                if (Age > 45 && NumOfProducts === 3) {
                    return 1; // Likely to churn
                } else {
                    return 0; // Not likely to churn
                }
            }
        }
    } else {
        return 0;
    }
}

console.log(PredictExited(15576550, 'Nwokeocha', 769, 'Spain', 'Male', 46.0, 6, 0.0, 3, 1.0, 0.0, 177614.17));
