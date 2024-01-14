/** // 0.49640334142721754 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15751524, Surname=Tseng, CreditScore=636, Geography=Germany, Gender=Female, Age=38.0, Tenure=7, Balance=144287.6, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=29552.7.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.90,
        Tenure: 0.00,
        Balance: 0.00,
        NumOfProducts: -11.40,
        HasCrCard: -1.09,
        IsActiveMember: -1.61,
        EstimatedSalary: 0.00,
        NovelCombination: -0.05  // Adding a coefficient for a novel combination of variables
    };

    // Calculating the novel combination using Age and Balance
    const novelCombination = Age * Balance;

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
        coefficients.NovelCombination * novelCombination  // Adding the novel combination to the linear combination
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
