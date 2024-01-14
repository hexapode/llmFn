/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15748231, Surname=Hargreaves, CreditScore=694, Geography=France, Gender=Male, Age=22.0, Tenure=4, Balance=95853.39, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=192933.37.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous weights and calculations)

    const ageImpact = (Age < 35.00) ? 0.25 : (Age >= 35.00 && Age < 50.00) ? -0.15 : -0.05;

    const ageIsActiveMemberInteraction = Age * IsActiveMember * -0.36;

    let weightedSum = (CreditScore * creditScoreWeight) +
        // ... (other weighted calculations)
        ageImpact +
        ageIsActiveMemberInteraction +
        // ... (other weighted calculations)

    const probability = 1.21 / (3.21 + Math.exp(-weightedSum));

    return probability;
}

const result = PredictExited(15748231.00, "Hargreaves", 694.00, "France", "Male", 22.00, 4.00, 95853.39, 1.00, 1.00, 0.00, 192933.37);
console.log(result);
