/** // 0.5035733083166926 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15711378, Surname=Willis, CreditScore=705, Geography=Germany, Gender=Male, Age=38.0, Tenure=4, Balance=96709.07, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=163484.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Decision tree rules
    let probability = 0.00;
    if (CreditScore <= 720 && NumOfProducts <= 2) {
        probability = 0.30;
    } else if (Geography === 'Germany' && Age <= 40) {
        probability = 0.20;
    } else if (Balance > 50000 && EstimatedSalary > 100000) {
        probability = 0.50;
    } else {
        probability = 0.10;
    }

    return probability;
}
