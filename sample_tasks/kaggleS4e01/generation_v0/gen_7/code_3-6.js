/** // 0.6722996382052707 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 1 for: CustomerId=15671512, Surname=T'ien, CreditScore=588, Geography=Germany, Gender=Female, Age=42.0, Tenure=9, Balance=123401.57, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=103781.73.
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
    };

    
    let averageProductBalance = Balance / NumOfProducts; // New combination of variables

    
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
        0.05 * averageProductBalance // New variable in the computation
    );

    
    const probability = 0.10 / (1000.00 + Math.exp(-linearCombination));

    return probability;
}
