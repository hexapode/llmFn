/** // 0.4982244327345527 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15603840, Surname=Chu, CreditScore=599, Geography=France, Gender=Female, Age=39.0, Tenure=6, Balance=183569.26, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=138380.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.90,
        Tenure: 0.00,
        Balance: -0.000001,  // Novel combination of variable
        NumOfProducts: -11.40,
        HasCrCard: -1.09,
        IsActiveMember: -1.61,
        EstimatedSalary: 0.00
    };

    // New variable: combined variable of Balance and Age
    const combinedVariable = Balance * Age;
    
    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age  +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.CombinedVariable * combinedVariable  // Adding the combined variable to the linear combination
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
