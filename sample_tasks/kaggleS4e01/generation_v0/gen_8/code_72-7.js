/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15771477, Surname=Arnold, CreditScore=590, Geography=France, Gender=Male, Age=32.0, Tenure=6, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=97416.34.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // existing code remains the same

    const novelCombination = (Balance / (Age + 1.00) * 0.05); // Adding novel combination of variables

    // existing code remains the same

    return probability;
}

console.log(PredictExited(15771477, 'Arnold', 590, 'France', 'Male', 32.0, 6, 0.0, 2, 0.0, 0.0, 97416.34));
