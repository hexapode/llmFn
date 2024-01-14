/** // 0.6123791490186317 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 1 for: CustomerId=15671137, Surname=Sazonova, CreditScore=703, Geography=Spain, Gender=Male, Age=39.0, Tenure=9, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=131363.57.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    let probability = 0.00;

    // Decision tree rules
    if (Geography === 'Germany') {
        if (Age > 40 && CreditScore > 600 && EstimatedSalary > 100000) {
            probability = 0.80;
        } else {
            probability = 0.60;
        }
    } else if (Geography === 'Spain') {
        if (CreditScore > 650 && NumOfProducts === 1) {
            probability = 0.75;
        } else {
            probability = 0.40;
        }
    } else {
        if (IsActiveMember === 1 && Balance === 0) {
            probability = 0.20;
        } else {
            probability = 0.10;
        }
    }

    return probability;
}
