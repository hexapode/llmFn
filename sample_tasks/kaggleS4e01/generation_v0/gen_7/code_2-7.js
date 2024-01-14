/** // 0.7489526705527415 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15756465, Surname=Chukwuemeka, CreditScore=592, Geography=France, Gender=Male, Age=31.0, Tenure=7, Balance=134208.97, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=182692.9.
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
        NovelCombination: 0.05
    };

    
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
        coefficients.NovelCombination * (Age * Tenure)  // Novel combination of Age and Tenure
    );

    
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
