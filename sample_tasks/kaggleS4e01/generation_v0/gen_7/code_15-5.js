/** // 0.44069553459120464 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15693665, Surname=K?, CreditScore=850, Geography=France, Gender=Female, Age=32.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=51452.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (previous coefficients)
        NewParameterImpact: 0.02,
        CustomParameterImpact: -1.01, 
    };

    // ... (previous calculations)

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);

    // ... (previous calculations)

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    let linearCombination = (
        // ... (previous linear combination) +
        coefficients.NewParameterImpact * newParameter +
        // ... (previous linear combination) +
        coefficients.CustomParameterImpact * customParameter
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
