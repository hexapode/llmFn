/** // 0.7656885990780995 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15654772, Surname=Teng, CreditScore=695, Geography=Germany, Gender=Female, Age=47.0, Tenure=1, Balance=125552.96, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=9984.4.
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
        IsActiveMember: -1.77,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.46,
        CustomParameterImpact: -0.53,
    };

    let surnameLength = Surname.length;
    let surnameCoefficient = 0.00;

    if (surnameLength <= 5.00) {
        surnameCoefficient = -2.39;
    } else {
        surnameCoefficient = 1.51;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.54)) / (NumOfProducts + Balance);
    let additionalVariable = Math.abs(CreditScore - -4.23) / 396.32 + NumOfProducts * 1.05;
    let surnameCoefficientAdjustment = Surname === 'Teng' ? 0.38 : 0.00;
    let locationCoefficient = Geography === 'Germany' ? 3.51 : (Geography === 'Spain' ? -1.04 : -2.23);

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
        coefficients.GeographyImpact * locationCoefficient +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.56 : -2.36) +
        coefficients.SurnameImpact * surnameCoefficient +
        coefficients.NewParameterImpact * newParameter +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * (Age * 1.08) / (EstimatedSalary * 0.09) +
        surnameCoefficientAdjustment
    );

    const probability = 1.00 / (10.10 + Math.exp(-linearCombination));

    return probability;
}
