/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15682467, Surname=Tsao, CreditScore=633, Geography=Spain, Gender=Female, Age=36.0, Tenure=4, Balance=121237.65, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=137037.97.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: -0.01,
        CreditScore: -0.03,
        Age: -0.02,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.35,
        IsActiveMember: -1.71,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.77,  
        AdditionalVariableImpact: 0.03,
    };

    const genderImpact = (Gender === 'Male') ? 1.17 : -1.05;
    const creditScoreImpact = (CreditScore - 600) * 0.002;
    const additionalVariable = NumOfProducts * 0.22 - Balance * 0.000003;

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
        coefficients.GeographyImpact * ((Geography === 'Germany') ? 1.36 : (Geography === 'Spain') ? -1.61 : -1.27) +
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * ((Surname === 'Tsao') ? -0.24 : 0.33) +
        coefficients.NewParameterImpact * ((Age * Tenure) + ((HasCrCard === 1.00) ? 1000.00 : 406.15) / (NumOfProducts + Balance)) +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * (Age * 0.95) / (EstimatedSalary * 0.07)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
