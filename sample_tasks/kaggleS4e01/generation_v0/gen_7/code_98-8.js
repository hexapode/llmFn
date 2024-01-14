/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 1 for: CustomerId=15593973, Surname=Chiu, CreditScore=749, Geography=Germany, Gender=Male, Age=50.0, Tenure=5, Balance=132576.25, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=125939.18.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.02,
        CreditScore: 0.03,
        Age: 0.01,
        Tenure: 0.05,
        Balance: 0.04,
        NumOfProducts: -0.02,
        HasCrCard: -0.03,
        IsActiveMember: -0.04,
        EstimatedSalary: 0.03,
        GeographyImpact: 0.02,
        GenderImpact: 0.01,
        SurnameImpact: 0.03,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.02,
        CustomParameterImpact: -0.03, 
        AgeBalanceImpact: 0.02, 
        CreditScoreImpact: 0.04, 
        UnusedParameterImpact: 0.01,  
        ExtraParameterImpact: 0.03,  
        VariableImpact: -0.03
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -0.03;
    } else {
        surnameImpact = 0.03;
    }

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 426.54)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00) * (CreditScore / 1000.00); 
    let lastDigit = CustomerId % 10;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - 600) / 400;
    
    additionalVariable += NumOfProducts * 0.05;
    
    let surnameValue = 0.00;
    switch (Surname) {
        case "Chiu":
            surnameValue = -0.03;
            break;
        default:
            surnameValue = 0.03;
            break;
    }

    let customParameter = (Age * 0.08) / (EstimatedSalary * 0.09);

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.03;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.01;
    } else {
        geographyImpact = -0.02;
    }

    let unusedParameter = 100;  
    let unusedParameterImpact = unusedParameter * coefficients.UnusedParameterImpact;

    let variable = 0.00;
    if (Gender === 'Male') {
        variable = 0.03;
    } else {
        variable = -0.03;
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
        coefficients.GenderImpact * variable +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        surnameValue + ageBalanceImpact + coefficients.CreditScoreImpact * CreditScore +
        unusedParameterImpact +
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 2.02) +
        coefficients.ExtraParameterImpact * (Balance * 0.01) +
        coefficients.ExtraParameterImpact * (NumOfProducts * 0.15) +
        coefficients.AdditionalImpact * (Age / 100) + 
        coefficients.GeographyImpact * (Geography === 'France' ? 1.00 : 0.00) +
        coefficients.VariableImpact * (Age * 0.01)  
    );

    const probability = 1.00 / (10000000.10 + Math.exp(-linearCombination));

    return probability;
}
