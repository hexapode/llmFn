/** // 0.4982930386375659 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15775293, Surname=Chibueze, CreditScore=597, Geography=Spain, Gender=Female, Age=36.0, Tenure=6, Balance=139912.74, NumOfProducts=1, HasCrCard=0.0, IsActiveMember=1.0, EstimatedSalary=72946.81.
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
        AdditionalVariableImpact: -0.15  
    };

    let additionalVariable = (CreditScore - 22.76) / 397.43;
    additionalVariable += NumOfProducts * 1.05;

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 2.40;
    } else if (Geography === 'Spain') {
        geographyImpact = -2.03;
    } else {
        geographyImpact = -2.22;
    }

    let predictedAge = Age + (HasCrCard === 1.00 ? 5.00 : 0.00);
    let predictedBalance = Balance - 1000.00 * IsActiveMember;

    let linearCombination = (
        coefficients.CustomerId * CustomerId +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * predictedAge +
        coefficients.Tenure * Tenure +
        coefficients.Balance * predictedBalance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.43 : -2.35) +
        coefficients.SurnameImpact * (Surname.length > 5 ? 1.37 : -2.31) +
        coefficients.NewParameterImpact * (predictedAge * Tenure + (HasCrCard === 1.00 ? 1000.00 : 407.13) / (NumOfProducts + predictedBalance)) +
        coefficients.AdditionalImpact * additionalVariable
    );

    const probability = 1.00 / (1.01 + Math.exp(-linearCombination));

    return probability;
}
