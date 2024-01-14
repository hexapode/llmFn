/** // 0.6462534154776016 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15740175, Surname=Raynor, CreditScore=602, Geography=France, Gender=Male, Age=31.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=87412.74.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {
    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.74,
        HasCrCard: -0.36,
        IsActiveMember: -1.75,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AgeBalanceImpact: 0.06,
        AdditionalImpact: -0.46,
        NoGenderImpact: 0.15
    };

    let surnameLength = Surname.length;
    let surnameImpact = (surnameLength <= 5) ? -2.39 : 1.63;

    let newParameter = (Age * Tenure + (HasCrCard === 1 ? 1000 : 426.44)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1 ? 2 : 1);
    let customerIdLastDigit = CustomerId % 10;
    let customerIdImpact = 0.01 * customerIdLastDigit;
    
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 3.51 : (Geography === 'Spain' ? -1.04 : -2.24)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.44 : -2.36) +
        coefficients.SurnameImpact * surnameImpact +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * (Math.abs(CreditScore + 4.97) / 396.32 + NumOfProducts * 1.05) +
        ageBalanceImpact +
        coefficients.NoGenderImpact * (HasCrCard === 1 ? 0.8 : 2.02)  
    );

    const probability = 1 / (1 + Math.exp(-linearCombination));

    return probability;
}
