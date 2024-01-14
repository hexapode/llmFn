/** // 0.48947075325543415 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15643330, Surname=Woods, CreditScore=637, Geography=France, Gender=Female, Age=29.0, Tenure=4, Balance=105239.1, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=19700.24.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let prediction = 0;

    // Decision tree logic
    if (Geography === 'Germany') {
        if (Age > 30 && NumOfProducts > 1) {
            prediction = 1; // High likelihood of churn
        } else {
            if (CreditScore < 600 || Balance < 0) {
                prediction = 1; // High likelihood of churn
            } else {
                if (EstimatedSalary < 40000) {
                    prediction = 1; // High likelihood of churn
                } else {
                    prediction = 0; // Low likelihood of churn
                }
            }
        }
    } else if (Geography === 'Spain') {
        if (Age > 25 && NumOfProducts > 2) {
            prediction = 1; // High likelihood of churn
        } else {
            if (CreditScore < 550 || Balance < 0) {
                prediction = 1; // High likelihood of churn
            } else {
                prediction = 0; // Low likelihood of churn
            }
        }
    } else {
        if (Age > 35 && NumOfProducts > 1) {
            prediction = 1; // High likelihood of churn
        } else {
            prediction = 0; // Low likelihood of churn
        }
    }

    return prediction;
}
