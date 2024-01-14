/** // 0.7794167436460171 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15725882, Surname=Chijindum, CreditScore=633, Geography=Germany, Gender=Male, Age=39.0, Tenure=3, Balance=81811.71, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=77866.91.
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
        GeographyImpact: 0.5, // Impact of Geography on prediction
        GenderImpact: -0.3, // Impact of Gender on prediction
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 1 : 0) + // Consider impact of Geography
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : 0) // Consider impact of Gender
    );

    
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
