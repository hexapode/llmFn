/** // 0.5103760148704585 //**/
/**
Try to think outside the box, and find novel a way to solve the problem. First describe it and why you think it make sense, then update the function to implement it. here is a sample input for reference:
The result is 0 for: CustomerId=15615030, Surname=Onyemere, CreditScore=777, Geography=Spain, Gender=Male, Age=33.0, Tenure=5, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=64590.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // Decision tree-like rules
    if (Geography === 'France' && Age <= 30 && Balance > 0) {
        return 0.2;
    } else if (Geography === 'Germany' && NumOfProducts === 1 && HasCrCard === 1) {
        return 0.1;
    } else if (Age > 50 && IsActiveMember === 0) {
        return 0.7;
    } else {
        return 0.5;
    }
}
