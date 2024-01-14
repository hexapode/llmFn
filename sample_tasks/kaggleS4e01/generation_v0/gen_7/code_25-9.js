/** // 0.651400408050185 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15716518, Surname=Yuryeva, CreditScore=617, Geography=France, Gender=Female, Age=27.0, Tenure=8, Balance=0.0, NumOfProducts=2, HasCrCard=0.0, IsActiveMember=0.0, EstimatedSalary=190269.21.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: -0.000001,
        CreditScore: -0.0004,
        Age: 0.078,
        Tenure: -0.047,
        Balance: 0.000003,
        NumOfProducts: 0.0005,
        HasCrCard: -0.0089,
        IsActiveMember: -0.8516,
        EstimatedSalary: -0.000002,
        GeographyImpact: 0.2241,
        GenderImpact: -0.0141,
        SurnameImpact: 0.002,
        NewParameterImpact: 0.003,
        AdditionalImpact: -0.006,
        CustomParameterImpact: -0.9868, 
        AgeBalanceImpact: 0.0001, 
        CreditScoreImpact: -0.0001, 
        TenureBalanceImpact: 0.0002
    };

    let newParameter = (Age * Tenure) / (NumOfProducts + Balance);
    let tenureBalanceImpact = Tenure * Balance * coefficients.TenureBalanceImpact; 
    let lastDigit = CustomerId % 10.0;
    let customerIdImpact = 0.0 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - 597.0) / 90.0;

    let surnameValue = 0.0;
    switch (Surname) {
        case "Yuryeva":
            surnameValue = 0.25;
            break;
        case "Smith":
            surnameValue = -0.15;
            break;
        case "Johnson":
            surnameValue = -0.08;
            break;
        default:
            surnameValue = 0.0;
            break;
    }

    let customParameter = (Age * 0.03) / (EstimatedSalary * 0.01);

    let geographyImpact = 0.0;
    if (Geography === 'Germany') {
        geographyImpact = 0.35;
    } else if (Geography === 'Spain') {
        geographyImpact = 0.15;
    } else {
        geographyImpact = 0.0;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 1.0 : -1.0) +
        coefficients.SurnameImpact * surnameValue +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + tenureBalanceImpact + coefficients.CreditScoreImpact * CreditScore 
    );

    const probability = 1.0 / (1.0 + Math.exp(-linearCombination));

    return probability;
}
