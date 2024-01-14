/** // 0.5080313279190131 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15792064, Surname=Ts'ui, CreditScore=709, Geography=France, Gender=Female, Age=25.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=140941.47.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree model to predict churn (0 for stay, 1 for churn)
    let prediction = 0;

    // Implement decision tree to categorize input data and make prediction
    if (Geography === 'Germany') {
        if (Age <= 30 && EstimatedSalary > 100000) {
            prediction = 1;
        } else {
            if (NumOfProducts === 1 && Balance > 50000) {
                prediction = 1;
            } else {
                if (CreditScore < 600) {
                    prediction = 1;
                }
            }
        }
    } else if (Geography === 'France') {
        if (Age <= 25 && IsActiveMember === 1) {
            prediction = 1;
        } else {
            if (NumOfProducts === 2 && EstimatedSalary > 120000) {
                prediction = 1;
            } else {
                if (CreditScore < 700 && Tenure < 3) {
                    prediction = 1;
                }
            }
        }
    } else if (Geography === 'Spain') {
        if (Age <= 28 && NumOfProducts > 2) {
            prediction = 1;
        } else {
            if (IsActiveMember === 0 && Tenure > 5) {
                prediction = 1;
            } else {
                if (CreditScore < 650) {
                    prediction = 1;
                }
            }
        }
    }

    return prediction;
}
