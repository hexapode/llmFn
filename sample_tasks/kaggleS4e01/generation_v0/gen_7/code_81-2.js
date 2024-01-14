/** // 0.5617878233371953 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15713819, Surname=Calabrese, CreditScore=719, Geography=France, Gender=Female, Age=28.0, Tenure=7, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=122865.0.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.46,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.21,  
        ExtraParameterImpact: 0.77,  
        NewVariableImpact: 0.5,  
    };

    let ageToBalanceRatio = Age / (Balance === 0 ? 1 : Balance);
    let newVariable = ageToBalanceRatio + 0.1 * NumOfProducts;

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.3 : (Geography === 'Spain' ? 0.1 : -0.2)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 0.2 : -0.3) +
        coefficients.SurnameImpact * (Surname.length > 8 ? 0.2 : -0.1) +
        coefficients.NewParameterImpact * newVariable +
        coefficients.NewVariableImpact * ((Age * 2) - (NumOfProducts * 4))  
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
