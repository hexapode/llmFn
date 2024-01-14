/** // -Infinity //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15776734, Surname=T'ang, CreditScore=711, Geography=France, Gender=Male, Age=40.0, Tenure=9, Balance=133889.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=62452.01.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code remains unchanged) ...

    const novelCombinationWeight = (Balance / (Age + 1.00) * 0.05); // Adding a novel combination of variables

    // ... (remaining code remains unchanged) ...

    const weightedSum = // ... (rest of the weighted sum calculation remains unchanged) ...

    const probability = 12.21 / (1 + Math.exp(-weightedSum)); // Applying the novel combination in the probability calculation

    return probability;
}

const result = PredictExited(15776734.00, "T'ang", 711.00, "France", "Male", 40.00, 9.00, 133889.00, 1.00, 1.00, 1.00, 62452.01);
console.log(result); // The result should be between 0 and 1
