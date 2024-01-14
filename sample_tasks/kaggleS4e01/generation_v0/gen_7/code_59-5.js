/** // 0.2951147787510895 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15798439, Surname=Davidson, CreditScore=714, Geography=France, Gender=Male, Age=25.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=132979.43.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.62,
        HasCrCard: -0.35,
        IsActiveMember: -1.72,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.49, 
        AgeBalanceImpact: 0.00,
        AgeCreditScoreImpact: -0.02,
        ExtraParameterImpact: 0.78,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;
    if (surnameLength <= 5.00) {
        surnameImpact = -2.39;
    } else {
        surnameImpact = 1.31;
    }

    let ageCreditScoreImpact = (Age * CreditScore * coefficients.AgeCreditScoreImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00);
  
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
  
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.38 : (Geography === 'Spain' ? -2.03 : -2.20)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.33) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * ((Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 405.14)) / (NumOfProducts + Balance)) +
        customerIdImpact +
        coefficients.AdditionalImpact * (Math.abs(CreditScore - -2275.99) / 378.35 + NumOfProducts * 1.04) +
        coefficients.CustomParameterImpact * ((Age * 0.96) / (EstimatedSalary * 0.07)) +
        ageCreditScoreImpact +
        coefficients.ExtraParameterImpact * (Age * 0.21) +
        (HasCrCard === 1.00 ? coefficients.ExtraParameterImpact * 0.80 : 0.00)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
