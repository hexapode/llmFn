/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15570043, Surname=Tretiakova, CreditScore=613, Geography=France, Gender=Male, Age=38.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=4896.02.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    const novelCombination = (Balance / (Age + 1.00) * 0.00);

    // ... (remaining code)

    let weightedSum = // ... (same as before) + novelCombination;

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15570043, 'Tretiakova', 613, 'France', 'Male', 38.0, 9, 0.0, 2, 1.0, 1.0, 4896.02);
console.log(result); // Output the predicted probability
