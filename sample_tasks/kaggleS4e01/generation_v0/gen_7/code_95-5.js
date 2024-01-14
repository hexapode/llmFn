/** // 0.5834004859527395 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15789941, Surname=Pisano, CreditScore=646, Geography=Spain, Gender=Male, Age=37.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=40889.14.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree model
    let probability = 0.00;
    if (Geography === 'Germany') {
        if (Age < 40 && NumOfProducts === 1) {
            probability = 0.15;
        } else {
            probability = 0.35;
        }
    } else if (Geography === 'Spain') {
        if (CreditScore < 650) {
            probability = 0.42;
        } else {
            probability = 0.28;
        }
    } else {
        if (Balance > 0 && IsActiveMember === 1) {
            probability = 0.09;
        } else {
            probability = 0.23;
        }
    }

    return probability;
}
