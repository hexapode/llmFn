/** // 0.49961797595776747 //**/
/**
I try on the following input and it returned 0.09900990099009382" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15636428, Surname=P'an, CreditScore=682, Geography=France, Gender=Female, Age=38.0, Tenure=7, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=143783.28.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.05,
        CreditScore: 0.004,
        Age: 0.07,
        Tenure: -0.05,
        Balance: 0.00004,
        NumOfProducts: -0.03,
        HasCrCard: -0.02,
        IsActiveMember: -0.06,
        EstimatedSalary: 0.000003,
        GeographyImpact: 0.03,
        GenderImpact: 0.02,
        SurnameImpact: 0.005,
    };

    let linearCombination = (
        coefficients.CustomerId * (CustomerId % 10000) +
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * (Geography === 'France' ? 1 : 0) +
        coefficients.GenderImpact * (Gender === 'Male' ? 1 : 0) +
        coefficients.SurnameImpact * (Surname.length > 5 ? 1 : 0)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
