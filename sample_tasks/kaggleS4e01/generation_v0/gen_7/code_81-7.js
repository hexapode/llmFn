/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.09900990099009865" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15649418, Surname=Chukwukere, CreditScore=659, Geography=Germany, Gender=Female, Age=47.0, Tenure=4, Balance=129832.58, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=139947.94.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.05,
        CreditScore: -0.0015,
        Age: 0.06,
        Tenure: -0.04,
        Balance: 0.00002,
        NumOfProducts: -0.6,
        HasCrCard: -0.3,
        IsActiveMember: -1.1,
        EstimatedSalary: 0.000001,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        SurnameImpact: 0.03,
        NewParameterImpact: 0.008,
        AdditionalImpact: -0.5,
        CustomParameterImpact: -0.45, 
        AgeBalanceImpact: 0.00003, 
        CreditScoreImpact: 0.001, 
        UnusedParameterImpact: 0.2,
        ExtraParameterImpact: 0.6,  
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0;

    if (surnameLength <= 5) {
        surnameImpact = -2.5;
    } else {
        surnameImpact = 1.6;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1 ? 1000 : 426)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1 ? 2 : 1); 
    let lastDigit = CustomerId % 10;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - 500) / 400;

    additionalVariable += NumOfProducts * 1;
    let surnameValue = 0;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.28;
            break;
        default:
            surnameValue = 0.32;
            break;
    }

    let customParameter = (Age * 1.08) / (EstimatedSalary * 0.00007);

    let geographyImpact = 0;
    if (Geography === 'Germany') {
        geographyImpact = 3.5;
    } else if (Geography === 'Spain') {
        geographyImpact = -1.1;
    } else {
        geographyImpact = -2.2;
    }

    let unusedParameter = 110;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.4 : -2.4) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        unusedParameterImpact +
        coefficients.ExtraParameterImpact * (Age * 0.2) + (HasCrCard === 1 ? 0.8 : 1.8) +
        coefficients.ExtraParameterImpact * (Balance * 0.0005) +
        coefficients.ExtraParameterImpact * (NumOfProducts * 0.15) +
        coefficients.AdditionalImpact * (Age / 100) + 
        coefficients.GeographyImpact * (Geography === 'France' ? 1 : 0)
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
