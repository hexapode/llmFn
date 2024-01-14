/** // 0.4982244327345527 //**/
/**
I try on the following input and it returned 0.8586063770194109" when the correct class was "0",Reflect on what went wrong the correct the function. 
Update the calculation in the function according to this. Here is the input used, input:
The result is 0 for: CustomerId=15605872, Surname=Fyodorov, CreditScore=587, Geography=France, Gender=Male, Age=38.0, Tenure=3, Balance=0.0, NumOfProducts=2, HasCrCard=1.0, IsActiveMember=0.0, EstimatedSalary=112585.19.
**/

function PredictExited(CustomerId, Surname, CreditScore, Geography, Gender, Age, Tenure, Balance, NumOfProducts, HasCrCard, IsActiveMember, EstimatedSalary) {

    const coefficients = {
        CustomerId: 0.01,
        CreditScore: -0.004,
        Age: -0.05,
        Tenure: -0.02,
        Balance: 0.0001,
        NumOfProducts: -0.3,
        HasCrCard: -0.15,
        IsActiveMember: -0.8,
        EstimatedSalary: 0.0002,
        GeographyImpact: 0.3,
        GenderImpact: -0.2,
        SurnameImpact: 0.07,
    };

    let geographyImpact = 0.1;
    if (Geography === 'Germany') {
        geographyImpact = 0.5;
    } else if (Geography === 'Spain') {
        geographyImpact = -0.3;
    }

    let genderImpact = 0;
    if (Gender === 'Male') {
        genderImpact = -0.1;
    } else {
        genderImpact = 0.1;
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
        coefficients.GenderImpact * genderImpact +
        coefficients.SurnameImpact * (Surname.length > 5 ? 0.03 : -0.03)
    );

    const probability = 1.00 / (1.00 + Math.exp(-linearCombination));

    return probability;
}
