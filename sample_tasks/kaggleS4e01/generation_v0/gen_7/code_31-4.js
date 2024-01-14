/** // 0.4200959961346306 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15698510, Surname=Onio, CreditScore=604, Geography=Germany, Gender=Female, Age=35.0, Tenure=2, Balance=140197.44, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=63687.34.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        // ... (existing coefficients)
        EstimatedSalaryToBalanceImpact: -0.05,  // new impact coefficient for the ratio of estimated salary to balance
    };

    // ... (existing parameter calculations)

    let estimatedSalaryToBalance = EstimatedSalary / Balance;
    let estimatedSalaryToBalanceImpact = estimatedSalaryToBalance * coefficients.EstimatedSalaryToBalanceImpact;

    // ... (linear combination calculation and other parameter impacts)

    let linearCombination = (
        // ... (existing linear combination calculation)
        coefficients.EstimatedSalaryToBalanceImpact * estimatedSalaryToBalanceImpact  // include the impact of the new parameter
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
