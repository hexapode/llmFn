/** // 0.5462543603732974 //**/
/**
I try on the following input and it returned 0.990099009878152" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15682048, Surname=Nock, CreditScore=632, Geography=France, Gender=Female, Age=38.0, Tenure=2, Balance=0.0, NumOfProducts=1, HasCrCard=1.0, IsActiveMember=1.0, EstimatedSalary=100365.51.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CreditScore: 0.0006,
        Age: 0.0002,
        Tenure: -0.006,
        Balance: 0.0005,
        NumOfProducts: -0.02,
        HasCrCard: -0.02,
        IsActiveMember: -0.07,
        EstimatedSalary: 0.0003,
        GeographyImpact: 0.03,
        GenderImpact: -0.01,
    };

    let geographyImpact = 0.00;
    if (Geography === 'Germany') {
        geographyImpact = 0.05;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.04;
    } else {
        geographyImpact = -0.04;
    }

    let genderImpact = Gender === 'Male' ? 0.02 : -0.02;

    let linearCombination = (
        coefficients.CreditScore * CreditScore +
        coefficients.Age * Age +
        coefficients.Tenure * Tenure +
        coefficients.Balance * Balance +
        coefficients.NumOfProducts * NumOfProducts +
        coefficients.HasCrCard * HasCrCard +
        coefficients.IsActiveMember * IsActiveMember +
        coefficients.EstimatedSalary * EstimatedSalary +
        coefficients.GeographyImpact * geographyImpact +
        coefficients.GenderImpact * genderImpact
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
