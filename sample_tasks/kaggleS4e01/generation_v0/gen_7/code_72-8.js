/** // -Infinity //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 1 for: CustomerId=15651144, Surname=Yao, CreditScore=632, Geography=Germany, Gender=Female, Age=46.0, Tenure=2, Balance=150561.03, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=64722.61.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // ... (previous code remains unchanged)

    let balanceToSalaryRatio = Balance / EstimatedSalary;
    let balanceToSalaryImpact = 0.00;

    if (balanceToSalaryRatio > 2.00) {
        balanceToSalaryImpact = 2.50;
    } else {
        balanceToSalaryImpact = -1.00;
    }

    // ... (remaining calculation remains unchanged)

    let linearCombination = (
        // ... (previous linear combination calculation)
        coefficients.ExtraParameterImpact * balanceToSalaryImpact
        // ... (remaining calculation remains unchanged)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
