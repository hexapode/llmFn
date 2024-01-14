/** // 0.504902928849258 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15645316, Surname=Maclean, CreditScore=622, Geography=Germany, Gender=Male, Age=41.0, Tenure=2, Balance=127843.48, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=180829.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let probability = 0;

    // Decision tree rules based on input parameters
    if (Geography === 'Germany' && Age > 40 && IsActiveMember === 0) {
        probability = 0.9;
    } else if (CreditScore < 500 || Balance < 0 || NumOfProducts > 3) {
        probability = 0.8;
    } else if (HasCrCard === 0 && EstimatedSalary < 100000) {
        probability = 0.7;
    } else {
        probability = 0.2;
    }

    return probability;
}
