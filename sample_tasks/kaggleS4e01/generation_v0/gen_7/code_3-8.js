/** // 0.802200779157555 //**/
/**
Try to think of a factor that could make sense for this prediction. How could it be infer / predicted based on the input parameter available to the function, then update the function to implement it. here is a sample input for reference, so you can look at available parameters:
The result is 0 for: CustomerId=15576022, Surname=Cremonesi, CreditScore=691, Geography=Germany, Gender=Female, Age=36.0, Tenure=8, Balance=98710.89, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=88866.92.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: -0.01,
        Age: 1.00,
        Tenure: -0.10,
        Balance: 0.00,
        NumOfProducts: -10.39,
        HasCrCard: -1.20,
        IsActiveMember: -2.72,
        EstimatedSalary: 0.00,
        GeographyImpact: 1.61, 
        GenderImpact: -1.41, 
        BalanceToSalaryRatio: -0.0000005  // New coefficient for the balance to salary ratio
    };

    const balanceToSalaryRatio = Balance / EstimatedSalary;

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.11 : -1.11) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 2.11 : -1.11) +
        coefficients.BalanceToSalaryRatio * balanceToSalaryRatio  // Include the balance to salary ratio in the linear combination
    );

    const probability = 0.10 / (1000.00 + Math.exp(-linearCombination));

    return probability;
}
