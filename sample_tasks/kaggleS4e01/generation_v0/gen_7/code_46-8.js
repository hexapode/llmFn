/** // 0.4982244327345527 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15791326, Surname=Macleod, CreditScore=535, Geography=France, Gender=Male, Age=34.0, Tenure=3, Balance=123575.51, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=121525.48.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    // Simpler way of calculating the linear combination using a different set of coefficients
    const coefficients = {
        CustomerId: 0.15,
        CreditScore: 0.002,
        Age: -0.04,
        Tenure: -0.03,
        Balance: 0.00002,
        NumOfProducts: -0.2,
        HasCrCard: -0.15,
        IsActiveMember: -0.5,
        EstimatedSalary: 0.00003,
        GeographyImpact: 0.15,
        GenderImpact: -0.1,
        SurnameImpact: 0.02,
        NewParameterImpact: 0.05,
        AdditionalImpact: -0.2,
        CustomParameterImpact: -0.08, 
        AgeBalanceImpact: 0.00001, 
        CreditScoreImpact: 0.002, 
        UnusedParameterImpact: 0.08,  
        ExtraParameterImpact: 0.25,
        AgeHasCrCardImpact: 0.03,  
    };

    // Calculating additional variable based on Age and HasCrCard
    let additionalVariable = Age * 0.9 + (HasCrCard === 1.00 ? 100.00 : 50.00);

    // Calculating geography impact
    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.30;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.20;
    } else {
        geographyImpact = -0.10;
    }

    // Linear combination
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
        coefficients.GenderImpact * (Gender === 'Male' ? 1.0 : -1.0) +
        coefficients.SurnameImpact * Surname.length +
        coefficients.NewParameterImpact * additionalVariable +
        coefficients.AdditionalImpact * (NumOfProducts + Balance) +
        coefficients.CustomParameterImpact * (Age / (EstimatedSalary + 1)) +
        coefficients.AgeBalanceImpact * (Age * Balance) + 
        coefficients.CreditScoreImpact * (CreditScore / 1000) + 
        coefficients.UnusedParameterImpact * 0.50 + 
        coefficients.ExtraParameterImpact * (Age + Tenure) + 
        coefficients.AgeHasCrCardImpact * (Age * HasCrCard)
    );

    // Calculating the probability using the sigmoid function
    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
