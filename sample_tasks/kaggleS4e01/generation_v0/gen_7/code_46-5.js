/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15781802, Surname=Nnachetam, CreditScore=674, Geography=Spain, Gender=Male, Age=35.0, Tenure=4, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=180142.42.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.01,
        CreditScore: 0.02,
        Age: -0.03,
        Tenure: -0.04,
        Balance: 0.05,
        NumOfProducts: -0.06,
        HasCrCard: -0.07,
        IsActiveMember: -0.08,
        EstimatedSalary: 0.09,
        GeographyImpact: 0.10,
        GenderImpact: -0.11,
        SurnameImpact: 0.12,
        NewParameterImpact: 0.13,
        AdditionalImpact: -0.14,
        CustomParameterImpact: -0.15, 
        AgeBalanceImpact: 0.16, 
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 6.00) {
        surnameImpact = -0.17;
    } else {
        surnameImpact = 0.18;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 406.15)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 

    let customParameter = (Age * 0.95) / (EstimatedSalary * 0.07);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.37;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.04;
    } else {
        geographyImpact = -2.19;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.33 : -2.34) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        coefficients.AdditionalImpact * Math.abs(CreditScore - -1197.78) / 398.35 +
        coefficients.CustomParameterImpact * customParameter +
        surnameLength + ageBalanceImpact
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
