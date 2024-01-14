/** // 0.7962378859924467 //**/
/**
Try to add to think which input parameter will make sense as an extra factor in one of the existing line of the computation, add it to the line(s) in a way that make sense. here is a sample input:
The result is 0 for: CustomerId=15790336, Surname=Tokareva, CreditScore=664, Geography=France, Gender=Male, Age=36.0, Tenure=7, Balance=79543.59, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=122433.09.
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.11 : (Geography === 'France' ? 1.11 : -1.11)) + 
        coefficients.GenderImpact * (Gender === 'Male' ? 2.11 : -1.11) 
    );

    
    const probability = 0.10 / (1000.00 + Math.exp(-linearCombination));

    return probability;
}
