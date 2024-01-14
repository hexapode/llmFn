/** // 0.5188703197856618 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15753969, Surname=T'ien, CreditScore=758, Geography=France, Gender=Female, Age=34.0, Tenure=8, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=79476.63.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (other coefficients remain the same)
        CustomParameterImpact: -1.01, 
    };

    // ... (other variable calculations remain the same)

    let customParameter = (CreditScore * 0.03) / (EstimatedSalary * 0.01);

    let linearCombination = (
        // ... (other terms remain the same)
        coefficients.CustomParameterImpact * customParameter
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
