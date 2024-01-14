/** // 0.5566240047411906 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15682655, Surname=Li Fonti, CreditScore=728, Geography=France, Gender=Female, Age=59.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=52301.38.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        // ... other coefficients
        Age_NumOfProducts_Interaction: -0.05
    };

    let ageNumProductsInteraction = Age * NumOfProducts * coefficients.Age_NumOfProducts_Interaction;

    let linearCombination = (
        // ... other linear combination calculation
        + ageNumProductsInteraction
    );

    const probability = 0.10 / (1000.00 + Math.exp(-linearCombination));

    return probability;
}
