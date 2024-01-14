/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15581551, Surname=Oluchi, CreditScore=581, Geography=Spain, Gender=Female, Age=51.0, Tenure=5, Balance=134168.7, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=153012.18.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (existing code) ...

    let balanceToSalaryRatio = Balance / EstimatedSalary;

    let customParameter = (Age * 0.98) / (EstimatedSalary * 0.07);
    
    // ... (existing code) ...

    let linearCombination = (
        // ... (existing linear combination code) ...
        coefficients.CustomParameterImpact * customParameter +
        // ... (existing linear combination code) ...
        coefficients.CustomParameterImpact * balanceToSalaryRatio
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
