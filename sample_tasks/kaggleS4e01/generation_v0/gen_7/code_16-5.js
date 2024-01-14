/** // 0.822409160328408 //**/
/**
Try to implement another way of doing this, while trying to stay somehow similar to previously generated function. Maybe make use of some other variable. here is a sample input:
The result is 0 for: CustomerId=15592029, Surname=Hsing, CreditScore=678, Geography=Spain, Gender=Male, Age=33.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=182728.8.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.00,
        CreditScore: 0.00,
        Age: 0.07,
        Tenure: -0.04,
        Balance: 0.00,
        NumOfProducts: -0.52,
        HasCrCard: -0.16,
        IsActiveMember: -0.81,
        EstimatedSalary: 0.00,
        GeographyImpact: 0.50,
        GenderImpact: -0.15,
        SurnameImpact: 0.05,
        NewParameterImpact: 0.02,
        AdditionalImpact: -0.06,
        CustomParameterImpact: -1.01,
        NewVariableImpact: 0.03,
    };

    let newVariable = Math.log(EstimatedSalary + 10000) / 4;

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
        coefficients.GeographyImpact * (Geography === 'Germany' ? 0.90 : -0.89) +
        coefficients.GenderImpact * (Gender === 'Male' ? 2.08 : -1.08) +
        coefficients.SurnameImpact * (Surname.length > 6.00 ? 0.25 : -0.25) +
        coefficients.NewParameterImpact * ((Age * Tenure) / (NumOfProducts + Balance)) +
        coefficients.AdditionalImpact * (Math.abs(CreditScore - -60.10) / 113.53) +
        coefficients.CustomParameterImpact * ((Age * 0.03) / (EstimatedSalary * 0.01)) +
        coefficients.NewVariableImpact * newVariable
    );

    const probability = 0.16 / (2.02 + Math.exp(-linearCombination));

    return probability;
}
