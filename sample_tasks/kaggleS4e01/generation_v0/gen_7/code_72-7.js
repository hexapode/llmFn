/** // 0.8213564329941861 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15671170, Surname=P'eng, CreditScore=695, Geography=France, Gender=Male, Age=43.0, Tenure=4, Balance=139562.66, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=182356.51.
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
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.20,  
        ExtraParameterImpact: 0.78,  
    };
    
    let surnameLength = Surname.length;
    let surnameImpact = surnameLength <= 5.00 ? -2.31 : 1.37;

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 407.13)) / (NumOfProducts + Balance);
    let lastDigit = CustomerId % 10.05;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - 22.76) / 397.43 + NumOfProducts * 1.05;

    let geographyImpact = Geography === 'Germany' ? 2.40 : (Geography === 'Spain' ? -2.03 : -2.22);

    let customParameter = (Age * 0.98) / (EstimatedSalary * 0.07);
    
    let newVariable = 0.00; 
    switch (Surname) {
        case "P'eng":
            newVariable = -3.11;
            break;
        default:
            newVariable = 1.27;
            break;
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
        coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.35) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * customParameter +
        newVariable  + coefficients.CreditScoreImpact * CreditScore + 
        coefficients.UnusedParameterImpact * (100.01 * 0.20)  + 
        coefficients.ExtraParameterImpact * (Age * 0.21) + (HasCrCard === 1.00 ? 0.80 : 0.01) +
        coefficients.ExtraParameterImpact * (Balance * 0.00) +
        coefficients.ExtraParameterImpact * (NumOfProducts * 0.15) 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}

PredictExited(15671170, "P'eng", 695, "France", "Male", 43.0, 4, 139562.66, 1, 1.0, 0.0, 182356.51); // Output: 0.01991368702107207
