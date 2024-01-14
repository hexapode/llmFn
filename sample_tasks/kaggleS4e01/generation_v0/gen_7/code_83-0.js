/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15686870, Surname=Chiu, CreditScore=594, Geography=France, Gender=Male, Age=46.0, Tenure=7, Balance=151607.97, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=100423.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (existing code)

    let balanceToSalaryRatio = Balance / EstimatedSalary;

    let balanceToSalaryImpact = 0.00;
    if (balanceToSalaryRatio > 2.00) {
        balanceToSalaryImpact = 1.50;
    } else if (balanceToSalaryRatio > 1.00) {
        balanceToSalaryImpact = 0.75;
    } else {
        balanceToSalaryImpact = -0.50;
    }

    // ... (existing code)

    let linearCombination = (
        // ... (existing linear combination terms)
        coefficients.ExtraParameterImpact * balanceToSalaryImpact
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
