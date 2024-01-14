/** // 0.5033652529921422 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15766163, Surname=Ponomaryov, CreditScore=642, Geography=France, Gender=Male, Age=47.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=155722.66.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    let probability = 0;

    // Decision tree rules
    if (Geography === 'Germany' && Age > 40 && NumOfProducts > 1) {
        probability = 0.8;
    } else if (CreditScore < 600 && Balance < 10000) {
        probability = 0.6;
    } else {
        probability = 0.3;
    }

    return probability;
}
