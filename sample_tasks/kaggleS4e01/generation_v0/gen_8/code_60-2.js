/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15663964, Surname=Pagnotto, CreditScore=561, Geography=France, Gender=Male, Age=37.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=83093.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    // ... (previous code)

    // New factors
    const numOfProductsWeight = (NumOfProducts < 3.00) ? -4.19 : 1.54;
    const tenureNumProductsInteractionWeight = Tenure * NumOfProducts * 0.05;
    const balanceWeight = 0.01;

    let weightedSum = (CreditScore * creditScoreWeight) +
        (Age * ageWeight) +
        // ... (other factors)
        (NumOfProducts * numOfProductsWeight) +
        tenureNumProductsInteractionWeight +
        (Balance * balanceWeight) +
        // ... (other factors)

    const probability = 1.21 / (0.95 + Math.exp(-weightedSum));

    return probability;
}

console.log(PredictExited(15663964, 'Pagnotto', 561.00, 'France', 'Male', 37.00, 4.00, 0.00, 2.00, 1.00, 0.00, 83093.25)); // This should output 0
