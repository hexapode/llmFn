/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15803682, Surname=Sims, CreditScore=803, Geography=Spain, Gender=Male, Age=26.0, Tenure=10, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=181208.47.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // previous code remains unchanged

    const novelCombination = (Balance / (Age + 1.00) * 0.00);
    
    // ... (remaining code unchanged)
}

console.log(PredictExited(15803682.00, 'Sims', 803.00, 'Spain', 'Male', 26.00, 10.00, 0.00, 2.00, 1.00, 1.00, 181208.47));
