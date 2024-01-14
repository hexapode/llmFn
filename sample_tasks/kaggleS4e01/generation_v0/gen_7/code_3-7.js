/** // 0.6691515365866478 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15791302, Surname=McGregor, CreditScore=757, Geography=Spain, Gender=Female, Age=45.0, Tenure=10, Balance=89837.77, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=156598.23.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    
    const coefficients = {
        CustomerId: 0.00000005,
        CreditScore: -0.0001,
        Age: 0.005,
        Tenure: -0.02,
        Balance: 0.00003,
        NumOfProducts: -0.2,
        HasCrCard: -0.15,
        IsActiveMember: -0.25,
        EstimatedSalary: 0.00000002,
        GeographyImpact: 0.7, 
        GenderImpact: -0.6, 
    };

    const genderBias = (Gender === 'Male') ? 0.1 : 0.0;

    
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.5 : -0.5) + 
        coefficients.GenderImpact + genderBias
    );

    
    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
