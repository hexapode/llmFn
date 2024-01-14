/** // 0.8229076538308504 //**/
/**
Try to add a step in the computation using unused parameters, this step should impact the prediction. here is a sample input:
The result is 0 for: CustomerId=15658306, Surname=Lo, CreditScore=693, Geography=Germany, Gender=Male, Age=68.0, Tenure=3, Balance=97705.99, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=105997.25.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.49,
        HasCrCard: -0.16,
        IsActiveMember: -0.80,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.39,
        GenderImpact: -0.20,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.43,
        CustomParameterImpact: -1.42, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  // Impact of an unused parameter
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -1.18;
    } else {
        surnameImpact = 0.43;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 44.40)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.00 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 799.91;
    
    additionalVariable += NumOfProducts * 0.03;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Ts'ui":
            surnameValue = -0.13;
            break;
        default:
            surnameValue = 0.12;
            break;
    }

    let customParameter = (Age * 0.13) / (EstimatedSalary * 0.06);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 1.24;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.97;
    } else {
        geographyImpact = -1.06;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 1.21 : -1.12) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.5  // Impact of an unused parameter
    );

    const probability = 1.00 / (1.02 + Math.exp(-linearCombination));

    return probability;
}
