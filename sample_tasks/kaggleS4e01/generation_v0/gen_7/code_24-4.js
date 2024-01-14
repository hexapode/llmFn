/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15672594, Surname=Zaytseva, CreditScore=633, Geography=Spain, Gender=Male, Age=34.0, Tenure=2, Balance=105799.32, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=122960.98.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.10,
        CreditScore: 0.003,
        Age: 0.05,
        Tenure: 0.01,
        Balance: 0.00002,
        NumOfProducts: -0.25,
        HasCrCard: -0.15,
        IsActiveMember: -0.52,
        EstimatedSalary: 0.00003,
        GeographyImpact: 0.45,
        GenderImpact: -0.12,
        SurnameImpact: 0.03,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.04,
        CustomParameterImpact: -0.85,
        AgeBalanceImpact: 0.0001,
        CreditScoreImpact: 0.0002,
        TenureBalanceImpact: 0.00005
    };

    let newParameter = (Age * Balance) / (NumOfProducts + 1.00);
    let tenureBalanceImpact = Balance * Tenure * coefficients.TenureBalanceImpact;
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - 610.0) / 120.0;

    let surnameValue = 0.0;
    switch (Surname) {
        case "Zaytseva":
            surnameValue = 0.05;
            break;
        case "Smith":
            surnameValue = 0.02;
            break;
        case "Johnson":
            surnameValue = -0.03;
            break;
        default:
            surnameValue = 0.0;
            break;
    }

    let customParameter = (Age * 0.02) / (EstimatedSalary * 0.01);

    let geographyImpact = 0.0;
    if (Geography === 'Germany') {
        geographyImpact = 1.80;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.10;
    } else {
        geographyImpact = 0.03;
    }

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
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * (Gender === 'Male' ? 1.98 : -1.15) +
        coefficients.SurnameImpact * surnameValue +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        tenureBalanceImpact + coefficients.AgeBalanceImpact * Age * Balance + coefficients.CreditScoreImpact * CreditScore
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
