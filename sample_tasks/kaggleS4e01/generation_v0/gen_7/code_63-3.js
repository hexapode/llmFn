/** // 0.5241979009360597 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15692407, Surname=Gannon, CreditScore=690, Geography=France, Gender=Male, Age=23.0, Tenure=6, Balance=125909.85, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=70548.96.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.73,
        HasCrCard: -0.35,
        IsActiveMember: -1.73,
        EstimatedSalary: 0.00,
        GeographyImpact: 1.28,
        GenderImpact: 0.37,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AgeBalanceImpact: 0.00,
        TenureCreditScoreImpact: -0.02,
        ExtraParameterImpact: 0.78,
        CustomParameterImpact: -0.49,
        AgeImpact: -0.02,
        SalaryImpact: 0.0001
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.31;
    } else {
        surnameImpact = 1.37;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 406.03)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00);
    let tenureCreditScoreImpact = Tenure * CreditScore * coefficients.TenureCreditScoreImpact;

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.39 : (Geography === 'Spain' ? -2.03 : 1.28)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.34) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        coefficients.AgeBalanceImpact * ageBalanceImpact +
        tenureCreditScoreImpact +
        coefficients.CustomParameterImpact * (Age * 0.98) / (EstimatedSalary * 0.07) +
        coefficients.AgeImpact * (Age * 0.01) +
        coefficients.SalaryImpact * (EstimatedSalary * 0.001)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
