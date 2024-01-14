/** // 0.4982265829758657 //**/
/**
Try to add a step in the computation using novel combination of variable and add it to the function. here is a sample input:
The result is 0 for: CustomerId=15650437, Surname=Frolova, CreditScore=644, Geography=France, Gender=Male, Age=40.0, Tenure=2, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=132730.07.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: -0.01,
        Tenure: -0.05,
        Balance: 0.00,
        NumOfProducts: -0.60,
        HasCrCard: -0.35,
        IsActiveMember: -1.71,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.46,
        GenderImpact: -0.21,
        SurnameImpact: 0.04,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.45,
        CustomParameterImpact: -0.48, 
        AgeBalanceImpact: 0.00, 
        CreditScoreImpact: 0.00, 
        UnusedParameterImpact: 0.10,  
        ExtraParameterImpact: 0.77,  
    };

    let newParameter = (Age * Tenure + (HasCrCard === 1.00 ? 1000.00 : 406.15)) / (NumOfProducts + Balance);
    let ageBalanceImpact = (Age * Balance * coefficients.AgeBalanceImpact) * (IsActiveMember === 1.00 ? 2.00 : 1.00); 
    let lastDigit = CustomerId % 10.00;
    let customerIdImpact = 0.01 * lastDigit;
    let additionalVariable = Math.abs(CreditScore - -1197.78) / 398.35;    
    additionalVariable += NumOfProducts * 1.04;

    let sampleCombination = (Age * NumOfProducts) / (Math.sqrt(Tenure) + Balance);

    // Add a novel combination of variables
    let novelCombination = (HasCrCard * 100) + (Math.log(EstimatedSalary) / Math.sqrt(CreditScore)) - (Tenure * Age);

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 2.37 : (Geography === 'Spain' ? -2.04 : -2.19)) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.33 : -2.34) +
        coefficients.SurnameImpact * (Surname.length <= 5.00 ? -2.28 : 1.43) +
        coefficients.NewParameterImpact * newParameter +
        customerIdImpact +
        coefficients.AdditionalImpact * additionalVariable +
        coefficients.CustomParameterImpact * ((Age * 0.95) / (EstimatedSalary * 0.07)) +
        (sampleCombination * 0.02) +
        (novelCombination * 0.15)
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
