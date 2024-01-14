/** // 0.7672764116519273 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15678725, Surname=Fennell, CreditScore=683, Geography=France, Gender=Female, Age=39.0, Tenure=4, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=77965.44.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.72,
        HasCrCard: -0.38,
        IsActiveMember: -1.88,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.47,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        OtherParameterImpact: 0.02,
    };

    let surnameLength = Surname.length;
    let surnameImpact = 0.00;

    if (surnameLength <= 5.00) {
        surnameImpact = -2.39;
    } else {
        surnameImpact = 1.61;
    }

    let otherParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 428.54)) / (NumOfProducts + Balance);
    
    otherParameter += CreditScore * 0.01;
    otherParameter += EstimatedSalary * 0.00;

    let otherVariable = Math.abs(CreditScore - 3.23) / 395.42;
    
    otherVariable += NumOfProducts * 1.04;

    let surnameValue = 0.00;
    switch (Surname) {
        case "Fennell":
            surnameValue = -0.58;
            break;
        default:
            surnameValue = 0.33;
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 3.60 : (Geography === 'Spain' ? -1.04 : -2.24)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.68 : -2.47) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.OtherParameterImpact * otherParameter + 
        coefficients.OtherParameterImpact * otherVariable + 
        surnameValue
    );

    const probability = 1.00 / (1010.10 + Math.exp(-linearCombination));

    return probability;
}
