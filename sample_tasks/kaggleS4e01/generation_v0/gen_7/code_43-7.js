/** // 0.6722274149669584 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15802856, Surname=Kao, CreditScore=804, Geography=France, Gender=Male, Age=27.0, Tenure=9, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=145700.22.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.00,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.27,
        IsActiveMember: -1.80,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.43,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.42, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.76,
        OtherParameterImpact: 0.33,
    };

    let otherParameter = (Age * NumOfProducts) / (Math.sqrt(Tenure) + 1.00);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
    
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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.26 : (Geography === 'Spain' ? -2.16 : -1.96)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.32 : -2.23) +
        coefficients.SurnameImpact * (Surname.length <= 5.00 ? -2.29 : 1.46) +
        coefficients.NewParameterImpact * otherParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * (Math.abs(CreditScore - -1197.78) / 799.82 + NumOfProducts * 1.03) +
        coefficients.CustomParameterImpact * ((Age * 1.03) / (EstimatedSalary * 0.07)) +
        ageBalanceImpact +
        coefficients.CreditScoreImpact * CreditScore +
        coefficients.UnusedParameterImpact * 0.50 +
        coefficients.ExtraParameterImpact * (Age * 0.21) +
        coefficients.OtherParameterImpact * (otherParameter + 0.05) 
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
