/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15596979, Surname=Nkemjika, CreditScore=554, Geography=France, Gender=Male, Age=41.0, Tenure=6, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=124489.88.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.02,
        CreditScore: 0.06,
        Age: -0.04,
        Tenure: -0.01,
        Balance: 0.08,
        NumOfProducts: -0.12,
        HasCrCard: -0.08,
        IsActiveMember: -0.18,
        EstimatedSalary: 0.03,
        GeographyImpact: 0.10,
        GenderImpact: -0.05,
        SurnameImpact: 0.01,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.15,
        CustomParameterImpact: -0.10, 
        AgeBalanceImpact: 0.02, 
        CreditScoreImpact: 0.03, 
        UnusedParameterImpact: 0.05,  
        ExtraParameterImpact: 0.12,  
        OtherImpact: 0.07
    };

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 406.15)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 398.35;
    
    additionalVariable += NumOfProducts * 1.04;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Nkemjika":
            surnameValue = -0.24;
            break;
        default:
            surnameValue = 0.33;
            break;
    }

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
        coefficients.SurnameImpact * surnameValue +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.50 +
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 0.00) +
        coefficients.OtherImpact * (Age * NumOfProducts * Balance / 1000)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
